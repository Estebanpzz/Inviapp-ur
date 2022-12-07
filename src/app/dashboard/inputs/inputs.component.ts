import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import { Products } from '../../interfaces/products.interface';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
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

  async updateProduct() {
    const uid = await this.userService.getUid();
    this.productsObj.uid_user = uid;
    this.productsObj.id = '';
    this.productsObj.name_product = this.name_product;
    this.productsObj.category_product = this.category_product;
    this.productsObj.capacity_product = this.capacity_product;
    this.productsObj.minimumStack_product = this.minimumStack_product;

    this.data.updateProduct(this.productsObj);
    alert('Correct update');
  }
}
