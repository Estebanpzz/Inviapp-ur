import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-regproducts',
  templateUrl: './regproducts.component.html',
  styleUrls: ['./regproducts.component.css']
})
export class RegproductsComponent implements OnInit {
  Id: any;
  ProductName: any;
  Category: any;
  Capacity: any;
  MinimumStack: any;

  newProduct: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private productService: ProductsService, 
              private router: Router, private userService: UserService,
              private readonly firebase: AngularFireAuth) {
      this.newProduct = this.fb.group({
        name_product: ['', Validators.required],
        category_product: ['', Validators.required],
        capacity_product: ['', Validators.required],
        id_product: ['', Validators.required],
        minimumStack_product: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  async agregarProducto(){
    const uid = await this.userService.getUid();
    const product: any = {
      uid_user: uid,
      name_product: this.newProduct.value.name_product,
      category_product: this.newProduct.value.category_product,
      capacity_product: this.newProduct.value.capacity_product,
      id_product: this.newProduct.value.id_product,
      minimumStack_product: this.newProduct.value.minimumStack_product
    }
    this.productService.nuevoProducto(product).then(() => {
      alert('Producto agregado con éxito');
      this.router.navigate(['/dashboard']);
    }).catch(error => {
      console.log(error);
    })
  }

}
