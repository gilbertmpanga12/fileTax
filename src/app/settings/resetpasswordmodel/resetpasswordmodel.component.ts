import { Component, OnInit, Inject } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogActtion } from 'src/app/models/datamodels';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpasswordmodel',
  templateUrl: './resetpasswordmodel.component.html',
  styleUrls: ['./resetpasswordmodel.component.scss']
})
export class ResetpasswordmodelComponent implements OnInit {
  isLoading: boolean = false;
  isRequestSent: boolean = false;
  action: string;
  tinIdResetform: FormGroup;
  resetPinPasswordform: FormGroup;
  constructor(public service: MainserviceService, public modalRef: MatDialogRef<ResetpasswordmodelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogActtion, private snackBar: MatSnackBar, private _fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.resetPinPasswordform = this._fb.group({
      tinPassword: ['', Validators.required]
    });
    this.tinIdResetform = this._fb.group({
      tinId: ['', Validators.required]
    });
  
  }

  resetPassword(): void{
    this.isLoading = true;
     this.service.sendPasswordResetEmail(this.service.user.email).then((res) => {
       this.isLoading = false;
       this.isRequestSent = true;
      //  this.modalRef.close();
     }).catch(err => {
       this.isLoading = false;
       alert(err.message);
     });
  }

  resetTinId(){
    let tinId = this.tinIdResetform.get('tinId').value;
    console.log('XM my tin id ' + tinId);
    this.isLoading = true;
    this.service.resetTinId(tinId).then((res) => {
      this.isLoading = false;
      this.modalRef.close();
      this.snackbar('TIN ID reset successfully');
    }).catch(err => {
      console.log(err.message);
      this.isLoading = false;
      this.snackbar('Oops something went wrong, try again');
    });
  }

  resetTinPassword(){
    let tinPassword = this.resetPinPasswordform.get('tinPassword').value;
    console.log('shhhhh' + tinPassword)
    this.isLoading = true;
    this.service.resetTinPassword(tinPassword).then((res) => {
      this.isLoading = false;
      this.modalRef.close();
      this.snackbar('TIN password reset successfully');
    }).catch(err => {
      console.log(err.message);
      this.isLoading = false;
      this.modalRef.close();
      this.snackbar('Oops something went wrong, try again');
    });
  }

  snackbar(message: string): void{
    this.snackBar.open(message,'OK',{duration: 3000,verticalPosition:'top',horizontalPosition:'right'});
  }
}
