import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthCamtelPage } from './month-camtel.page';

const routes: Routes = [
  {
    path: '',
    component: MonthCamtelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthCamtelPageRoutingModule {}
