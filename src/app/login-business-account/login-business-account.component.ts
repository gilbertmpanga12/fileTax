import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm, FormControl} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../services/mainservice.service';
import { MatSnackBarRef, MatSnackBar } from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login-business-account',
  templateUrl: './login-business-account.component.html',
  styleUrls: ['./login-business-account.component.scss']
})
export class LoginBusinessAccountComponent implements OnInit {
  loginGroup: FormGroup;
  matcher = new MyErrorStateMatcher();
  date: Date = new Date();
  year: number = this.date.getFullYear();
  progressLoading: boolean = false;
  defatultText: string = 'Log In Company Account';
  loadingText: string = 'Log In Company Account';
  businessText: string = 'Create Company Account';
  constructor(private _fb: FormBuilder, private router: Router, 
    private service: MainserviceService, private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.loginGroup = this._fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  logIn(email: string, password: string){
    this.progressLoading = true;
    this.loadingText = '';
    if(!this.loginGroup.invalid){
      this.service.login(email,password).then((resp) => {
        this.progressLoading = false;
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
  
  navigateToOtherPages(url: string){
    this.router.navigate([url]);
  }

}
