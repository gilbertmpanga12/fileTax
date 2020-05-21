import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Residence{
  name: string;
  controller: string;
}

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  buttonsUpload: string[] = ['National ID', 'NSSF card', 'Passport', 'Employee ID', 
  'Voters Card', 'Drivers Permit', 'Work Permit', 'Village ID', 'Diplomatic foreign Affairs ID', 'Refugee ID',
'Business Certificate if any'
];
  isLinear = false;
  personalInfo: FormGroup;
  moreInfo: FormGroup;
  residenceInfo: FormGroup;
  documentsUpload: FormGroup;
  financialsUpload: FormGroup;
  sex: string[] = ['Male', 'Female'];
  maritalStatuses: string[] = ['Married', 'Single'];
  citizen: string[] = ['Yes','No'];
  minors: string[] = ['Yes', 'No'];
  secondaryNames: string[] = this.minors;
  appliedForTins: string[] = this.minors;
  residenceControllers: Residence[] = [{name:'District',controller:'district'}, {name:'City',controller:'city'},
{name: 'Sub county',controller:'subCounty'}, {name: 'Parish', controller: 'parish'},
{name: 'Village', controller: 'village'}
];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalInfo = this._formBuilder.group({
      motherMaidenName: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      sex: ['Female', Validators.required],
      telephone: ['', Validators.required],
      citizenship: ['', Validators.required]
    });

    this.moreInfo = this._formBuilder.group({
      secondaryName: ['No', Validators.required],
      appliedForTin: ['', Validators.required],
      partnershipCorporateId: ['', Validators.required],
      tin: ['', Validators.required],// dynamic [],
      secondName: [''], // appliess to secondary name,
      minor: ['No', Validators.required],
      parentsName: ['', Validators.required]// applies to minors
    });

    this.financialsUpload = this._formBuilder.group({
      sourceOfIncome: ['Self employed', Validators.required],
      refereeName: [''],
      refereeTin: [''],
      refereetelephone: [''],
      selfEmployed: [''],
      businessAddress: [''], // works for businessCertificate value,
      selfEmployedTin: ['']
    });

    this.residenceInfo = this._formBuilder.group({
      district: ['', Validators.required],
      city: ['', Validators.required],
      subCounty: ['', Validators.required],
      parish: ['', Validators.required],
      village: ['', Validators.required]
    });

    this.documentsUpload = this._formBuilder.group({
      nationalId: ['', Validators.required],
      nssfCard: ['', Validators.required],
      passport: ['', Validators.required],
      employeeId: ['', Validators.required],
      votersCard: ['', Validators.required],
      workPermit: ['', Validators.required],
      villageId: ['', Validators.required],
      diplomaticForeignAffairsId: ['', Validators.required],
      refugeeId: ['', Validators.required]
    });
  }
  
  // test(){
  //   console.log(this.personalInfo.getRawValue())
  // }

}
