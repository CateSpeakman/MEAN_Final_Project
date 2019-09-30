import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdminService } from './../providers/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private users: Array<any> = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getUsers().subscribe((data) => {
      this.users = data;

    });//ends getUsers
  }

}
