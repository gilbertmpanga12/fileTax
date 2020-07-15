import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CompanydasboardComponent } from './companydasboard/companydasboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserHistoryComponent } from './user-history/user-history.component';
import { CompanyHistoryComponent } from './company-history/company-history.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { WelcomeModule } from '../welcome/welcome.module';

@NgModule({
  declarations: [HomeComponent, UserdashboardComponent, CompanydasboardComponent,
  UserHistoryComponent, CompanyHistoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    WelcomeModule
  ]
})
export class HomeModule { }
