import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserID } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private authFirebase: AngularFireAuth){}
  login(email: string, password: string){
    return this.authFirebase.signInWithEmailAndPassword(email, password);
  }

  registro(id: UserID){
    return this.authFirebase.createUserWithEmailAndPassword(id.email, id.password);
  }

  logout(){
      this.authFirebase.signOut();
  }
}