import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MainserviceService } from '../services/mainservice.service';
import { IndividualUser } from '../models/datamodels';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';

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
  priceNumber: number; 
 
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  logo: string = 'https://firebasestorage.googleapis.com/v0/b/tax-as-a-service.appspot.com/o/Facebook%20Dp.jpg?alt=media&token=eeaa247a-8baf-4cff-a923-9e41587f6cf2';
  date: Date = new Date();
  isLoading: boolean = false;
  loadingTextbool: boolean = false;
  year: number = this.date.getFullYear();
  plans: Plans[] = [{title: 'Starter Pack',features: ['Online Filing of Taxes',
'Online Support', 'Tax Consultation *', 'Client Visits *'
],price: 'UGX50,000',priceNumber: 50000},
  {title: 'SME Pack',features: ['Online Filing of Taxes', 
  'Online Support', 'Tax Consultation', 'Client Visits *'],price: 'UGX70,000',
priceNumber: 70000
},

  {title: 'Onsite Pack',features: ['Client Visits', 
  'Online/Offline Filing of Taxes', 'Online Support', 'Tax Consultation & more'],price: 'UGX150,000',
  priceNumber: 150000},

  {title: 'Pay by Cash',features: ['Starter Pack', 
  'SME Pack', 'Onsite Pack', 'Start filing your taxes now & our team will personally reach-out to setup your preferred subscription plan'],price: '*',
  priceNumber: 200000}
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
},
{
  path: '/requsest-off-site-file-tax',
  icon: 'icon ni ni-support-16 icon-lg icon-outline icon-stroke-1 ni-2x',
  name: 'How to file taxes'
}
,{
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
  , private firestore: AngularFirestore, private dialog: MatDialog
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

  subscribe(packType: string, price: number): void{
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-31d61a13026483fc38f15f0e90232374-X",
      tx_ref: "hooli-tx-1920bbtyt",
      amount: price,
      currency: "UGX",
      // payment_options: "mobile_money_uganda",
      type: "mobilemoney,ussd",
      redirect_url: // specified redirect URL
        "https://app.filetax.live",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: this.service.user.email,
        phone_number: "+256785442776",
        name: this.service.user.displayName,
      },
      callback: function (data) {
        console.log(data);
      },
      customizations: {
        title: "Filetax",
        description: "Payment for " + packType,
        logo: this.logo,
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

  openDialog(): void {
     this.dialog.open(DialogComponent, {
      width: '380px'
    });
  }

  payByCash(): void {
    this.isLoading = true;
    this.service.reactivateAccount().then(() => {
      this.isLoading = false;
    }).catch(err => this.isLoading = false);
  }

  refresh(): void{
    window.location.reload();
  }

  refreshAndActivate(): void{
    this.loadingTextbool = true;
    this.service.sendEmailVerification().then(() => {
      this.loadingTextbool = false;
      window.location.reload();
    })
    .catch(err => {
      this.loadingTextbool = false;
      this.service.snackbar('Oops something went wrong try again', 'error-snackbar')
    });
  }

}
