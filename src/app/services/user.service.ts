import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, EmailAuthProvider, reauthenticateWithCredential, updatePassword, updateEmail  } from '@angular/fire/auth';
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

  async cambiarPw(mail: string){
    const auth = getAuth();
    const user = auth.currentUser;
    if(user === null){
      return null;
    }else{
      console.log(mail)
      sendPasswordResetEmail(auth, mail).then(() => {
        console.log("success")
      }).catch((error) => {
        console.log(error)
      }) 
      return "success send password "+user.email;
    }
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
}