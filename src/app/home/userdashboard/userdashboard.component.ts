import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DashboardCount } from 'src/app/models/datamodels';
import { MainserviceService } from 'src/app/services/mainservice.service';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent implements OnInit {
  
  dashboardCountDocument: AngularFirestoreDocument<DashboardCount>;
  items$: Observable<DashboardCount>;
  constructor(private firestore: AngularFirestore, private service: MainserviceService) { 
   this.dashboardCountDocument = this.firestore.doc('dashbordCounts/'+this.service.user.uid);
    this.items$ = this.dashboardCountDocument.valueChanges();
  }

  ngOnInit(): void {
    
  }

}
