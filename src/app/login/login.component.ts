import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email_user: new FormControl(''),
    password_user: new FormControl(''),
  })
  constructor(public UserService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    console.log('Form', this.loginForm.value);
  }
}
