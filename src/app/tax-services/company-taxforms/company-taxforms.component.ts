import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, Params, RoutesRecognized} from '@angular/router';
import {CompanyServices} from '../../models/user-services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { AngularFireUploadTask } from '@angular/fire/storage/task';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize} from 'rxjs/operators';
import { BasicProfileDocuments, Filings } from '../../models/datamodels';
import { MainserviceService } from '../../services/mainservice.service';

@Component({
  selector: 'app-company-taxforms',
  templateUrl: './company-taxforms.component.html',
  styleUrls: ['./company-taxforms.component.scss']
})
export class CompanyTaxformsComponent implements OnInit {
// isLinear: boolean = true;
serviceName: string = '';
description: string = '';
step1: FormGroup;
step2: FormGroup;
step3: FormGroup;
isLoading: boolean = false;
primaryColor="primary";
accentColor="accent";
colorSets: Set<string> = new Set();
globalDocsStore: any = {};
mainServiceFiled: any = {};
task: AngularFireUploadTask;
percentage: Observable<number>;
snapshot: Observable<any>;
downloadURL: Observable<string>;
documentFiles: BasicProfileDocuments[] = [];
supportDocuments1 =  [
  'Customer invoices',
  'Customer receipts',
  'Employment income payslips',
  'Bank Statements',
  'Suppliers invoices and receipts',
  'Sales ledger',
  'Expenses ledger'
  ];
  supportDocuments2 = [
    'Cash book ledger',
    'Cash book ledger',
    'Receivables ledger',
    'Payables ledgers',
    'Inventory record',
    'Tax records',
    'Payment vouchers',
    'TIN of landlord if renting',
    'Staff payroll'
    ];
constructor(private router: Router,  
  private route: ActivatedRoute, private _fb: FormBuilder, private storage: AngularFireStorage,
  private service: MainserviceService, private snackBar: MatSnackBar) {
   
   }

ngOnInit(): void {
  this.route.params.subscribe(param => {
    this.serviceName = CompanyServices[param.serviceName]['serviceName'];
    this.description = CompanyServices[param.serviceName]['description'];

  });

  this.step1 = this._fb.group({
    stepcontrol1: ['', Validators.required]
  });
  this.step2 = this._fb.group({
    stepcontrol2: ['', Validators.required]
  });
  this.step3 = this._fb.group({
    stepcontrol3: ['', Validators.required]
  });
}

uploadMainDocument(event: FileList, stepper: MatHorizontalStepper){
  const file = event.item(0);
  if (file.type.split('/')[0] == 'image' || file.type.split('/')[0] == 'video' || file.type.split('/')[0] == 'video') { 
    alert('Please enter only documents');
    return;
  }
  this.step1.patchValue({stepcontrol1: '1'});
  this.colorSets.delete(this.serviceName);
  this.step2.patchValue({stepcontrol2: '2'});
  this.globalDocsStore[this.serviceName] = {
    name: this.serviceName,
    file: file
  };
  stepper.next();

}
deleteMainDocument(serviceName: string): void{
  this.colorSets.delete(serviceName);
  this.mainServiceFiled = {};

}

uploadDocuments(serviceName: string, event: FileList): void{
  this.colorSets.add(serviceName);
  const file = event.item(0);
  if (file.type.split('/')[0] == 'image' || file.type.split('/')[0] == 'video' || file.type.split('/')[0] == 'video') { 
  alert('Please enter only documents');
  return;
  }
  this.step2.patchValue({stepcontrol2: '2'});
 this.globalDocsStore[serviceName] = {
   name: serviceName,
   file: file
 };

//  stepper.next();
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


async submit(stepper: MatHorizontalStepper){
for(let docs in this.globalDocsStore){
 
   await this.startUpload(this.globalDocsStore[docs]['file'], this.globalDocsStore[docs]['name'],stepper);
}
setTimeout(() => {

  let payload: Filings = {
    supportingDocuments: this.documentFiles
    
  };
 
  this.service.uploadTaxFiles(payload).then(res => {
    this.isLoading = false;
    this.snackbar('Great! your taxes have succesfully been submitted for filing');
    stepper.reset();
 }).catch(err => {

  this.isLoading = false;
  this.snackbar('Oops something went wrong. Try again or contact support');
 });
 }, 10000);
}

snackbar(message: string): void{
this.snackBar.open(message,'OK',{duration: 3000,verticalPosition:'top',horizontalPosition:'right'});
}
}
