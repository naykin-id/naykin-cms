import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

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
          this.router.navigate(['dashboard']);
       })
       .catch((err) => console.log('error: ' + err));
  }

  loginGoogle() {
    this.auth.doLoginGoogle()
    .then((res) => { 
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }
  
  loginFacebook() {
    this.auth.doLoginFacebook()
    .then((res) => { 
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }
  
  loginTwitter() {
    this.auth.doLoginTwitter()
    .then((res) => { 
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }
}
