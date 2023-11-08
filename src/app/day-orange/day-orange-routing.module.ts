import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayOrangePage } from './day-orange.page';

const routes: Routes = [
  {
    path: '',
    component: DayOrangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayOrangePageRoutingModule {}
