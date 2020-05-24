import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
date: Date = new Date();
year: number = this.date.getFullYear();
loginGroup: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginGroup = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
