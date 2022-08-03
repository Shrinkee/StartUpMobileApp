import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReqsPage } from './reqs.page';

const routes: Routes = [
  {
    path: '',
    component: ReqsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReqsPageRoutingModule {}
