import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private storage:Storage, private alertController: AlertController) { }

 
  public accounts = {
    username: "",
    password: ""
  }
  async welcomeAlert() {
    const alert = await this.alertController.create({
      header: 'Welcome',
      message: 'Welcome to StartUp!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async notExistAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'User does not exist!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async fillInAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Please fill in needed information!',
      buttons: ['OK']
    });

    await alert.present();
  }

 public accountValidation() {
    if (this.accounts.username === "" || this.accounts.password === ""){
      this.fillInAlert();
    }
    else{
      this.storage.get('user').then((val)=>{
      
        if(this.accounts.username == val.username && this.accounts.password == val.password) {
          this.storage.set('currentUser', val.username);
          this.router.navigate(['/home']);
          this.welcomeAlert();

        }
        else {
          this.accounts.username = "";
          this.accounts.password = "";
          this.notExistAlert();
        }
 
    });
    }
  }

  
  ngOnInit() {
  }

}
