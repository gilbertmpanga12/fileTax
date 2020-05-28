import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm, FormControl} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MainserviceService } from '../services/mainservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  defatultText: string = 'Register';
  loadingText: string = 'Register';
  constructor(private _fb: FormBuilder, private service: MainserviceService, private snackBar: MatSnackBar) { }

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
    this.loadingText = '';
    let payload = this.registerGroup.getRawValue();
    if(!this.registerGroup.invalid){
      this.service.register(payload['email'],payload['firstName'],payload['lastName'],
      payload['dateOfBirth'], payload['address'],payload['password']).then((resp) => {
        // this.progressLoading = false;
        // this.loadingText = this.defatultText;
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
