import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode } from 'ionic2-calendar/calendar';
@Component({
  selector:'app-home',
  templateUrl:'calendar.page.html',
  styleUrls:['calendar.page.scss'],
})
export class CalendarPage implements OnInit{
  allEvents = [];
  currentMonth:string;
  calendar = {
    mode:'month' as CalendarMode,
    currentDate:new Date(2022,6,20)
  }

  newEvent:any = {
    title:'',
    description:'',
    startTime:'',
    endTime:'',
  }
  showAddEvent:boolean;
  @ViewChild(CalendarComponent,null) myCalendar:CalendarComponent;

  myData = [
    {
      title: "My First Event",
      description: "My First Description",
      startTime: new Date(2022,6,20,12,11,11),
      endTime: new Date(2022,6,20,12,11,11),
    },
    {
      title: "My Second Event",
      description: "My Second Description",
      startTime: new Date(2022,6,21,12,11,11),
      endTime: new Date(2022,6,21,13,11,11),
    },
    {
      title: "My Third Event",
      description: "My Third Description",
      startTime: new Date(2022,6,22,12,11,11),
      endTime: new Date(2022,6,22,14,11,11),
    }
    
  ];

  constructor() {}

  ngOnInit() {
    this.allEvents = this.myData;
  }

  onViewTitleChanged(title:string) {
    this.currentMonth = title;
  }

  onEventSelected(ev) {
    this.newEvent = ev;
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
      description:'',
      startTime:new Date().toISOString(),
      endTime:new Date().toISOString(),
    }
  }
  today() {
    this.calendar.currentDate = new Date()
  }
  changeMode(mode){
    this.calendar.mode = mode;
  }
  addEvent() {
    this.allEvents.push({
      title:this.newEvent.title,
      description:this.newEvent.description,
      startTime:new Date(this.newEvent.startTime),
      endTime:new Date(this.newEvent.endTime),
    });
    console.log(this.newEvent);
  }
}
