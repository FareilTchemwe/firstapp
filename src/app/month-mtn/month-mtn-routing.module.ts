import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthMtnPage } from './month-mtn.page';

const routes: Routes = [
  {
    path: '',
    component: MonthMtnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthMtnPageRoutingModule {}
