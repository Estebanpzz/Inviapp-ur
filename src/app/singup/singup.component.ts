import { Component, OnInit } from '@angular/core';
import {User, SignUpService} from '../services/singup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingUpComponent implements OnInit {

  user: User={
    id_user: '',
    name_user: '',
    last_name: '',
    password_user: '',
    email_user: ''
  }

  constructor(private SignUpService:SignUpService, private router:Router) { }

  ngOnInit(): void {
  }

  NewUser(){
    delete this.user.id_user;

    this.SignUpService.addUser(this.user).subscribe();
    this.router.navigate(['/inicio']);
  }

}
