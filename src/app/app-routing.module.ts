import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NotAuthenticatedComponent} from './not-authenticated/not-authenticated.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { GuardGuard } from './services/guard.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{path: '', component: DashboardComponent,
canActivate: [GuardGuard],
children: [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
}, 
 { path: 'file-taxes', loadChildren: () => import('./file-my-taxes/file-my-taxes.module').then(m => m.FileMyTaxesModule)
},
 { path: 'history', loadChildren: () => import('./history/history.module').then(m => m.HistoryModule)
}, 
 { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
},
 { path: 'requsest-off-site-file-tax', loadChildren: () => import('./offline/offline.module').then(m => m.OfflineModule)
},
 { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
},
 { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
},
 { path: 'services/:serviceName', loadChildren: () => import('./tax-services/services.module').then(m => m.ServicesModule)},
 { path: 'basic-info', loadChildren: () => import('./basic-info/basic-info.module').then(m => m.BasicInfoModule)}
]},
{ path: 'app', component: LoginComponent,
children: [
  {path: 'login',component: SignInComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'verify-account',component: NotAuthenticatedComponent},
  {path: 'reset-password',component: ResetPasswordComponent}
  ],

},

{path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
