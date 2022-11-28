import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})

export class SingUpComponent implements OnInit {
  formReg: FormGroup;
  constructor(public UserService: UserService) {
    this.formReg = new FormGroup({
      name_user: new FormControl(),
      last_name: new FormControl(),
      email_user: new FormControl(),
      password_user: new FormControl()
    })
  }
  ngOnInit(): void {}

  onSubmit() {
    this.UserService.SingUp(this.formReg.value)
    .then((response:any) => {
      console.log(response);
    })
    .catch((error:any) => console.log(error));
  }
}