import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public accounts = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    c_password: ""
  }

  constructor(public router: Router, public navCtrl:NavController, public modalCtrl:ModalController, private storage:Storage, private alertController: AlertController) {
   
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Account created Successfully!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async errorFillInAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Please fill in required information!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async errorPassMatchAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Password does not match!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async errorPassShortAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Password must be atleast 8 characters or more!',
      buttons: ['OK']
    });

    await alert.present();
  }




  public signup(){
    if(this.accounts.fname == "" || this.accounts.lname == "" || this.accounts.username == "" || this.accounts.password == "" || this.accounts.c_password == "") {
      this.errorFillInAlert();
    }
    else if (this.accounts.password !== this.accounts.c_password){
      this.errorPassMatchAlert();
    }
    else if (this.accounts.password.length<8 && this.accounts.c_password.length<8){
      this.errorPassShortAlert();
    }
    else {
      this.successAlert();
      this.storage.set('user', this.accounts);
      this.router.navigate(['/login']);
      
    }
  }


  ngOnInit(){
    
  }
}
