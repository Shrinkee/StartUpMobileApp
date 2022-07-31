import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessTrendsPageRoutingModule } from './business-trends-routing.module';

import { BusinessTrendsPage } from './business-trends.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessTrendsPageRoutingModule
  ],
  declarations: [BusinessTrendsPage]
})
export class BusinessTrendsPageModule {}
