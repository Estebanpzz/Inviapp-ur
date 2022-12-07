import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { getAuth} from '@firebase/auth';
import { updateEmail } from '@firebase/auth';
import { newUser } from './userinfo.interface';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})

export class UserinfoComponent implements OnInit {

  newuser: newUser = {
    email : '',
    password: ''
  };
  email: '';
  password:'';

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {}

  onSubmit(){
    this.newuser.email = this.email;
    this.newuser.password=this.password
    this.userService.cambiar(this.newuser);
  }

}
