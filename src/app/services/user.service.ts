import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, user, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Database } from '@angular/fire/database';
import { Firestore, collection,addDoc, DocumentData, CollectionReference } from '@angular/fire/firestore';
import { UserI } from '../interfaces/user.interface';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, private auth: Auth){
    this.usersRef = db.object('users');
  }
  
  registro(user: UserI){
    this.usersRef.set({
      email_user: user.email_user,
      password_user: user.password_user
    });
    
  }

  Login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  };

  Logout() {
    return signOut(this.auth);
  }
}