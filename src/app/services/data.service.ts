import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products.interface';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { docData } from '@angular/fire/firestore';
import firebase from 'firebase/compat';


type DocumentPredicate<T> = string | AngularFirestoreDocument;
  @Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    
    constructor(private afs : AngularFirestore){}
    private doc<T>(ref:DocumentPredicate<T>): AngularFirestoreDocument{
      return typeof ref == "string"? this.afs.doc(ref) : ref;
    }

    update<T>(ref:DocumentPredicate<T>, data: Partial<firebase.firestore.DocumentData>){
      return this.doc(ref).update({
        ...data
      })
    }

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
      this.deleteProducts(products);
    }
    
  }