import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
//food page function
  foodPage(){
    this.router.navigate(['/food']);
  }
//pubs page function
  pubsPage(){
    this.router.navigate(['/pubs']);
  }
//sights page function
  sightsPage(){
    this.router.navigate(['/sights']);
  }
//history page function
  historyPage(){
    this.router.navigate(['/history']);
  }

}
