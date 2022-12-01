import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  id = {
    email: '',
    password: ''
  }

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  async login(){
    await this.auth.login(this.id.email, this.id.password);
    
  }

}
