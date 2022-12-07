import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  email_info: any;
  uid_info: any;
  constructor(private userService: UserService, private router: Router, private data : DataService,private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  async info(){
    const email = await this.userService.getEmail();
    const uid = await this.userService.getUid();
    
    if (window.confirm('Are you sure ?')) {
      
      this.email_info = email;
      this.uid_info = uid;
    }
  }
    
  
}
