import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mUsername: string = "";
  mPassword: string = "";
  constructor(private router:Router) { }

  ngOnInit() {

  }
  onClickSubmit() {
    if(this.mUsername == "user" && this.mPassword == "1234"){
      this.router.navigate(["/login-form"]);

    }
    else{
      window.alert(["Incorrect username or password."]);
      
    }

  }

}
