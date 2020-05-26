import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MainserviceService } from '../services/mainservice.service';
import { Observable } from 'rxjs';
import { TaxServices, IndividualUser } from '../models/datamodels';


@Component({
  selector: 'app-file-my-taxes',
  templateUrl: './file-my-taxes.component.html',
  styleUrls: ['./file-my-taxes.component.scss']
})
export class FileMyTaxesComponent implements OnInit {
  basicInfodoc: AngularFirestoreDocument<IndividualUser>;
  basicInfo$: Observable<IndividualUser>;
  servicesDocumentCollection: AngularFirestoreCollection<TaxServices>;
  serviceCollection$: Observable<TaxServices[]>;
  constructor(private firestore: AngularFirestore, private service: MainserviceService) { 
    this.basicInfodoc = this.firestore.doc('users/' + this.service.user.uid);
    this.basicInfo$ = this.basicInfodoc.valueChanges();
    this.servicesDocumentCollection = this.firestore.collection<TaxServices>('taxServices');
    this.serviceCollection$ = this.servicesDocumentCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
