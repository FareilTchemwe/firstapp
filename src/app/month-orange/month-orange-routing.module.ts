import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthOrangePage } from './month-orange.page';

const routes: Routes = [
  {
    path: '',
    component: MonthOrangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthOrangePageRoutingModule {}
