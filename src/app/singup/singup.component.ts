import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})

export class SingUpComponent implements OnInit {
  constructor(private UserService: UserService) {
  }
  formReg = new FormGroup({
    email_user: new FormControl(),
    password_user: new FormControl(),
  })

  ngOnInit() {}

  onSubmit() {
    this.UserService.registro(this.formReg.value)
    .then((response:any) => {
      console.log(response);
    })
    .catch((error:any) => console.log(error));
  }
}