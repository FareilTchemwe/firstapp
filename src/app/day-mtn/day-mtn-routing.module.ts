import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayMtnPage } from './day-mtn.page';

const routes: Routes = [
  {
    path: '',
    component: DayMtnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayMtnPageRoutingModule {}
