import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
//home page funtion
  homePage(){
    this.router.navigate(['/home-page']);
  }

}
