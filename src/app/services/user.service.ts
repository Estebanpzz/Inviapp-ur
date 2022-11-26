import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth){}

  registro({email_user, password_user}: any){
    return createUserWithEmailAndPassword(this.auth, email_user, password_user);
  }
  async login({email_user, password_user}:any){
      return await signInWithEmailAndPassword(this.auth, email_user, password_user); 
  }
} 