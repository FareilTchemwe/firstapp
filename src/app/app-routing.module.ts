import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'orange',
    loadChildren: () => import('./orange/orange.module').then( m => m.OrangePageModule)
  },
  {
    path: 'mtn',
    loadChildren: () => import('./mtn/mtn.module').then( m => m.MtnPageModule)
  },
  {
    path: 'camtel',
    loadChildren: () => import('./camtel/camtel.module').then( m => m.CamtelPageModule)
  },
  {
    path: 'month-orange',
    loadChildren: () => import('./month-orange/month-orange.module').then( m => m.MonthOrangePageModule)
  },
  {
    path: 'month-mtn',
    loadChildren: () => import('./month-mtn/month-mtn.module').then( m => m.MonthMtnPageModule)
  },
  {
    path: 'month-camtel',
    loadChildren: () => import('./month-camtel/month-camtel.module').then( m => m.MonthCamtelPageModule)
  },
  {
    path: 'week-camtel',
    loadChildren: () => import('./week-camtel/week-camtel.module').then( m => m.WeekCamtelPageModule)
  },
  {
    path: 'week-mtn',
    loadChildren: () => import('./week-mtn/week-mtn.module').then( m => m.WeekMtnPageModule)
  },
  {
    path: 'week-orange',
    loadChildren: () => import('./week-orange/week-orange.module').then( m => m.WeekOrangePageModule)
  },
  {
    path: 'day-orange',
    loadChildren: () => import('./day-orange/day-orange.module').then( m => m.DayOrangePageModule)
  },
  {
    path: 'day-mtn',
    loadChildren: () => import('./day-mtn/day-mtn.module').then( m => m.DayMtnPageModule)
  },
  {
    path: 'day-camtel',
    loadChildren: () => import('./day-camtel/day-camtel.module').then( m => m.DayCamtelPageModule)
  },
  {
    path: 'orange-form',
    loadChildren: () => import('./orange-form/orange-form.module').then( m => m.OrangeFormPageModule)
  },
  {
    path: 'mtn-form',
    loadChildren: () => import('./mtn-form/mtn-form.module').then( m => m.MtnFormPageModule)
  },
  {
    path: 'camtel-form',
    loadChildren: () => import('./camtel-form/camtel-form.module').then( m => m.CamtelFormPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
