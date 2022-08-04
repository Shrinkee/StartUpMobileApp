import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode } from 'ionic2-calendar/calendar';
import { Storage } from '@ionic/storage';
import {AlertController} from '@ionic/angular';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { validate } from '@ionic/cli-framework';
@Component({
  selector:'app-home',
  templateUrl:'calendar.page.html',
  styleUrls:['calendar.page.scss'],
})

export class CalendarPage implements OnInit{
  ngOnInit(){
    this.setEvents();
  }
  allEvents=[];
  
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

  constructor(private storage:Storage, private alertController: AlertController, private router: Router){
    this.setEvents();
  }

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
    if(this.newEvent.title == "" || this.newEvent.startTime== null || this.newEvent.endTime== null){
      const alert = await this.alertController.create({
        header: 'Error!',
        message: 'Please fill in needed information!',
        buttons: ['OK']
      });
      alert.present();
    }
    else if (this.newEvent.startTime >= this.newEvent.endTime){
      const alert = await this.alertController.create({
        header: 'Error!',
        message: 'Start date should be earlier than the end date!',
        buttons: ['OK']
      });
      alert.present();
    }
    else{
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
      this.showAddEvent = false;
      this.storage.set('Calendar', this.allEvents);
    }
  }

  setEvents(){
    this.storage.get('Calendar').then((val)=>{
      if(val.length!==null){
        this.allEvents=val;
    }
    });
  }

  
}