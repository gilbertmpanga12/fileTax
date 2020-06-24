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
  ]
})
export class HomeModule { }
