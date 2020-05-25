import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm, FormControl} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../services/mainservice.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginGroup: FormGroup;
  matcher = new MyErrorStateMatcher();
  date: Date = new Date();
  year: number = this.date.getFullYear();
  constructor(private _fb: FormBuilder, private router: Router, 
    private service: MainserviceService) { }
  
  ngOnInit(): void {
    this.loginGroup = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logIn(email: string, password: string){

  }
  

}
