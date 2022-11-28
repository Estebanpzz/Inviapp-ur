import { Injectable, NgZone } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { LoginData } from './datos.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private auth: Auth) {}

 Login({email, password}: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
}

  SingUp({email, password}: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  SignOut(){
    return signOut(this.auth);
  }
}