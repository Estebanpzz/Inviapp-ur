import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import { Products } from '../../interfaces/products.interface';
import { databaseInstance$, DataSnapshot } from '@angular/fire/database';
import { doc } from 'firebase/firestore';
import { Router } from '@angular/router';
import { docSnapshots } from '@angular/fire/firestore';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  Id: any;
  ProductName: string;
  Category: string;
  Capacity: any;
  MinimumStack: any;

  productsList: Products[] = [];

  constructor(private userService: UserService, private router: Router, private data : DataService, private location: Location) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  goBack(): void {
    this.location.back();
  }
  edit(){
    const id = 'Products/'+this.Id;
    const capacity = this.Capacity;
    const minimumStack= this.MinimumStack;
    if (window.confirm('Are you sure edit product?')) {
      this.data.update(id, { capacity_product: capacity, minimumStack_product: minimumStack})
    .then(() => console.log("actualizado"))
    .catch(err => console.log(err))
    this.resetForm();
    alert("edit success");
    }
    
  }
  resetForm() {
    this.Id = '';
    this.ProductName = '';
    this.Category = '';
    this.Capacity = '';
    this.MinimumStack = '';

  }

  async getAllProducts() {

    const uid = await this.userService.getUid();
    console.log(uid);
    
    this.data.getAllProduct().subscribe(res =>{
      this.productsList = res.map((e: any) => {
        
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;

       return data   ;
           
      })
    }, err => {
      alert('Error while fetching products data');
    })
  }

}
