import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { signOut } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth){}

  registro({email_user, password_user}: any){
    return createUserWithEmailAndPassword(this.auth, email_user, password_user);
  }
  login({email_user, password_user}:any){
      return signInWithEmailAndPassword(this.auth, email_user, password_user); 
  }
  logout(){
    return signOut(this.auth);
  }
} 