import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthOrangePageRoutingModule } from './month-orange-routing.module';

import { MonthOrangePage } from './month-orange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthOrangePageRoutingModule
  ],
  declarations: [MonthOrangePage]
})
export class MonthOrangePageModule {}
