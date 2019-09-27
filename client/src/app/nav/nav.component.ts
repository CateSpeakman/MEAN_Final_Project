import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  goHome (){
    this.router.navigate (['/']);
  }

  goLogin (){
    this.router.navigate (['login']);
  }

  goRegister (){
    this.router.navigate (['register']);
  }

  goLeagues (){
    this.router.navigate (['leagues']);
  }

  goAdmin (){
    this.router.navigate (['admin']);
  }

  goEdit (){
    this.router.navigate (['edit']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
