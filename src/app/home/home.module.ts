import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CompanydasboardComponent } from './companydasboard/companydasboard.component';


@NgModule({
  declarations: [HomeComponent, UserdashboardComponent, CompanydasboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }
