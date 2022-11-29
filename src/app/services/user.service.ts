import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, user } from '@angular/fire/auth';
import { Database } from '@angular/fire/database';
import { Firestore, collection,addDoc, DocumentData, CollectionReference } from '@angular/fire/firestore';
import { User } from '../interfaces/user.interface';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase){
    this.usersRef = db.object('users');
  }
  

  registro(user: User){
    this.usersRef.set({
      name_user: user.name_user,
      last_user: user.last_name,
      email_user: user.email_user,
      password_user: user.password_user
    });
  }
}