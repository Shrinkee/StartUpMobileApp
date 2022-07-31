import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {

  constructor() { }

  public showStep1 = false;
  public showStep2 = false;
  public showStep3 = false;
  public showStep4 = false;

  content =[
    {
      "step1":"seeehshsehaehasheasehaeasehaehseas"
    },
    {
      "step2":"seeehshsehaedasdasdshasheasehaeasehaehseas"
    },
    {
      "step3":"seeehshsehaedasdasdshasheasehaeasehaehseas"
    },
    {
      "step4":"seeehshsehaedasdasdshasheasehaeasehaehseas"
    }
  
  ]
  
  //toggleContentsButton because its not in a loop
  toggleContent1(){
    this.showStep1 = !this.showStep1;
  }
  
  toggleContent2(){
    this.showStep2 = !this.showStep2;
  }
  
  toggleContent3(){
    this.showStep3 = !this.showStep3;
  }
  
  toggleContent4(){
    this.showStep4 = !this.showStep4;
  }
  
  

  ngOnInit() {
  }

}
