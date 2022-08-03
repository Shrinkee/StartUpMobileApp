import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode } from 'ionic2-calendar/calendar';
import {AlertController} from '@ionic/angular';
@Component({
  selector:'app-home',
  templateUrl:'calendar.page.html',
  styleUrls:['calendar.page.scss'],
})
export class CalendarPage{
  allEvents = [];
  currentMonth:string;
  calendar = {
    mode:'month' as CalendarMode,
    currentDate:new Date()
  }

  newEvent:any = {
    title:'',
    startTime:'',
    endTime:'',
  }
  showAddEvent:boolean;
  @ViewChild(CalendarComponent,null) myCalendar:CalendarComponent;

  constructor(private alertController: AlertController) {}

  onViewTitleChanged(title:string) {
    this.currentMonth = title;
  }

  back() {
    this.myCalendar.slidePrev();
  }
  forward() {
    this.myCalendar.slideNext();
  }
  showHideForm(){
    this.showAddEvent = !this.showAddEvent
    this.newEvent = {
      title:'',
      startTime:new Date().toISOString(),
      endTime:new Date().toISOString(),
    }
  }
  async addEvent() {
    if (this.newEvent.startTime <= this.newEvent.endTime){
    const alert = await this.alertController.create({
      header: 'Notification!',
      message: 'Event has been added.',
      buttons: ['OK']
    });
    alert.present();
    this.allEvents.push({
      title:this.newEvent.title,
      startTime:new Date(this.newEvent.startTime),
      endTime:new Date(this.newEvent.endTime),
    });
    console.log(this.newEvent);
    }
  }
}