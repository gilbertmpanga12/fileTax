import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm, FormControl} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MainserviceService } from '../services/mainservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface CompanyUser{
  email: string;
  password: string;
  companyName: string;
  address: string;
  companyFoundationDate: string;
  registrationNumber: string;
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-business-account',
  templateUrl: './create-business-account.component.html',
  styleUrls: ['./create-business-account.component.scss']
})
export class CreateBusinessAccountComponent implements OnInit {

  date: Date = new Date();
  year: number = this.date.getFullYear();
  registerGroup: FormGroup;
  matcher = new MyErrorStateMatcher();
  progressLoading: boolean = false;
  defatultText: string = 'Register Company Account'
  loadingText: string = 'Register Company Account';
  businessLogIn: string = 'Log In Company Account';
  constructor(private _fb: FormBuilder, private service: MainserviceService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerGroup = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      companyName: ['', Validators.required],
      address: ['', Validators.required],
      companyFoundationDate: [this.date],
      registrationNumber: ['', Validators.required]
    });
  }

  /*
  email: ['', Validators.required],
      password: ['', Validators.required],
      companyName: ['', Validators.required],
      address: ['', Validators.required],
      companyFoundationDate: ['', Validators.required],
      registrationNumber: ['', Validators.required]
  */

  register(): void {
    this.progressLoading = true;
    this.loadingText = '';
    let payload: CompanyUser = this.registerGroup.getRawValue();
    if(!this.registerGroup.invalid){
      this.service.storeCompanyProfile(payload.email,payload.password,payload.companyName,
        payload.address,payload.companyFoundationDate,payload.registrationNumber
        ).then((resp) => {
        this.progressLoading = false;
        this.loadingText = this.defatultText;
      }).catch(err => {
        this.progressLoading = false;
        this.loadingText = this.defatultText;
        this.snackbar(err.message);
      });
    }else{
      this.progressLoading = false;
      this.loadingText = this.defatultText;
     
    }
    
  }

  snackbar(message: string): void{
    this.snackBar.open(message,'OK',{duration: 3000,verticalPosition:'top',horizontalPosition:'right'});
  }

}
