import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekOrangePageRoutingModule } from './week-orange-routing.module';

import { WeekOrangePage } from './week-orange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeekOrangePageRoutingModule
  ],
  declarations: [WeekOrangePage]
})
export class WeekOrangePageModule {}
