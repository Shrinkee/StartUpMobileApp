import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessinfoPageRoutingModule } from './businessinfo-routing.module';

import { BusinessinfoPage } from './businessinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessinfoPageRoutingModule
  ],
  declarations: [BusinessinfoPage]
})
export class BusinessinfoPageModule {}
