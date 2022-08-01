import { Component,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  
  constructor() {}
  //auto play for slideshow
  slidesDidLoad(slides) {
    slides.startAutoplay();
  }
  
  //this is after manual sliding, autoplay re-start
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
      disableOnInteraction: false
    }
  };

  
}
