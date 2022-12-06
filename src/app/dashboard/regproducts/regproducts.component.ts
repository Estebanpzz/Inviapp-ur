import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Products } from 'src/app/interfaces/products.interface';


@Component({
  selector: 'app-regproducts',
  templateUrl: './regproducts.component.html',
  styleUrls: ['./regproducts.component.css']
})
export class RegproductsComponent implements OnInit {

  productForm: FormGroup;
  constructor(private producto: Products,private productService: ProductsService, public fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.producForm;
  }

  producForm(){
    this.productForm = this.fb.group({
      name_producto: [this.producto.name_product, [Validators.required]],
      category_product: [this.producto.category_product, [Validators.required]],
      capacity_product: [this.producto.capacity_product, [Validators.required]],
      minimumStack_product: [this.producto.minimumStack_product, [Validators.required]],
    });
  }
}