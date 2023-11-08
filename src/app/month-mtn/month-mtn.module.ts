import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthMtnPageRoutingModule } from './month-mtn-routing.module';

import { MonthMtnPage } from './month-mtn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthMtnPageRoutingModule
  ],
  declarations: [MonthMtnPage]
})
export class MonthMtnPageModule {}
