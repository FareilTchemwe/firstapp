import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekMtnPageRoutingModule } from './week-mtn-routing.module';

import { WeekMtnPage } from './week-mtn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeekMtnPageRoutingModule
  ],
  declarations: [WeekMtnPage]
})
export class WeekMtnPageModule {}
