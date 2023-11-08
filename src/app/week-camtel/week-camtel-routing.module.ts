import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekCamtelPage } from './week-camtel.page';

const routes: Routes = [
  {
    path: '',
    component: WeekCamtelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeekCamtelPageRoutingModule {}
