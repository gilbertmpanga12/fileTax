import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IndividualUser, TaxServices } from 'src/app/models/datamodels';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-file-taxes-business',
  templateUrl: './file-taxes-business.component.html',
  styleUrls: ['./file-taxes-business.component.scss']
})
export class FileTaxesBusinessComponent implements OnInit {

  basicInfodoc: AngularFirestoreDocument<IndividualUser>;
  basicInfo$: Observable<IndividualUser>;
  servicesDocumentCollection: AngularFirestoreCollection<TaxServices>;
  serviceCollection$: Observable<TaxServices[]>;
  constructor(private firestore: AngularFirestore, private service: MainserviceService) { 
    this.basicInfodoc = this.firestore.doc('company_users/' + this.service.user.uid);
    this.basicInfo$ = this.basicInfodoc.valueChanges();
    this.servicesDocumentCollection = this.firestore.collection<TaxServices>('businessTaxServices');
    this.serviceCollection$ = this.servicesDocumentCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
