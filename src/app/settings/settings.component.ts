import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../services/mainservice.service';
import { IndividualUser } from '../models/datamodels';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { ResetpasswordmodelComponent } from './resetpasswordmodel/resetpasswordmodel.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
 userProfile: AngularFirestoreDocument<IndividualUser>;
 userProfile$: Observable<IndividualUser>;

  constructor(public service: MainserviceService, private firestore: AngularFirestore, public dialog: MatDialog) {
    this.userProfile = this.firestore.doc('users/' + this.service.user.uid);
    this.userProfile$ = this.userProfile.valueChanges();
   }

  ngOnInit(): void {
  }

  
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ResetpasswordmodelComponent, {
      width: '320px'
    });
  }
}
