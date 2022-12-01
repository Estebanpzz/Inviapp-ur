import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';

import { AuthService} from '../services/user.service';
import { UserID } from '../services/user';
import {    Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingUpComponent implements OnInit {

  createUser: FormGroup;
  submitted = false;
  
  datos: UserID = {
    password: '',
    email: '',
    uid: '',
  }

  constructor(private auth: AuthService, private router: Router, public database: AngularFirestore) {
  }

  ngOnInit(): void {
  }
    
  registro(){
    this.auth.registro(this.datos).catch (error => {
      console.log(error);
    })      
  }
  createDoc(data: any, id: any){
    const collection = this.database.collection('Usuarios');
    return collection.doc(id).set(data);
}
}
