import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IndividualUser, TaxServices } from 'src/app/models/datamodels';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-file-taxes-user',
  templateUrl: './file-taxes-user.component.html',
  styleUrls: ['./file-taxes-user.component.scss']
})
export class FileTaxesUserComponent implements OnInit {

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
