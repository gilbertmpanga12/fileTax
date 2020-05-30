import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, Params, RoutesRecognized} from '@angular/router';
import {UserServices} from '../models/user-services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceName: string = '';
  description: string = '';
  uploadServiceGroup: FormGroup;
  isLoading: boolean = false;
  primaryColor="primary";
  accentColor="accent";
  colorSets: Set<string> = new Set();
  globalDocsStore: any = {};
  mainServiceFiled: any = {};
  constructor(private router: Router,  
    private route: ActivatedRoute, private _fb: FormBuilder) {
      this.uploadServiceGroup = this._fb.group({
        serviceName: ['', Validators.required]
      })
     }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.serviceName = UserServices[param.serviceName]['serviceName'];
      this.description = UserServices[param.serviceName]['description'];

    });
  }

  uploadMainDocument(event: FileList, stepper: MatHorizontalStepper){
    const file = event.item(0);
    if (file.type.split('/')[0] == 'image' || file.type.split('/')[0] == 'video' || file.type.split('/')[0] == 'video') { 
      alert('Please enter only documents');
      return;
    }
    this.colorSets.delete(this.serviceName);
    this.mainServiceFiled.name = this.serviceName;
    this.mainServiceFiled.path = file;
    console.log(this.mainServiceFiled);
    stepper.next();

  }
  deleteMainDocument(serviceName: string): void{
    this.colorSets.delete(serviceName);
    this.mainServiceFiled = {};
    console.log(this.globalDocsStore);
  }

}
