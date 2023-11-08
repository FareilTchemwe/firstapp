import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtnPage } from './mtn.page';

const routes: Routes = [
  {
    path: '',
    component: MtnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtnPageRoutingModule {}
