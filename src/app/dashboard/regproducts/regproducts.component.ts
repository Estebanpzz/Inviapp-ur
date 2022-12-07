import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import { Products } from '../../interfaces/products.interface';

@Component({
  selector: 'app-regproducts',
  templateUrl: './regproducts.component.html',
  styleUrls: ['./regproducts.component.css']
})
export class RegproductsComponent implements OnInit {

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

  
  constructor(private userService: UserService, private router: Router, private data : DataService) {
     
    }

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


    resetForm() {
      this.uid_user = '';
      this.name_product = '';
      this.id = '';
      this.category_product = '';
      this.capacity_product = '';
      this.minimumStack_product = '';
    }

    async addProduct() {
      if (this.name_product == '' || this.category_product == '' || this.capacity_product == '' || this.minimumStack_product == '') {
        alert('Fill all input fields');
        return;
      }
      const uid = await this.userService.getUid();
      this.productsObj.uid_user = uid;
      this.productsObj.id = '';
      this.productsObj.name_product = this.name_product;
      this.productsObj.category_product = this.category_product;
      this.productsObj.capacity_product = this.capacity_product;
      this.productsObj.minimumStack_product = this.minimumStack_product;
  
      this.data.addProduct(this.productsObj);
      this.resetForm();
      alert('Correct register');
    }


   

}
