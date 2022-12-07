import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private UserService: UserService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async ngOnInit() {
    
  }

  async onSubmit() {
    const res = await this.UserService.Login(this.formLogin.value)
    .then((response:any) => {
      this.router.navigate(['/dashboard']);
    })
    .catch((error:any) => {
      alert("Correo y/o contraseña incorrectos, verifica la infomación ingresada.");
      console.log(error);
    });
  }
}
