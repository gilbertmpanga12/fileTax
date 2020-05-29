import { Component, OnInit, EventEmitter } from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';
import { TaxServices } from '../models/datamodels';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss']
})
export class OfflineComponent implements OnInit {
  dateScheduled: Date;
  showError: boolean = false;
  servicesRequired: string[] = [];
  taxServicesCollection: AngularFirestoreCollection<TaxServices>;
  taxServicesCollection$: Observable<TaxServices[]>;
  constructor(private service: MainserviceService, private firestore: AngularFirestore) { 
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
  let payload = {
    date: this.dateScheduled,
    taxServicesRequired: this.servicesRequired,
    requesteeType: "individual",
    requesteeName: this.service.user.displayName
  }
  if(this.servicesRequired.length > 0 && this.dateScheduled !== null){
    console.log(payload)
   return;
  }
   this.showError = true;

  }

}
