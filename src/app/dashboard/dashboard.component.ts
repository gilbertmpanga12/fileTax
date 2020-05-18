import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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
  icon: 'icon ni ni-send icon-lg icon-outline icon-stroke-1 ni-2x',
  name: 'Offline Filing'
},{
  path: '/auth',
  icon: 'icon ni ni-lock-circle-open icon-lg icon-outline icon-stroke-1 ni-2x',
  name: 'Log out'
}

];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    console.log('I am live');
  }


}
