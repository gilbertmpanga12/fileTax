import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MainserviceService } from '../services/mainservice.service';
import { TaxNotifications, IndividualUser } from '../models/datamodels';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

declare const FlutterwaveCheckout: any;
// Models
interface Links {
  path: string;
  icon: string;
  name: string;
}
// interface features{
//   feature1: string;
//   feature2: string;
//   feature3: string;
//   feature4: string;
// }
interface Plans{
  title: string;
  price: string;
  features: string[];
 
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  date: Date = new Date();
  year: number = this.date.getFullYear();
  plans: Plans[] = [{title: 'Starter Pack',features: ['Online Filing of Taxes',
'Online Support', 'Tax Consultation not included', 'Client Visits not included'
],price: 'UGX50,000'},
  {title: 'SME Pack',features: ['Online Filing of Taxes', 
  'Online Support', 'Tax Consultation', 'Client Visits not included'],price: 'UGX70,000'},

  {title: 'Onsite Pack',features: ['Client Visits', 
  'Online/Offline Filing of Taxes', 'Online Support', 'Tax Consultation & more'],price: 'UGX70,000'}
];
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
    this.loadScript('https://checkout.flutterwave.com/v3.js');
  }
  checkNotifications(): void{
    // do something after navigation
    this.router.navigate(['/notifications']);
    this.service.uncheckNotification();
    
  }

  logout(): void{
    this.service.logout();
  }

  subscribe(): void{
    console.log('fewms');
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-31d61a13026483fc38f15f0e90232374-X",
      tx_ref: "hooli-tx-1920bbtyt",
      amount: 54600,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      redirect_url: // specified redirect URL
        "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "user@gmail.com",
        phone_number: "08102909304",
        name: "yemi desola",
      },
      callback: function (data) {
        console.log(data);
      },
      customizations: {
        title: "My store",
        description: "Payment for items in cart",
        logo: "https://assets.piedpiper.com/logo.png",
      },
    });
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
