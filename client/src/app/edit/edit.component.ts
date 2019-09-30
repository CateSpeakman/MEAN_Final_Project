import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './../providers/login.service';
import { EditService } from './../providers/edit.service';

import { User } from '../models/users.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userName: string = '';
  email: string = '';
  userid: number;
  user: Array<User> = [];
  sub: any;

  constructor(
    private loginService: LoginService,
    private editService: EditService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {

    this.editService.getUser(this.loginService.getUserId()).subscribe((data) => {
      console.log(data);
     
       //this.user.push(new User(data.userName, data.email, data.password));
       this.userName = data.username;
       this.email = data.email;

    });//ends getUser


  }//ends 


onEdit(userId: number): void {
  //call editUser() method in EditService to make changes to user info
  this.editService.editUser(userId).subscribe(data => {
    this.router.navigate(['edit']);
  })

}

 onDelete(userId: number): void {
      // Call EditService to delete User
      this.editService.deleteUser(userId).subscribe(data => {
        this.router.navigate(['edit']);
        
      });
  }


}