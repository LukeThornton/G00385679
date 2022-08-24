import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.page.html',
  styleUrls: ['./pubs.page.scss'],
})
export class PubsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
//home page funtion
  homePage(){
    this.router.navigate(['/home-page']);
  }
  

}
