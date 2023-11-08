import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekCamtelPageRoutingModule } from './week-camtel-routing.module';

import { WeekCamtelPage } from './week-camtel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeekCamtelPageRoutingModule
  ],
  declarations: [WeekCamtelPage]
})
export class WeekCamtelPageModule {}
