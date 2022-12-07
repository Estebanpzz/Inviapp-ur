import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../interfaces/user.interface';
import { collection, collectionData } from '@angular/fire/firestore';

  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    constructor(private afs : AngularFirestore){}

    addProduct(products : Products) {
      products.id = this.afs.createId();
      return this.afs.collection('/Products').add(products);
    }

    createDoc(data: any, path: string, id: string){
      const coll = this.afs.collection(path);
      return coll.doc(id).set(data);
    }

    addUser(user : User) {
      user.uid = this.afs.createId();
      return this.afs.collection('/Users').doc(user.uid).collection('productos').add(user);
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