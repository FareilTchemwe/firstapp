import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamtelPage } from './camtel.page';

const routes: Routes = [
  {
    path: '',
    component: CamtelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamtelPageRoutingModule {}
