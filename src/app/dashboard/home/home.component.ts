import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.UserService.SignOut()
    .then(() => {
      this.router.navigate(['./']);
    })
    .catch(error => console.log(error));
  }
}
