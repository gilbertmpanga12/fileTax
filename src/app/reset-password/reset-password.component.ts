import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainserviceService } from '../services/mainservice.service';
import {MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  date: Date = new Date();
  year: number = this.date.getFullYear();
  resetPasswordGroup: FormGroup;
  isLoading: boolean = false;
  constructor(private _fb: FormBuilder, private service: MainserviceService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.resetPasswordGroup = this._fb.group({
      email: ['', Validators.required]
    });
  }

  resetPassword(): void{
    this.isLoading = true;
    let email = this.resetPasswordGroup.get('email').value;
   if(this.resetPasswordGroup.valid){
    this.service.sendPasswordResetEmail(email).then((resp) => {
      this.isLoading = false;
      this.snackbar('Password reset, log in again with your new password');
    }).catch(err => {
      this.isLoading = false;
      this.snackbar(err.message);
    });
   }
  }

  snackbar(message: string): void{
    this.snackBar.open(message,'OK',{duration: 3000,verticalPosition:'top',horizontalPosition:'right'});
  }
}
