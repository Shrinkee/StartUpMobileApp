import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {

  constructor(private storage:Storage, private alertController: AlertController) { }
  public showStep3 = false;
  public showStep4 = false;

  async warnAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'You already fill in your business information. Filling in again will update the previous input!',
      buttons: ['OK']
    });

    await alert.present();
  }

  
  
  //toggleContentsButton because its not in a loop

  toggleContent3(){
    this.showStep3 = !this.showStep3;
  }
  
  toggleContent4(){
    this.showStep4 = !this.showStep4;
  }
  
  checkBusiness(){
    this.storage.get('Company').then((val)=>{
      if (val !== ""){
        console.log(val);
        this.warnAlert();
      }

    });
  }

  ngOnInit() {
  }

}
