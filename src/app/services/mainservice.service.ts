import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  user:  User;
  constructor(private auth: AngularFireAuth, private router: Router, private firestore: AngularFirestore) {
    this.auth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
   }

   async login(email: string, password: string) {
    let result = await this.auth.signInWithEmailAndPassword(email,password);
    this.router.navigate(['/']);
   }

   async register(email: string, 
    firstName: string, 
    lastName: string, address: string,
    dateOfBirth: string,password: string) {
     let result = await this.auth.createUserWithEmailAndPassword(email,password);
     this.storeProfile(email,firstName,lastName,dateOfBirth,address);
     this.sendEmailVerification();
   }

   async sendEmailVerification() {
    await (await this.auth.currentUser).sendEmailVerification();
    // this.router.navigate(['app/verify-email']);
  }

  async sendPasswordResetEmail(email: string) {
    return await this.auth.sendPasswordResetEmail(email);
  }

  async storeProfile(email: string, 
    firstName: string, 
    lastName: string, address: string,
    dateOfBirth: string){
    let status: boolean = false;
    let creationTime: number = Date.now();
    this.firestore.collection('users').doc(this.user.uid).set({
      email, lastName, dateOfBirth,firstName,address, creationTime, status
    });
    
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


}
