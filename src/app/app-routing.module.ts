import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NotAuthenticatedComponent} from './not-authenticated/not-authenticated.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { GuardGuard } from './services/guard.guard';
import { AngularFireAuthGuard, emailVerified, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';
// import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
// const redirectIfEmailVerified = () => emailVerified;
const unAuthorizedUsers = () => redirectUnauthorizedTo(['login']);
const isAuthorizedRedirect = () => redirectLoggedInTo(['']);


const routes: Routes = [
{path: '', component: DashboardComponent,
canActivate: [AngularFireAuthGuard],
data: {authGuardPipe: unAuthorizedUsers},
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
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
canActivate: [AngularFireAuthGuard], data: {authGuardPipe: isAuthorizedRedirect }
},
{ path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
},
{path: 'verify-account',component: NotAuthenticatedComponent},
{path: 'reset-password',component: ResetPasswordComponent},
{path: '**', pathMatch: 'full', redirectTo: '/' } // canActivate: [AngularFireAuthGuard], data: unAuthorizedUsers,
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
