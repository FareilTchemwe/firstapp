import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekMtnPage } from './week-mtn.page';

const routes: Routes = [
  {
    path: '',
    component: WeekMtnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeekMtnPageRoutingModule {}
