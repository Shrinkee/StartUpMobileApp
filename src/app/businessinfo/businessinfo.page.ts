import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-businessinfo',
  templateUrl: './businessinfo.page.html',
  styleUrls: ['./businessinfo.page.scss'],
})
export class BusinessinfoPage implements OnInit {

  constructor(private storage:Storage, public router: Router, public navCtrl:NavController, public modalCtrl:ModalController, private alertController: AlertController) { 
    this.showCurrrent();
  }

  ngOnInit() {
  }
  //ts file
  //content container
  comName: string = "";

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Business Information Saved!',
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


//modal pop-up code and show content
isModalOpen = false;

setOpen(isOpen: boolean) {
  this.isModalOpen = isOpen;
  this.comName = this.comName;
  this.radioValue = this.radioValue;
  this.radioValue1 = this.radioValue1;
}


//radio button checker
radioValue;
radioValue1;

showValue(){
  console.log(this.radioValue);
  console.log(this.radioValue1);
}

setBusiness(){
  if(this.comName==="" || this.radioValue==undefined || this.radioValue1==undefined){
    this.errorFillInAlert();
  }
  else{
    this.storage.set('Company', this.comName);
    this.storage.set('Type', this.radioValue);
    this.storage.set('Ownership', this.radioValue1);
    this.modalCtrl.dismiss();
    this.successAlert();
    this.router.navigate(['/steps']);
  }
  
}

showCurrrent(){
  this.storage.get('Company').then((val)=>{
    if (val !== ""){
      this.comName=val;
      this.storage.get('Type').then((val)=>{
        this.radioValue = val;
      });
      this.storage.get('Ownership').then((val)=>{
        this.radioValue1 = val;
      });
    }
  });
}



}