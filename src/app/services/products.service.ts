import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, user, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, collection,addDoc, DocumentData, CollectionReference } from '@angular/fire/firestore';
import { Products } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: Firestore){
    
  }
  
  nuevoProducto(product: Products){
    const productRef = collection(this.firestore, 'Products');
    return addDoc(productRef, product);
  }
}