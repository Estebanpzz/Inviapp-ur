import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/interfaces/products.interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  Products: Products[];
  constructor(private userService: UserService, private router: Router, private productsService: ProductsService) { }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      this.Products = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Products)
        };
      });
    });
  }

  onClick() {
    this.userService.Logout()
      .then(() => {
        this.router.navigate(['']);
      })
      .catch(error => console.log(error));
  }
}