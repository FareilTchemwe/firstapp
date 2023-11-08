import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamtelFormPage } from './camtel-form.page';

const routes: Routes = [
  {
    path: '',
    component: CamtelFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamtelFormPageRoutingModule {}
