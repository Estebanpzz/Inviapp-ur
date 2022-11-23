import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  url='/api';
  constructor(private http: HttpClient) { }

  //agregar equipo
  addUser(user:User)
  {
    return this.http.post(this.url, user);
  }

}


export interface User{
  id_user?:string;
  name_user?:string;
  last_name?:string;
  password_user?:string;
  email_user?:string;
}