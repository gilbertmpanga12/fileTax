import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainserviceService } from '../services/mainservice.service';

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
  constructor(private _fb: FormBuilder, private service: MainserviceService) { }

  ngOnInit(): void {
    this.resetPasswordGroup = this._fb.group({
      email: ['', Validators.required]
    });
  }

  resetPassword(): void{
    this.isLoading = true;
    let email = this.resetPasswordGroup.get('email').value;
    this.service.sendPasswordResetEmail(email).then((resp) => {
      this.isLoading = false;
    }).catch(err => {
      this.isLoading = false;
    }) ;
  }
}
