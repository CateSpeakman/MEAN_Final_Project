import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../models/users.model';

import { RegisterService } from './../providers/register.service';

@Component({
  selector: 'app-users',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Add User';

  email: string = '';
  password: string = '';

  newUserAdded: boolean = false;
  addNewUser: boolean = false;

  sub: any;
  userName: string = '';

  // Array to hold User Objects
  users: User[] = [];

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private router: Router) { }


  // executed when the Reset button is clicked
  onReset(): void {
    this.userName = '';
    this.email = '';
    this.password = '';
    this.newUserAdded = false;
  }

  // executed when Add User is clicked
  onAddUser(): void {

    this.users = this.registerService.addUser(this.userName, this.email, this.password);
    this.newUserAdded = true;
  }

  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }


  ngOnInit() {
    // get username from Query Params
    // Subscribe to Observable
    // pass anonymoue callback function to subscribe method
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.userName = params['username'];
      });

    this.registerService.getUsers().subscribe((data) => {
      this.users = data.users;
    });

  }

  onLogout() {
    this.router.navigate(['/']);
  }
}
