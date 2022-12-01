import { Injectable } from '@angular/core';
import {UserID} from './user';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database'

@Injectable({
    providedIn: 'root'
})

export class FireService{
    usersRef: AngularFireList<any>;
    userRef: AngularFireObject<any>;
    constructor(public database: AngularFireDatabase){}

    createDoc(userid: UserID){
        this.usersRef.push({
            email: userid.email,
            password: userid.password,
        });
    }

    getDoc(id: string){
        this.userRef = this.database.object('Usuarios' + id);
        return this.userRef;
    }

    getDocList(){
        this.usersRef = this.database.list('Usuarios');
        return this.usersRef;
    }

    deleteDoc(id: string){
        this.userRef = this.database.object('Usuarios' + id);
        this.userRef.remove();
    }

    updateDoc(userid: UserID){
        this.userRef.update({
            email: userid.email,
            password: userid.password,
        });
    }
}