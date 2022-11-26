import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingUpComponent implements OnInit {

  formReg: FormGroup;

  constructor(private UserService: UserService) {
    this.formReg = new FormGroup({
      name_user: new FormControl(''),
      last_name: new FormControl(''),
      email_user: new FormControl(''),
      password_user: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.UserService.registro(this.formReg.value)
    .then((response:any) => {
      console.log(response);
    })
    .catch((error:any) => console.log(error));
  }

}