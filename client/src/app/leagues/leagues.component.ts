import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LeaguesService } from './../providers/leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  private leagues: Array<any> = [];

  allTeamsBtn: boolean = true;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private leaguesService: LeaguesService) { }

  ngOnInit() {
    this.leaguesService.getLeagues().subscribe((data) => {
      this.leagues = data;
    });//ends getLeagues


  }

}
