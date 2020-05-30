import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import { TaxNotifications } from '../models/datamodels';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  // folders: Section[] = [
  //   {
  //     name: '5 services requested for offline filing',
  //     updated: new Date('1/1/16'),
  //   },
  //   {
  //     name: 'Completed filing Pay As You Earn',
  //     updated: new Date('1/17/16'),
  //   },
  //   {
  //     name: 'Completed filing tax returns',
  //     updated: new Date('1/28/16'),
  //   }
  // ];
  notificationsCollection: AngularFirestoreCollection<TaxNotifications>;
  notificationsCollection$: Observable<TaxNotifications[]>;
  
  constructor(private service: MainserviceService, private firestore: AngularFirestore) { 
    this.notificationsCollection = this.firestore.collection('users')
    .doc(this.service.user.uid).collection<TaxNotifications>('notifications');
    this.notificationsCollection$ = this.notificationsCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
