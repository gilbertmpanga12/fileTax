import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
{ path: '', component: DashboardComponent,
children: [
 { path: 'file-taxes', loadChildren: () => import('./file-my-taxes/file-my-taxes.module').then(m => m.FileMyTaxesModule) },
 { path: 'history', loadChildren: () => import('./history/history.module').then(m => m.HistoryModule) }, 
 { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }
]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
