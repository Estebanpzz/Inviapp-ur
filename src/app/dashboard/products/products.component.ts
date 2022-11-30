import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }


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
