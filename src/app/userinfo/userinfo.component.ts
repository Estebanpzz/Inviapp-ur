import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserInfo } from './userinfo.model';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  userInfo: UserInfo;

  constructor(private userService: UserService) { }

  async ngOnInit() {
    const email = await this.userService.getUserEmail();
    const user: any = {
      email_user: email
    }
    this.userInfo = {
      email: user.email_user
    }
    console.log(email);
    console.log(user);
    console.log(this.userInfo);
    console.log("alex did this")
    await console.log(this.userService.cambiarPw(String(email)));

  }

}
