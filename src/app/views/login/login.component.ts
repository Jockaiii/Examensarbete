import { Component, OnInit } from '@angular/core';
import { ACCOUNTS } from '../../mock-accounts'

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

    ACCOUNTS.forEach(account => {
      console.log(account)
      //if(user.name === )
    });
  }
}