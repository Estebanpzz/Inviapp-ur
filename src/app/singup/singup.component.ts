import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { UserService } from '../services/user.service';
import { User } from '../interfaces/user.interface';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingUpComponent implements OnInit {
  datos: User = {
    uid: '',
    email_user: '',
    password_user: ''
  }
  
  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, 
              private userService: UserService, private router: Router, private firestore: AngularFirestore, private data: DataService) {
  
  }

  ngOnInit() {
  }

  async nuevoUsuario(){
    
    const res = await this.userService.registro(this.datos)
    if(res){
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      this.data.createDoc(this.datos, path, id);
    }

  }
}