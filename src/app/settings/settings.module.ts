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

@NgModule({
  declarations: [SettingsComponent, ResetpasswordmodelComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule
  ]
})
export class SettingsModule { }
