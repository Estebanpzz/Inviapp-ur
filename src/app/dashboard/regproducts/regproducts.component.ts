import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-regproducts',
  templateUrl: './regproducts.component.html',
  styleUrls: ['./regproducts.component.css']
})
export class RegproductsComponent implements OnInit {
  public productsForm: FormGroup 
  constructor(public productService: ProductsService, public formBuilder: FormBuilder, public router: Router) {
    this.productsForm = this.formBuilder.group({
      name_product : [''],
      category_product : [''],
      capacity_product : [''],
      minimumStack_product : [''],
    })
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.productService.createProducts(this.productsForm.value)
  }

}