import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MainserviceService } from '../services/mainservice.service';
import { BasicProfile , BasicProfileDocuments} from '../models/datamodels';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { AngularFireUploadTask } from '@angular/fire/storage/task';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';

interface Residence{
  name: string;
  controller: string;
}

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  buttonsUpload: string[] = ['National ID', 'NSSF card', 'Passport', 'Employee ID', 
  'Voters Card', 'Drivers Permit', 'Work Permit', 'Village ID', 'Diplomatic foreign Affairs ID', 'Refugee ID',
'Business Certificate if any'
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
      motherMaidenName: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      sex: ['Female', Validators.required],
      telephone: ['', Validators.required],
      citizenship: ['', Validators.required]
    });

    this.moreInfo = this._formBuilder.group({
      aliasNameKnown: ['No', Validators.required],
      // appliedForTin: ['', Validators.required],
      corporatePartnership: [''],
      //tin: ['', Validators.required],// dynamic [],
      aliasFullName: [''], // appliess to secondary name,
      minor: ['No', Validators.required],
      minorGuardianName: ['']// applies to minors
    });

    this.financialsUpload = this._formBuilder.group({
      sourceOfIncome: ['Self employed', Validators.required],
      employerName: [''],
      employerTin: [''],
      employerTelephoneNumber: [''],
      selfEmployed: [''],
      selfEmployedAddress: [''], // works for businessCertificate value,
      selfEmployedTin: ['']
    });

    this.residenceInfo = this._formBuilder.group({
      district: ['', Validators.required],
      city: ['', Validators.required],
      subCounty: ['', Validators.required],
      parish: ['', Validators.required],
      village: ['', Validators.required]
    });

    this.documentsUpload = this._formBuilder.group({
      nationalId: ['', Validators.required],
      nssfCard: ['', Validators.required],
      passport: ['', Validators.required],
      employeeId: ['', Validators.required],
      votersCard: ['', Validators.required],
      workPermit: ['', Validators.required],
      villageId: ['', Validators.required],
      diplomaticForeignAffairsId: ['', Validators.required],
      refugeeId: ['', Validators.required]
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
       console.log(this.globalDocsStore);
    }

    deleteDocument(serviceName: string): void{
      this.colorSets.delete(serviceName);
      delete(this.globalDocsStore[serviceName]);
      console.log(this.globalDocsStore);
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
            console.log(this.documentFiles);
          });

        } )
        
     )
    .subscribe();
   setTimeout(() =>{
    let personalInfo = this.personalInfo.getRawValue(),
    moreInfo = this.moreInfo.getRawValue(), financialsUpload = this.financialsUpload.getRawValue(),
    residenceInfo = this.residenceInfo.getRawValue();
    let payload: BasicProfile = {
      motherMaidenName: personalInfo['motherMaidenName'],
      maritalStatus: personalInfo['maritalStatus'],
      sex: personalInfo['sex'],
      telephone: personalInfo['telephone'],
      citizenship: personalInfo['citizenship'],
      aliasNameKnown: moreInfo['aliasNameKnown'],
      aliasFullName: moreInfo['aliasFullName'],
      corporatePartnership: moreInfo['corporatePartnership'],
      sourceOfIncome: financialsUpload['sourceOfIncome'],
      selfEmployedTin: financialsUpload['selfEmployedTin'],
      selfEmployedAddress: financialsUpload['selfEmployedAddress'],
      district: residenceInfo['district'],
      village: residenceInfo['village'],
      parish: residenceInfo['parish'],
      subCounty: residenceInfo['subCounty'],
      city: residenceInfo['city'],
      documents: this.documentFiles,
      uid: this.service.user.uid,
      minor: moreInfo['minor'],
      employerName: financialsUpload['employerName'],
      employerTelephoneNumber: financialsUpload['employerTelephoneNumber'],
      employerTin: financialsUpload['employerTin'],
      minorGuardianName: moreInfo['minorGuardianName'],
      profileSetup: 100
    };
    console.log(payload);
    this.service.createBasicFile(payload).then(res => {
      this.isLoading = false;
      this.snackbar('Great! your profile is up and ready. Start filing taxes now');
      stepper.reset();
  }).catch(err => {
    console.log(err.message);
    this.isLoading = false;
    this.snackbar('Oops something went wrong. Try again or contact support');
  });
   }, 9000);
  
    }

     async submitBasicProfile(stepper: MatHorizontalStepper){
      
      for(let docs in this.globalDocsStore){
        this.asyncCounter +=1;
         await this.startUpload(this.globalDocsStore[docs]['file'], this.globalDocsStore[docs]['name'],stepper);
      }
      
     
      
    }


    snackbar(message: string): void{
      this.snackBar.open(message,'OK',{duration: 3000,verticalPosition:'top',horizontalPosition:'right'});
    }

}
