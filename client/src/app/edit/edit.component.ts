import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private editService: EditService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {

    // get ID from Query Params
    // Subscribe to Observable
    // pass anonymoue callback function to subscribe method
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.userid = params['ID'];
      });//ends subscribe

    this.editService.getUser(this.userid).subscribe((data) => {
     data.forEach((user, index) => {
       this.user.push(new User(user.userName, user.email, user.password));
     })
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