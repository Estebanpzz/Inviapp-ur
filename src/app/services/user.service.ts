import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, authState, updateProfile } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth, private auth: Auth){

  }

  registro(user: User){
    return createUserWithEmailAndPassword(this.auth, user.email_user, user.password_user);
  }

  Login({email_user, password_user}: any) {
    return signInWithEmailAndPassword(this.auth, email_user, password_user);
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
}