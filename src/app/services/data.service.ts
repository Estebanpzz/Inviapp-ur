import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    constructor(private afs : AngularFirestore){}

    addProduct(products : Products) {
      products.id = this.afs.createId();
      return this.afs.collection('/Products').add(products);
    }
    getAllProduct(){
        return this.afs.collection('/Products').snapshotChanges();
      }
    deleteProducts(products : Products){
      this.afs.doc('/Products/'+products.id).delete();
    }
    updateProduct(products : Products){
      this.afs.collection('/Products/'+products.id).doc(products.id).update(products);
    }
  }