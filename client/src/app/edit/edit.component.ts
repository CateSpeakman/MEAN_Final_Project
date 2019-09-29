import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditService } from './../providers/edit.service';





@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private editService: EditService,
    private route: ActivatedRoute,
    private router: Router) { }

  userName: string = '';
  email: string = '';
  userid: number;
  user: [];
  sub: any;




  ngOnInit() {

    // get username from Query Params
    // Subscribe to Observable
    // pass anonymoue callback function to subscribe method
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.userid = params['ID'];
      });//ends subscribe

    this.editService.getUser().subscribe((data) => {
      this.user = data.user;
    });//ends get Users


  }//ends 

}