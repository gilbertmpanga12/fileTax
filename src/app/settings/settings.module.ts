import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ResetpasswordmodelComponent } from './resetpasswordmodel/resetpasswordmodel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';

@NgModule({
  declarations: [SettingsComponent, ResetpasswordmodelComponent, UserSettingsComponent, CompanySettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class SettingsModule { }
