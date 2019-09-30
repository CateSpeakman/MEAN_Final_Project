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
  is_admin: number;

  // create instance of Login Service
  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    // call login() method in AuthService to validate login creds
    this.loginService.login(this.userName, this.password).subscribe(data => {


      if (data) {
        this.loginService.setUserId(data.ID);
        this.loginService.setAuth(true);

        if (data.is_admin === 1) {
          this.loginService.setAdmin(true);
        } else {
          this.loginService.setAdmin(false);
        }
        this.router.navigate(['leagues'], { queryParams: { username: this.userName } });
      } else {
        // handle error here
        this.loginService.setAuth(false);
      }

    });//ends login call


  }//ends onlogin
}//ends onInit