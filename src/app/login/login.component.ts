import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router'

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

  ngOnInit(): void {
  }

  onSubmit() {
    this.UserService.Login(this.formLogin.value)
    .then((response:any) => {
      console.log(response);
      this.router.navigate(['/dashboard']);
    })
    .catch((error:any) => console.log(error));
  }
}
