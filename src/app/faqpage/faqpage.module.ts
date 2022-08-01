import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FAQpagePageRoutingModule } from './faqpage-routing.module';

import { FAQpagePage } from './faqpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FAQpagePageRoutingModule
  ],
  declarations: [FAQpagePage]
})
export class FAQpagePageModule {}
