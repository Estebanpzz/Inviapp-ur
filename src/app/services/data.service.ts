import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    constructor(private afs: AngularFirestore){}


    addProduct(products : Products){
        products.id_product = this.afs.createId();
        return this.afs.collection('/Products').add(products);
      }
    getProduct(){
        return this.afs.collection('/Products').snapshotChanges();
      }
    deleteProduct(products : Products){
      return this.afs.doc('/Products/'+products.id_product).delete();
    }
    updateProduct(products : Products){
      this.deleteProduct(products);
      this.addProduct(products);
    }
  }