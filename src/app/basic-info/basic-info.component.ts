import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/*
personalInfo:
-> Mother's Maiden Name
-> Marital Status of Applicant ( Single or Married)
-> Sex ( Male or Female)
-> telephone
-> Citizenship if NOT Ugandan
-> Are you Minor ( If YES provide details of Parents / guardian)
moreInfo:
Have you ever been known by another name ( If yes Provide names)
Have you previously applied for TIN ( if YES provide TIN)

# residence info
District,
❖ Trading center,
❖ City,
❖ Sub County,
❖ Parish, Village

documentsUpload:
Identification Documents required, two of the following)
*/
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  isLinear = false;
  personalInfo: FormGroup;
  moreInfo: FormGroup;
  residenceInfo: FormGroup;
  documentsUpload: FormGroup;
  sex: string[] = ['Male', 'Female'];
  maritalStatuses: string[] = ['Married', 'Single'];
  citizen: string[] = ['Yes','No'];
  minors: string[] = ['Yes', 'No']
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalInfo = this._formBuilder.group({
      motherMaidenName: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      sex: ['Female', Validators.required],
      telephone: ['', Validators.required],
      citizenship: ['', Validators.required],
      minor: ['', Validators.required]
    });

    this.moreInfo = this._formBuilder.group({
      secondaryName: ['', Validators.required],
      appliedForTin: ['', Validators.required],
      partnershipCorporateId: ['', Validators.required],
      sourceOfIncome: ['', Validators.required], // dynamic []
      tin: ['', Validators.required]// dynamic []
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
