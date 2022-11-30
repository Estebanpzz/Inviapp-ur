import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }


  ngOnInit(): void {
  }

  onClick() {
    this.userService.Logout()
      .then(() => {
        this.router.navigate(['']);
      })
      .catch(error => console.log(error));
  }
}
