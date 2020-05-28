import { Component, OnInit, Inject } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogActtion } from 'src/app/models/datamodels';

@Component({
  selector: 'app-resetpasswordmodel',
  templateUrl: './resetpasswordmodel.component.html',
  styleUrls: ['./resetpasswordmodel.component.scss']
})
export class ResetpasswordmodelComponent implements OnInit {
  isLoading: boolean = false;
  isRequestSent: boolean = false;
  action: string;
  constructor(public service: MainserviceService, public modalRef: MatDialogRef<ResetpasswordmodelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogActtion
    ) { }

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
