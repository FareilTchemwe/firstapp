import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamtelFormPageRoutingModule } from './camtel-form-routing.module';

import { CamtelFormPage } from './camtel-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamtelFormPageRoutingModule
  ],
  declarations: [CamtelFormPage]
})
export class CamtelFormPageModule {}
