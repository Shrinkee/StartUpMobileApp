import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessTrendsPage } from './business-trends.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessTrendsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessTrendsPageRoutingModule {}
