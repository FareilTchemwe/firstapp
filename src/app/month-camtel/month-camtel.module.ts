import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthCamtelPageRoutingModule } from './month-camtel-routing.module';

import { MonthCamtelPage } from './month-camtel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthCamtelPageRoutingModule
  ],
  declarations: [MonthCamtelPage]
})
export class MonthCamtelPageModule {}
