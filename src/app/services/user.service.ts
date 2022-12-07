import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { User } from '../interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth, private auth: Auth){

  }

  registro(user: User){
    return createUserWithEmailAndPassword(this.auth, user.email_user, user.password_user);
  }

  Login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  };

  Logout() {
    return signOut(this.auth);
  }

  async getUid(){
    const user = await this.auth.currentUser;
    if(user === null){
      return null;
    }else{
      return user.uid;
    }
  }
  async getEmail(){
    const user = await this.auth.currentUser;
    if(user === null){
      return null;
    }else{
      return user.email;
    }
  }

}