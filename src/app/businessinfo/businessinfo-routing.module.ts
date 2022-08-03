import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessinfoPage } from './businessinfo.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessinfoPageRoutingModule {}
