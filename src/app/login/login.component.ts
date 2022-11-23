import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
  };
}
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }

  login(){
    const user = {email: this.email password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
    })
  }
}
