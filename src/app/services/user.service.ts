import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { User } from '../interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, updatePassword } from '@firebase/auth';

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

  async getUserEmail(){
    const user = await this.auth.currentUser;
    if(user === null){
      return null;
    }else{
      return user.email;
    }
  }

  async setNewPassword(new_password_user: string){
    const user:any = getAuth().currentUser;
    updatePassword(user, new_password_user).then(() => {
      console.log("Exito!")
    }).catch((error) => {
      console.log(error);
    });
  }
}