import { Injectable} from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private auth: Auth) {}

 Login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
}

registro({email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

SignOut(){
    return signOut(this.auth);
  }
}