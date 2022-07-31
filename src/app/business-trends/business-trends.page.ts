import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-trends',
  templateUrl: './business-trends.page.html',
  styleUrls: ['./business-trends.page.scss'],
})
export class BusinessTrendsPage implements OnInit {

  constructor() { }

  //gaming business
  public showDetails1 = true;
  public showDetails1v2 = false;
  
  //real estate
  public showDetails2 = true;
  public showDetails2v2 = false;

  //food business
  public showDetails3 = true;
  public showDetails3v2 = false;


  ngOnInit() {
  }

  //toggle Contents for each components
  toggleContentGame() {
      this.showDetails1 = !this.showDetails1;
      this.showDetails1v2 = !this.showDetails1v2;
  }
  toggleContentRealEstate() {
    this.showDetails2 = !this.showDetails2;
    this.showDetails2v2 = !this.showDetails2v2;
  }
  toggleContentFood() {
    this.showDetails3 = !this.showDetails3;
    this.showDetails3v2 = !this.showDetails3v2;
  }
}
