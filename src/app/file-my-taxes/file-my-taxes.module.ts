import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileMyTaxesRoutingModule } from './file-my-taxes-routing.module';
import { FileMyTaxesComponent } from './file-my-taxes.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [FileMyTaxesComponent],
  imports: [
    CommonModule,
    FileMyTaxesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule
  ]
})
export class FileMyTaxesModule { }
