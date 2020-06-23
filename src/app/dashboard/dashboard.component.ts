import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MainserviceService } from '../services/mainservice.service';
import { TaxNotifications, IndividualUser } from '../models/datamodels';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// Models
interface Links {
  path: string;
  icon: string;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  date: Date = new Date();
  year: number = this.date.getFullYear();
links:  Links[] = [{
  path: '/',
  icon: 'icon ni ni-shop icon-lg icon-outline icon-stroke-3 ni-2x',
  name: 'Dashboard'
},// shop
{
  path: '/file-taxes',
  icon: 'icon ni ni-money-coins icon-lg icon-outline icon-stroke-1 ni-2x',
  name: 'File taxes'
},
{
  path: '/history',
  icon: 'icon ni ni-archive-2 icon-lg icon-outline icon-stroke-1 ni-2x',
  name: 'Tax history'
},
{
  path: '/settings',
  icon: 'icon ni ni-settings-gear-65 icon-lg icon-outline icon-stroke-1 ni-2x',
  name: 'Settings'
},

{
  path: '/requsest-off-site-file-tax',
  icon: 'icon ni ni-books icon-lg icon-outline icon-stroke-1 ni-2x',
  name: 'Offline Filing'
},{
  path: '/app/login',
  icon: 'icon ni ni-lock-circle-open icon-lg icon-outline icon-stroke-1 ni-2x',
  name: 'Log out'
}

];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  notificationsDocument: AngularFirestoreDocument<IndividualUser>;
  notificationsDocument$: Observable<IndividualUser>;
constructor(private breakpointObserver: BreakpointObserver, private router: Router, public service: MainserviceService
  , private firestore: AngularFirestore
  ) {
  this.notificationsDocument = this.firestore.doc<IndividualUser>('users/' + this.service.user.uid);
  this.notificationsDocument$ = this.notificationsDocument.valueChanges();
}

  ngOnInit(): void {
   
  }
  checkNotifications(): void{
    // do something after navigation
    this.router.navigate(['/notifications']);
    this.service.uncheckNotification();
    
  }

  logout(): void{
    this.service.logout();
  }

}
