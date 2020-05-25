import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  date: Date = new Date();
  year: number = this.date.getFullYear();
  resetPasswordGroup: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  resetPassword(): void{
    this.resetPasswordGroup = this._fb.group({
      email: ['', Validators.required]
    });
  }
}
