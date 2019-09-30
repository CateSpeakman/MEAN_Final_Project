import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../providers/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';
  loginError: boolean = false;

  // create instance of Login Service
  constructor(
                 private loginService: LoginService, 
                private router: Router) {}

  ngOnInit() {
  }

  onLogin(): void {
    // call login() method in AuthService to validate login creds
    this.loginService.login(this.userName, this.password).subscribe(data => {
      if (data) {
        this.loginService.setUserId(data.ID);
        // load login "page"
        this.router.navigate(['leagues'], {queryParams: {username: this.userName}});
      } else {
        // handle error here
      }
    });
  }
}