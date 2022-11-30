import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, user, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, collection,addDoc, DocumentData, CollectionReference } from '@angular/fire/firestore';
import { UserI } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore, private auth: Auth){
    
  }
  
  registro(user: UserI){
    const usersRef = collection(this.firestore, 'Users');
    return addDoc(usersRef, user);
    /*this.usersRef.set({
      email_user: user.email_user,
      password_user: user.password_user
    });*/
  }

  Login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  };

  Logout() {
    return signOut(this.auth);
  }
}