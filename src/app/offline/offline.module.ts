import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfflineRoutingModule } from './offline-routing.module';
import { OfflineComponent } from './offline.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms'; // ReactiveFormsModule, 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserOfflineFilingComponent } from './user-offline-filing/user-offline-filing.component';
import { CompanyOfflineFilingComponent } from './company-offline-filing/company-offline-filing.component';

@NgModule({
  declarations: [OfflineComponent, UserOfflineFilingComponent, CompanyOfflineFilingComponent],
  imports: [
    CommonModule,
    OfflineRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDividerModule,
    FormsModule,
    MatDatepickerModule, MatNativeDateModule,
    MatInputModule, MatFormFieldModule,
    MatSnackBarModule
  ]
})
export class OfflineModule { }
