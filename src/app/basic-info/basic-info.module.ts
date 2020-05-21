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


@NgModule({
  declarations: [BasicInfoComponent],
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
    MatTooltipModule
  ]
})
export class BasicInfoModule { }
