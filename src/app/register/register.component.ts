import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm, FormControl} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MainserviceService } from '../services/mainservice.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  date: Date = new Date();
  year: number = this.date.getFullYear();
  registerGroup: FormGroup;
  matcher = new MyErrorStateMatcher();
  progressLoading: boolean = false;

  constructor(private _fb: FormBuilder, private service: MainserviceService) { }

  ngOnInit(): void {
    this.registerGroup = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      
    });
  }

  register(): void {
    this.progressLoading = true;
    let payload = this.registerGroup.getRawValue();
    if(!this.registerGroup.invalid){
      this.service.register(payload['email'],payload['firstName'],payload['lastName'],
      payload['address'], payload['dateOfBirth'],payload['password']).then((resp) => {
        this.progressLoading = false;
      }).catch(err => {
        this.progressLoading = false;
      });
    }else{
      this.progressLoading = false;
    }
    
  }

}
