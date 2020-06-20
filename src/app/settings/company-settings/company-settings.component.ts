import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../../services/mainservice.service';
import { IndividualUser, DialogActtion } from '../../models/datamodels';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { ResetpasswordmodelComponent } from '../resetpasswordmodel/resetpasswordmodel.component';
import { AngularFireUploadTask } from '@angular/fire/storage/task';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent implements OnInit {
  userProfile: AngularFirestoreDocument<IndividualUser>;
  userProfile$: Observable<IndividualUser>;
  showPassword: boolean = false;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
 
   constructor(public service: MainserviceService, private firestore: AngularFirestore, public dialog: MatDialog,
     private storage: AngularFireStorage
     ) {
     this.userProfile = this.firestore.doc('users/' + this.service.user.uid);
     this.userProfile$ = this.userProfile.valueChanges();
    }
 
   ngOnInit(): void {
   }
 
   
   
   openDialog(actionType: string): void {
     const dialogRef = this.dialog.open(ResetpasswordmodelComponent, {
       width: '320px',
       data: {actionType: actionType}
     });
   }
 
   togglePassword(): void{
     this.showPassword = !this.showPassword;
   }
 
   startUpload(event: FileList): void{
     const file = event.item(0);
     if (file.type.split('/')[0] !== 'image') { 
       this.openDialog('error');
       return;
     }
     const filePath = `profiles/${new Date().getTime()}_${file.name}`;
     const fileRef = this.storage.ref(filePath);
     const task = this.storage.upload(filePath, file);
     this.percentage = task.percentageChanges();
     task.snapshotChanges().pipe(
       finalize(() => {
         this.downloadURL = fileRef.getDownloadURL();
         // this.percentage = null;
         this.downloadURL.subscribe(url => this.service.updateUserProfilePicture(url));
       } )
       
    )
   .subscribe();
 
   }

}
