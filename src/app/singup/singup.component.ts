import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { UserService } from '../services/user.service';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingUpComponent implements OnInit {

  createUser: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, 
              private userService: UserService, private router: Router,
              private db: Firestore) {
    this.createUser = this.fb.group({
      email_user: ['', Validators.required],
      password_user: ['', Validators.required],
      password2_user: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  async nuevoUsuario(){
    this.submitted = true;
    if(this.createUser.invalid){
      return ;
    }
    const user: any = {
      email_user: this.createUser.value.email_user,
      password_user: this.createUser.value.password_user,
      password2_user: this.createUser.value.password2_user
    }
    if(user.password_user !== user.password2_user){
      alert("¡Las contraseñas deben ser iguales!");
      return ;
    }else{
      const response = await this.userService.registro(this.createUser.value);
      const res = await this.afAuth.createUserWithEmailAndPassword(user.email_user, user.password_user).then((response:any) => {
        console.log(response);
        alert("¡Cuenta creada exitosamente!");
        this.userService.Logout().then(() => {
          this.router.navigate(['']);
        }).catch(error => console.log(error));
        this.router.navigate(['']);
      })
      .catch((error:any) => (
              console.log(error),
              alert(error)
      ));
    }
    this.createUser.patchValue({
      email_user: '',
      password_user: '',
      password2_user: ''
    })
  }

}
