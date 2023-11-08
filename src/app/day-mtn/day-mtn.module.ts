import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayMtnPageRoutingModule } from './day-mtn-routing.module';

import { DayMtnPage } from './day-mtn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayMtnPageRoutingModule
  ],
  declarations: [DayMtnPage]
})
export class DayMtnPageModule {}
