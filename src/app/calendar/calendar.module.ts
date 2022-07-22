import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CalendarPage } from './calendar.page';

import { CalendarPageRoutingModule } from './calendar-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,NgCalendarModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
