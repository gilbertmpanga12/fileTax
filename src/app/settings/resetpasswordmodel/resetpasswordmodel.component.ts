import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-resetpasswordmodel',
  templateUrl: './resetpasswordmodel.component.html',
  styleUrls: ['./resetpasswordmodel.component.scss']
})
export class ResetpasswordmodelComponent implements OnInit {
  isLoading: boolean = false;
  isRequestSent: boolean = false;
  constructor(public service: MainserviceService, public modalRef: MatDialogRef<ResetpasswordmodelComponent>) { }

  ngOnInit(): void {
  }

  resetPassword(): void{
    this.isLoading = true;
     this.service.sendPasswordResetEmail(this.service.user.email).then((res) => {
       this.isLoading = false;
       this.isRequestSent = true;
      //  this.modalRef.close();
     }).catch(err => {
       this.isLoading = false;
       alert(err.message);
     });
  }

}
