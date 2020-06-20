import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileMyTaxesRoutingModule } from './file-my-taxes-routing.module';
import { FileMyTaxesComponent } from './file-my-taxes.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FileTaxesUserComponent } from './file-taxes-user/file-taxes-user.component';
import { FileTaxesBusinessComponent } from './file-taxes-business/file-taxes-business.component';

@NgModule({
  declarations: [FileMyTaxesComponent, FileTaxesUserComponent, FileTaxesBusinessComponent],
  imports: [
    CommonModule,
    FileMyTaxesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule
  ]
})
export class FileMyTaxesModule { }
