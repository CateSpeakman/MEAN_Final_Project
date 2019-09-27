import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

 import { User } from '../models/users.model';

// import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Add User';

  firstName: string = '';
  lastName: string = '';
  email: string = '';

  newUserAdded: boolean = false;
  addNewUser: boolean = false;

  sub: any;
  userName: string = '';

  // Array to hold User Objects
   users: User[] = [];

   constructor(
    // private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }


  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.newUserAdded = false;
  }

  // executed when Add User is clicked
  // onAddUser(): void {

  //   this.users = this.authService.addUser(this.firstName, this.lastName, this.email);
  //   this.newUserAdded = true;
  // }

   getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
   }


  ngOnInit() {
    // get username from Query Params
    // Subscribe to Observable
    // pass anonymoue callback function to subscribe method
  //   this.sub = this.route
  //     .queryParams
  //     .subscribe(params => {
  //       this.userName = params['username'];
  //     });

  //     this.authService.getUsers().subscribe((data)  => {
  //       this.users = data.users;
  //     });

   }
  
   onLogout() {
    this.router.navigate(['/']);
  }
}
