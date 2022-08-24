import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
//home page funtion
  homePage(){
    this.router.navigate(['/home-page']);
  }
  

}
