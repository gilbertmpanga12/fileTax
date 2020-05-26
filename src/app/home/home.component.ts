import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MainserviceService } from '../services/mainservice.service';
import { Observable } from 'rxjs';
import { DashboardCount } from '../models/datamodels';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dashboardCountDocument: AngularFirestoreDocument<DashboardCount>;
  items$: Observable<DashboardCount>;
  constructor(private firestore: AngularFirestore, private service: MainserviceService) { 
   this.dashboardCountDocument = this.firestore.doc('dashbordCounts/'+this.service.user.uid);
    this.items$ = this.dashboardCountDocument.valueChanges();
  }

  ngOnInit(): void {
    
  }



}
