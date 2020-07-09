import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainserviceService } from '../services/mainservice.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  hasSubmittedForm: boolean = false;
  isLoading: boolean = false;
  emailForm: FormGroup;
  constructor(private _fb: FormBuilder, public service: MainserviceService) { }

  ngOnInit(): void {
   this.emailForm =  this._fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  resendEmailConfirmation(): void {
    this.isLoading = true;
     if(this.service.userVerified){
       this.isLoading = false;
       return;
     }else{

       this.service.sendEmailVerification().then((e) =>  {
        this.hasSubmittedForm = true;
       });
     }
  }
}
