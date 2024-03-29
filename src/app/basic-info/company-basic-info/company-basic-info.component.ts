import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MainserviceService } from '../../services/mainservice.service';
import { BasicProfileDocuments, CompanyProfile} from '../../models/datamodels';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { AngularFireUploadTask } from '@angular/fire/storage/task';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize} from 'rxjs/operators';

interface Residence{
  name: string;
  controller: string;
}

@Component({
  selector: 'app-company-basic-info',
  templateUrl: './company-basic-info.component.html',
  styleUrls: ['./company-basic-info.component.scss']
})
export class CompanyBasicInfoComponent implements OnInit {
  buttonsUpload: string[] = [
    'Company Form 20','Company Form 7', 'Certificate of Registration', 'Certificate of Incorporation'
];
  documents: BasicProfileDocuments[] = [{name: '',path:''}];
  asyncCounter = 0;
  isLinear = false;
  isLoading: boolean = false;
  primaryColor="primary";
  accentColor="accent";
  colorSets: Set<string> = new Set();
  globalDocsStore: any = {};
  personalInfo: FormGroup;
  moreInfo: FormGroup;
  
  residenceInfo: FormGroup;
  documentsUpload: FormGroup;
  financialsUpload: FormGroup;
  sex: string[] = ['Male', 'Female'];
  maritalStatuses: string[] = ['Married', 'Single'];
  citizen: string[] = ['Yes','No'];
  minors: string[] = ['Yes', 'No'];
  secondaryNames: string[] = this.minors;
  appliedForTins: string[] = this.minors;
  residenceControllers: Residence[] = [{name:'District',controller:'district'}, {name:'City',controller:'city'},
{name: 'Sub county',controller:'subCounty'}, {name: 'Parish', controller: 'parish'},
{name: 'Village', controller: 'village'}
];
 task: AngularFireUploadTask;
 percentage: Observable<number>;
 snapshot: Observable<any>;
 downloadURL: Observable<string>;
 documentFiles: BasicProfileDocuments[] = [];
  constructor(private _formBuilder: FormBuilder, private service: MainserviceService,
    private snackBar: MatSnackBar, private storage: AngularFireStorage
    ) { }

  ngOnInit(): void {
    this.personalInfo = this._formBuilder.group({
      address: ['', Validators.required],
      sourceOfIncome: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required]
    });

  
    this.moreInfo = this._formBuilder.group({
      tin: ['No', Validators.required],
      tinNumber: [''],
      refereeName: ['', Validators.required],
      // refereeTin: ['', Validators.required],
      refereeTelephone: ['', Validators.required]
    });


    this.documentsUpload = this._formBuilder.group({
      // associatedEntityName: [''],
      // associatedEntityTin: [''],
      companyForms: ['', Validators.required],
      certificatesOfRegistration: ['', Validators.required],
      directorsTin: ['']
    });
  }

    uploadDocuments(serviceName: string, event: FileList): void{
        this.colorSets.add(serviceName);
        const file = event.item(0);
        if (file.type.split('/')[0] == 'image' || file.type.split('/')[0] == 'video' || file.type.split('/')[0] == 'video') { 
        alert('Please enter only documents');
        return;
        }
       
       this.globalDocsStore[serviceName] = {
         name: serviceName,
         file: file
       }
    
    }

    deleteDocument(serviceName: string): void{
      this.colorSets.delete(serviceName);
      delete(this.globalDocsStore[serviceName]);
   
    }
  

   async startUpload(file: any, fileName: string, stepper: MatHorizontalStepper) {
     this.isLoading = true;
      const filePath = `profiles/${new Date().getTime()}_${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.percentage = task.percentageChanges();
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            this.documentFiles.push({name: fileName,path:url});
       
          });

        } )
        
     )
    .subscribe();
   
    }

     async submitBasicProfile(stepper: MatHorizontalStepper){
      
      for(let docs in this.globalDocsStore){
        this.asyncCounter +=1;
         await this.startUpload(this.globalDocsStore[docs]['file'], this.globalDocsStore[docs]['name'],stepper);
      }
      setTimeout(() =>{
        let personalInfo = this.personalInfo.getRawValue(),
        moreInfo = this.moreInfo.getRawValue(), documentsUpload = this.documentsUpload.getRawValue();
        let payload: CompanyProfile = {
          address: personalInfo['address'],
          fullName: personalInfo['fullName'],
          email: personalInfo['email'],
          telephone: personalInfo['telephone'],
          refereeName: moreInfo['refereeName'],
          refereeTelephone: moreInfo['refereeTelephone'],
          // refereeTin: moreInfo['refereeTin'],
          tin: moreInfo['tinNumber'],
          // associatedEntityName: documentsUpload['associatedEntityName'],
          // associatedEntityTin: documentsUpload['associatedEntityTin'],
          sourceOfIncome: personalInfo['sourceOfIncome'],
          keyDocuments: this.documentFiles,
          uid: this.service.user.uid
        };
   
        this.service.createBasicFileCompany(payload).then(res => {
          this.isLoading = false;
          this.snackbar('Great! your profile is up and ready. Start filing taxes now');
          this.service.getPhoneNumber(personalInfo['telephone'], 'basicCompanyProfile');
          stepper.reset();
      }).catch(err => {
        this.isLoading = false;
        this.snackbar('Oops something went wrong. Try again or contact support');
      });
       }, 9000);
      
     
      
    }


    snackbar(message: string): void{
      this.snackBar.open(message,'OK',{duration: 3000,verticalPosition:'top',horizontalPosition:'right'});
    }



}
