import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FAQpagePage } from './faqpage.page';

const routes: Routes = [
  {
    path: '',
    component: FAQpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FAQpagePageRoutingModule {}
