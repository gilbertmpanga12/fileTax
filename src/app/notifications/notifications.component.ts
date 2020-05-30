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
