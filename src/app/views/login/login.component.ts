import { Component, OnInit } from '@angular/core';
import { USERS } from '../../mock-users'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log("login");

    USERS.forEach(user => {
      console.log(user)
      //if(user.name === )
    });
  }
}
