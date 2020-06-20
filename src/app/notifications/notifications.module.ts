import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';
import { CompanyNotificationsComponent } from './company-notifications/company-notifications.component';


@NgModule({
  declarations: [NotificationsComponent, UserNotificationsComponent, CompanyNotificationsComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule
  ]
})
export class NotificationsModule { }
