import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../../services/mainservice.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';
import { TaxServices, OfflineTaxFiling } from '../../models/datamodels';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-offline-filing',
  templateUrl: './user-offline-filing.component.html',
  styleUrls: ['./user-offline-filing.component.scss']
})
export class UserOfflineFilingComponent implements OnInit {
  isLoading: boolean = false;
  dateScheduled: Date;
  showError: boolean = false;
  servicesRequired: string[] = [];
  taxServicesCollection: AngularFirestoreCollection<TaxServices>;
  taxServicesCollection$: Observable<TaxServices[]>;
  constructor(private service: MainserviceService, private firestore: AngularFirestore, private snackBar: MatSnackBar) { 
    this.taxServicesCollection = this.firestore.collection<TaxServices>('taxServices');
    this.taxServicesCollection$ = this.taxServicesCollection.valueChanges();
  }

  ngOnInit(): void {

  }

  addServices(service: MatCheckboxChange){
  if(service.checked){
    this.servicesRequired.push(service.source.value);
  }else{
   let position = this.servicesRequired.indexOf(service.source.value);
   this.servicesRequired.splice(position,1);
  }
  
  }

  submitOfflineRequest(){
    let userId = this.service.user.uid;
    this.isLoading = true;
  let payload: OfflineTaxFiling = {
    date: this.dateScheduled,
    taxServicesRequired: this.servicesRequired,
    requesteeType: "users",
    requesteeName: this.service.user.displayName,
    uid: userId,
    email: this.service.user.email,
    telephone: localStorage.getItem('phoneNumber')
  }
  if(this.servicesRequired.length > 0 && this.dateScheduled !== null){
    this.service.requestOfflineTaxation(payload, 'dashbordCounts/').then((resp) => {
      this.isLoading = false;
      this.snackbar('Offline request sent! You\' receive email comformation shortly');
    }).catch(err => {
      this.isLoading = false;
      this.snackbar('Oops something went wrong try again or contact support');
    });
   return;
  }
   this.isLoading = false;
   this.showError = true;

  }

  snackbar(message: string): void{
    this.snackBar.open(message,'OK',{duration: 3000,verticalPosition:'top',horizontalPosition:'right'});
  }

}
