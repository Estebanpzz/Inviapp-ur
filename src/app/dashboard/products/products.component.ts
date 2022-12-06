import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import { Products } from '../../interfaces/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  productsList : Products[]=[];
  productObj: Products = {
    uid_user: '',
    name_product: '',
    id_product: '',
    category_product: '',
    capacity_product: 0,
    minimumStack_product: 0
  };

  uid_user: string = '';
  name_product: string = '';
  id_product: string = '';
  category_product: string = '';
  capacity_product: number ;
  minimumStack_product: number;
  constructor(private userService: UserService, private router: Router, private data : DataService) { }


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {

    this.data.getProduct().subscribe(res => {
      this.productsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id_product = e.payload.doc.id_product;
        return data;
      })
    }, err => {
      alert('Error while fetching products data');
    })
  }




  onClick() {
    this.userService.Logout()
      .then(() => {
        this.router.navigate(['']);
      })
      .catch(error => console.log(error));
  }
}
