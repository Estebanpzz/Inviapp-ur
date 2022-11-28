import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})

export class SingUpComponent implements OnInit {
  formReg: FormGroup;
  constructor(private UserService: UserService, private router: Router) {
    this.formReg = new FormGroup({
      name_user: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }
  ngOnInit(): void {}

  onSubmit() {
    this.UserService.SingUp(this.formReg.value)
    .then((response:any) => {
      console.log(response);
      this.router.navigate(["./login"]);
    })
    .catch((error:any) => console.log(error));
  }
}