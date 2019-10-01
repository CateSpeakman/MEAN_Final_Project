import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from './../providers/register.service';


import { User } from '../models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Add User';

  userName: string = '';
  email: string = '';
  password: string = '';
  newUserAdded: boolean = false;
  addNewUser: boolean = false;

  sub: any;
 

  error: boolean = false;
  errMsg: string = '';

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

    this.registerService.addUser(this.userName, this.email, this.password).subscribe(data => {
      if (data['error']) {
        this.errMsg = 'Registration unsuccessful.';
        this.error = true;
      } else {
        this.router.navigate(['login']);
      }
    });

    this.newUserAdded = true;
  }

  ngOnInit() {
    // get username from Query Params
    // Subscribe to Observable
    // pass anonymoue callback function to subscribe method
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.userName = params['username'];
      });//ends subscribe

    this.registerService.getUsers().subscribe((data) => {
      this.users = data.users;
    });//ends get Users

  }//ends 

  
}