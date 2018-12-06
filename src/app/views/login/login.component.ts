import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor (
    private router: Router, 
    private spinner: NgxSpinnerService) {}

  userName : string = ""
  password : string = ""

  login(){
    console.log("login userName :", this.userName)
    console.log("login password :", this.password)
    console.log("login masuk")
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.router.navigate(['/dashboard']);
    }, 5000);
  }

  ngOnInit(){

  }
}
