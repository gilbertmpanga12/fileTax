import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileMyTaxesRoutingModule } from './file-my-taxes-routing.module';
import { FileMyTaxesComponent } from './file-my-taxes.component';


@NgModule({
  declarations: [FileMyTaxesComponent],
  imports: [
    CommonModule,
    FileMyTaxesRoutingModule
  ]
})
export class FileMyTaxesModule { }
