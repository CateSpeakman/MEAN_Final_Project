import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  onSearch(): void {
    //on click event from home screen to route to Login page before allowing
    // user to go to search page
          this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
