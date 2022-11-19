import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
    password: string;

    login(){
        const user = {email: this.email, password: this.password};
    }
  constructor() { }

  ngOnInit(): void {
  }

}
