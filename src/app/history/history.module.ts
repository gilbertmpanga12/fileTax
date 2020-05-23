import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    // MatInputModule,
    // MatFormFieldModule
  ]
})
export class HistoryModule { }
