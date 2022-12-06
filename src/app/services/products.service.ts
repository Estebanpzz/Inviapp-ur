import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products.interface';
import { collectionData, Firestore, collection, addDoc, CollectionReference, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DocumentData } from '@angular/fire/compat/firestore';
import { doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productCollection: CollectionReference<DocumentData> 

  constructor(private firestore: Firestore){
    this.productCollection = collection(this.firestore, 'products')
  }
  
  addProducts(product: Products){
    return addDoc(this.productCollection, product);
  }

  getProductsId(id: string){
    const ref = doc(this.firestore, 'products/${id}');
    return docData(ref, {idField: 'id'});
  }

  getProducts(){
    return collectionData(this.productCollection, {
      idField: 'id'
    }) as Observable<Products[]>;
  }

}   