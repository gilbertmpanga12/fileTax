import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInfoRoutingModule } from './basic-info-routing.module';
import { BasicInfoComponent } from './basic-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { UserBasicInfoComponent } from './user-basic-info/user-basic-info.component';
import { CompanyBasicInfoComponent } from './company-basic-info/company-basic-info.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [BasicInfoComponent, UserBasicInfoComponent, CompanyBasicInfoComponent],
  imports: [
    CommonModule,
    BasicInfoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatIconModule,
    MatStepperModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule
  ]
})
export class BasicInfoModule { }
