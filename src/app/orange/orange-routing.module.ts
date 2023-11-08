import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrangePage } from './orange.page';

const routes: Routes = [
  {
    path: '',
    component: OrangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrangePageRoutingModule {}
