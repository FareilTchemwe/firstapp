import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayOrangePageRoutingModule } from './day-orange-routing.module';

import { DayOrangePage } from './day-orange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayOrangePageRoutingModule
  ],
  declarations: [DayOrangePage]
})
export class DayOrangePageModule {}
