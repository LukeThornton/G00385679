import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sights',
  templateUrl: './sights.page.html',
  styleUrls: ['./sights.page.scss'],
})
export class SightsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
//home page funtion
  homePage(){
    this.router.navigate(['/home-page']);
  }

}
