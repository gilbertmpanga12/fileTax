import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './authentication-wrapper/login.component';
import { SignInComponent } from './signIn/sign-in.component';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register-individual-account/register.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CreateBusinessAccountComponent } from './create-business-account/create-business-account.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResetPasswordComponent,
    NotFoundPageComponent,
    LoginComponent,
    SignInComponent,
    RegisterComponent,
    CreateBusinessAccountComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule, MatBadgeModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule, MatNativeDateModule,
    MatProgressBarModule,
    MatSnackBarModule,
    AngularFireStorageModule,
    HttpClientModule
 
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
