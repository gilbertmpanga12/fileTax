import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MainserviceService } from '../services/mainservice.service';
import { IndividualUser } from '../models/datamodels';
import { Observable } from 'rxjs';

interface AccountType {
  isCompany: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accountType: AngularFirestoreDocument<AccountType>;
  accountType$: Observable<AccountType>;
constructor(private firestore: AngularFirestore, private service: MainserviceService){
  this.accountType = this.firestore.doc<AccountType>('sessionRegister/' + this.service.user.uid);
  this.accountType$ = this.accountType.valueChanges();
}

ngOnInit(){}

}
