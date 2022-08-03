import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'steps',
    loadChildren: () => import('./steps/steps.module').then( m => m.StepsPageModule)
  },
  {
    path: 'faqpage',
    loadChildren: () => import('./faqpage/faqpage.module').then( m => m.FAQpagePageModule)
  },
  {
    path: 'business-trends',
    loadChildren: () => import('./business-trends/business-trends.module').then( m => m.BusinessTrendsPageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'businessinfo',
    loadChildren: () => import('./businessinfo/businessinfo.module').then( m => m.BusinessinfoPageModule)
  },
  {
    path: 'reqs',
    loadChildren: () => import('./reqs/reqs.module').then( m => m.ReqsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
