import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DashboardCount } from 'src/app/models/datamodels';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeComponent } from '../welcome/welcome.component';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent implements OnInit {
  
  dashboardCountDocument: AngularFirestoreDocument<DashboardCount>;
  items$: Observable<DashboardCount>;
  constructor(private firestore: AngularFirestore, private service: MainserviceService,
    public dialog: MatDialog
    ) { 
   this.dashboardCountDocument = this.firestore.doc('dashbordCounts/'+this.service.user.uid);
    this.items$ = this.dashboardCountDocument.valueChanges();
  }

  ngOnInit(): void {
    if(localStorage.getItem('firstSignIn') == 'true'){
      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(WelcomeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
