import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor (private router: Router) {}

  userName : string = ""
  password : string = ""

  login(){
    console.log("login userName :", this.userName)
    console.log("login password :", this.password)
    console.log("login masuk")
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(){

  }
}
