import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IndividualUser, OfflineTaxFiling, BasicProfile, Filings, AccountType, CompanyProfile } from '../models/datamodels';
import { merge } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  user:  User;
  userVerified: boolean = false;
  profilePhoto: string = 'https://firebasestorage.googleapis.com/v0/b/tax-as-a-service.appspot.com/o/images%20(1).png?alt=media&token=3a84172a-e351-4890-bdf4-70445c2ad2c1';
  userId: string;
  accountType: AngularFirestoreDocument<AccountType>;
  accountType$: Observable<AccountType>;

  constructor(private auth: AngularFireAuth, private router: Router, private firestore: AngularFirestore,
    private snackBar: MatSnackBar
    ) {
    
    this.auth.authState.subscribe(user => {
      if (user){
        this.user = user;
        this.userVerified = user.emailVerified;
        this.userId = user.uid;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.accountType = this.firestore.doc<AccountType>('sessionRegister/' + this.user.uid);
        this.accountType$ = this.accountType.valueChanges();
      } else {
        localStorage.setItem('user', null);
      }
    })
   }

  async login(email: string, password: string) {
    let result = await this.auth.signInWithEmailAndPassword(email,password);
    this.router.navigate(['/']);
  }

   
   
   
   snackbar(message: string): void{
    this.snackBar.open(message,'OK',{duration: 5000,verticalPosition:'top',horizontalPosition:'right'});
  }

   async register(email: string, 
    firstName: string, 
    lastName: string, address: string,
    dateOfBirth: string,password: string) {
     await this.auth.createUserWithEmailAndPassword(email,password);
     this.updateUserProfile(firstName + ' ' + lastName, this.profilePhoto);
     this.storeProfile(email,firstName,lastName,dateOfBirth,address);
     this.sendEmailVerification();
   }

   async sendEmailVerification() {
    await (await this.auth.currentUser).sendEmailVerification();
    this.router.navigate(['/']);
  }

  async sendPasswordResetEmail(email: string) {
    return await this.auth.sendPasswordResetEmail(email);
  }

  async storeProfile(email: string, 
    firstName: string, 
    lastName: string, address: string,
    dateOfBirth: string){
    let creationTime: number = Date.now();
    let user = await this.auth.currentUser;
    let notificationCount = 0, profileSetup = 0, tinId = "Not set yet", 
    tinPassword = "Not set yet", uid = user.uid, photoURL = this.profilePhoto;

    await this.firestore.collection('users').doc(user.uid).set({
      email, lastName, dateOfBirth, firstName,
      address, creationTime,
      uid,tinId,tinPassword,
      photoURL,notificationCount, profileSetup
    },{merge: true});

    await this.firestore.collection('dashbordCounts').doc(user.uid).set({
      totalTaxesFiled: 0,
      latestTaxFiled: 0,
      lastestTaxFiledName: ''
    },{merge: true});

    this.sessionRegister(false);
  }


 async storeCompanyProfile(email: string,
  address: string, companyFoundationDate: string, 
  registrationNumber: string, companyName: string, password: string
  ){
    let user = await this.auth.currentUser, uid = user.uid, 
    notificationCount = 0, profileSetup = 0, tinId = "Not set yet",photoURL = this.profilePhoto, 
    tinPassword = "Not set yet";
     
    await this.auth.createUserWithEmailAndPassword(email,password);
    await this.firestore.doc('/company_users' + uid).set({
      email, address, companyFoundationDate, registrationNumber, companyName,
      notificationCount, profileSetup, tinId, tinPassword, photoURL
    }, {merge: true});

    await this.firestore.collection('dashbordCounts').doc(user.uid).set({
      totalTaxesFiled: 0,
      latestTaxFiled: 0,
      lastestTaxFiledName: ''
    },{merge: true});
    
    this.sessionRegister(true);
 }


  async sessionRegister(isCompany: boolean){
    await this.firestore.doc('sessionRegister/' + this.user.uid).set({isCompany}, {merge: true});
  }


  async updateUserProfile(fullName: string, profilePhoto: string){
    let user = this.auth.currentUser;
    (await user).updateProfile({
      displayName: fullName,
      photoURL: profilePhoto
    });
  }


  async updateFullName(fullName: string){
    let user = this.auth.currentUser;
    (await user).updateProfile({
      displayName: fullName
    });
  }

  async updateUserProfilePicture(path: string){
    let user = this.auth.currentUser;
    (await user).updateProfile({
      photoURL: path
    });
    await this.firestore.doc('users/' + this.user.uid).set({
      photoURL: path
    }, {merge: true});
  }


  async logout(){
    await this.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['app/login']);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
 }

 async resetTinId(tinIDValue:string){
  let user = await this.auth.currentUser;
  let userProfile = this.firestore.doc('users/' + user.uid);
  userProfile.set({tinId: tinIDValue}, {merge: true});
 }

 async resetTinPassword(tinIDValue:string){
  let user = await this.auth.currentUser;
  let userProfile = this.firestore.doc('users/' + user.uid);
  userProfile.set({tinPassword: tinIDValue}, {merge: true});
 }


 async requestOfflineTaxation(payload: OfflineTaxFiling){
   await this.firestore.collection<OfflineTaxFiling>('offlineTaxFiling').add({
    date: payload.date,
    requesteeName: payload.requesteeName,
    requesteeType: payload.requesteeType,
    taxServicesRequired: payload.taxServicesRequired,
    uid: payload.uid
   });
 }

 async requestOfflineTaxationCompay(payload: OfflineTaxFiling){
  
  await this.firestore.collection<OfflineTaxFiling>('offlineTaxFilingCompany').add({
   date: payload.date,
   requesteeName: payload.requesteeName,
   requesteeType: payload.requesteeType,
   taxServicesRequired: payload.taxServicesRequired,
   uid: payload.uid
  });
}

 async createBasicFile(payload: BasicProfile) {
   await this.firestore.collection('users').doc(payload.uid).
   collection('basicProfile').doc(payload.uid).set(payload,{merge: true});
   await this.firestore.doc('users/' + payload.uid).set({profileSetup: 100}, {merge: true});
   ;
 }

 async createBasicFileCompany(payload: CompanyProfile) {
  await this.firestore.collection('business_users').doc(payload.uid).
  collection('basicCompanyProfile').doc(payload.uid).set(payload,{merge: true});
  await this.firestore.doc('business_users/' + payload.uid).set({profileSetup: 100}, {merge: true});
  ;
}
 
 async uploadTaxFiles(payload: Filings){
   await this.firestore.collection<Filings>('filings').add(payload);
 }


}
