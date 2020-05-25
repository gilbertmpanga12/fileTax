import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  user:  User;
  constructor(private auth: AngularFireAuth, private router: Router) {
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

   async register(email: string, password: string) {
     let result = await this.auth.createUserWithEmailAndPassword(email,password);
     this.sendEmailVerification();
   }

   async sendEmailVerification() {
    await (await this.auth.currentUser).sendEmailVerification();
    this.router.navigate(['app/verify-email']);
  }

  async sendPasswordResetEmail(email: string) {
    return await this.auth.sendPasswordResetEmail(email);
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
