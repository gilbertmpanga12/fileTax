import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { UserTaxformsComponent } from './user-taxforms/user-taxforms.component';
import { CompanyTaxformsComponent } from './company-taxforms/company-taxforms.component';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  declarations: [ServicesComponent, UserTaxformsComponent, CompanyTaxformsComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatChipsModule
  ]
})
export class ServicesModule { }
