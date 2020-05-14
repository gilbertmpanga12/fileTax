import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileMyTaxesComponent } from './file-my-taxes.component';

const routes: Routes = [{ path: '', component: FileMyTaxesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileMyTaxesRoutingModule { }
