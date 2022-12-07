import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, user } from '@angular/fire/auth';
import { User } from '../interfaces/user.interface';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getAuth, updateEmail, updatePassword } from '@firebase/auth';
import { newUser } from '../userinfo/userinfo.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth, private auth: Auth, private af: AngularFirestore){

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

    cambiar(p: newUser){
    const auth = getAuth();
    const x = "hola@gmail.com";
    const useron = auth.currentUser;
    if(useron){
    updateEmail(useron, p.email).then(()=>{
      console.log('siii');
    });
    updatePassword(useron, p.password).then(()=>{
      console.log('siii');
    });
  }
}

}