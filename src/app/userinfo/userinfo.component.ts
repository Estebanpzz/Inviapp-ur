import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserInfo } from './userinfo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from '@firebase/auth';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  userInfo: UserInfo;
  newPassword: FormGroup;
  closeResult = '';

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router,
              private modalService: NgbModal) {
    this.newPassword = this.fb.group({
      old_password_user: ['', Validators.required],
      new_password_user: ['', Validators.required]
    })
  }

  async ngOnInit() {
    const email = await this.userService.getUserEmail();
    const user: any = {
      email_user: email
    }
    this.userInfo = {
      email: user.email_user
    }
    console.log(email);
    console.log(user);
    console.log(this.userInfo);
  }

  async updatePassword(content:any){
    const user:any = getAuth().currentUser;
    const old_pwd: any = this.newPassword.value.old_password_user;
    const new_pwd: any = this.newPassword.value.new_password_user;
    console.log(new_pwd);
    const credential = EmailAuthProvider.credential(user.email, old_pwd);
    await reauthenticateWithCredential(user, credential).then(() => {
      if(old_pwd == new_pwd){
        alert("La nueva contraseña no puede ser igual a la antigua.");
      }else{
        updatePassword(user, new_pwd).then(() => {
          this.modalService.dismissAll();
          alert("¡Contraseña cambiada con éxito!\nPor favor vuelve a iniciar sesión para acceder a tu inventario.");
          this.userService.Logout().then(() => {
            this.router.navigate(['']);
          })
          .catch(error => console.log(error));
        }).catch((error) => {
          console.log(error);
        });
      }
    }).catch((error) => {
      alert("La contraseña antigua es incorrecta.");
      console.log(error);
    });
  }

  open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
