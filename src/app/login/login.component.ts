import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm, FormControl} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
date: Date = new Date();
year: number = this.date.getFullYear();
loginGroup: FormGroup;
matcher = new MyErrorStateMatcher();
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginGroup = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
