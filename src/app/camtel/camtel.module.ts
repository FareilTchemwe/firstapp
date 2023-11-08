import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamtelPageRoutingModule } from './camtel-routing.module';

import { CamtelPage } from './camtel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamtelPageRoutingModule
  ],
  declarations: [CamtelPage]
})
export class CamtelPageModule {}
