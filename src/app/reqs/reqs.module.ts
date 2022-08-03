import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReqsPageRoutingModule } from './reqs-routing.module';

import { ReqsPage } from './reqs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReqsPageRoutingModule
  ],
  declarations: [ReqsPage]
})
export class ReqsPageModule {}
