import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainserviceService } from '../services/mainservice.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  hasSubmittedForm: boolean = false;
  isLoading: boolean = false;
  emailForm: FormGroup;
  constructor(private _fb: FormBuilder, public service: MainserviceService,
    private dialogRef: MatDialogRef<DialogComponent>
    ) { }

  ngOnInit(): void {
   this.emailForm =  this._fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  resendEmailConfirmation(): void {
    this.isLoading = true;
     if(this.service.userVerified){
       this.isLoading = false;
       this.dialogRef.close();
       this.service.snackbar('This user is already verified log try to log in again');
       return;
     }else{

       this.service.sendEmailVerification().then((e) =>  {
        this.hasSubmittedForm = true;
       });
     }
  }
}
