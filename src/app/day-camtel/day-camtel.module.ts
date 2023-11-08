import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayCamtelPageRoutingModule } from './day-camtel-routing.module';

import { DayCamtelPage } from './day-camtel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayCamtelPageRoutingModule
  ],
  declarations: [DayCamtelPage]
})
export class DayCamtelPageModule {}
