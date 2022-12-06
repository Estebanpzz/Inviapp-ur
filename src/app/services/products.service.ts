import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products.interface';
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private angularFirestore: AngularFirestore){}
  
  getProducts(){
    return this.angularFirestore
    .collection('Products')
    .snapshotChanges()
  }
  getProductsById(id_product:any){
    return this.angularFirestore
    .collection('Products')
    .doc(id_product)
    .valueChanges()
  }

  createProducts(products: Products){
    return new Promise<any> ( ( resolve, reject ) =>{
      this.angularFirestore
      .collection("Products")
      .add(products)
      .then((response)=>{
        console.log(response)
      },
      (error) => {
        reject(error)
      })
    })
  }

  updateProducts(products: Products, id_product:any){
    return this.angularFirestore
    .collection('Products')
    .doc(id_product)
    .update({
      name_product: products.name_product,
      category_product: products.category_product,
      capacity_product: products.capacity_product,
      minimumStack_product: products.minimumStack_product,
    });
  }

  deleteProducts(products:any){
    return this.angularFirestore
    .collection('Products')
    .doc(products.id_product)
    .delete();
  }
}   