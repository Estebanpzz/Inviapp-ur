import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import { Products } from '../../interfaces/products.interface';
import { databaseInstance$, DataSnapshot } from '@angular/fire/database';
import { doc } from 'firebase/firestore';
import { docSnapshots } from '@angular/fire/firestore';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  productsList: Products[] = [];
  productsObj: Products = {
    uid_user: '',
    name_product: '',
    id: '',
    category_product: '',
    capacity_product: '',
    minimumStack_product: ''
  };
  uid_user: '';
  name_product: '';
  id: '';
  category_product: '';
  capacity_product: '';
  minimumStack_product: '' ;
  
  constructor(private userService: UserService, private router: Router, private data: DataService) { }


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {

    this.data.getAllProduct().subscribe(res => {
      this.productsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        
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

  deleteProduct(products : Products){
  
    if (window.confirm('Are you sure you want to delete ' +  + ' ' + products.id + ' ?')) {
      this.data.deleteProducts(products);

    }
  }

}