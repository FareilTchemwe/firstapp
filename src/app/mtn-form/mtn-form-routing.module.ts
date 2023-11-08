import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtnFormPage } from './mtn-form.page';

const routes: Routes = [
  {
    path: '',
    component: MtnFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtnFormPageRoutingModule {}
