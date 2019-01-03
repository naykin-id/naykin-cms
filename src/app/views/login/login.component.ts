import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  loginEmail() {
    this.auth.doLoginEmail(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        console.log('error: ' + err)
        Swal({
          title: 'Error!',
          text: err,
          type: 'error',
          confirmButtonText: 'Cancel'
        })
      }
      );
  }

  loginGoogle() {
    this.auth.doLoginGoogle()
      .then((res) => {
        let data = JSON.parse(localStorage.getItem("_userProfile"))
        Swal({
          title: 'Success!',
          text: "Welcome, " + data.name,
          type: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigate(['/dashboard'])
      })
      .catch((err) => {
        console.log(err)
        Swal({
          title: 'Error!',
          text: err,
          type: 'error',
          confirmButtonText: 'Cancel'
        })
      });
  }

  loginFacebook() {
    this.auth.doLoginFacebook()
      .then((res) => {
        this.router.navigate(['/dashboard'])
      })
      .catch((err) => {
        console.log(err)
        Swal({
          title: 'Error!',
          text: err,
          type: 'error',
          confirmButtonText: 'Cancel'
        })
      });
  }

  loginTwitter() {
    this.auth.doLoginTwitter()
      .then((res) => {
        this.router.navigate(['/dashboard'])
      })
      .catch((err) => {
        console.log(err)
        Swal({
          title: 'Error!',
          text: err,
          type: 'error',
          confirmButtonText: 'Cancel'
        })
      });
  }

  register(){
    console.log("register : ")
  }
}
