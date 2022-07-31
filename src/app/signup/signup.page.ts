import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {



  constructor(public router: Router, public navCtrl:NavController, public modalCtrl:ModalController) {
   
  }



  ngOnInit(){
    
  }
}
