import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MtnPageRoutingModule } from './mtn-routing.module';

import { MtnPage } from './mtn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MtnPageRoutingModule
  ],
  declarations: [MtnPage]
})
export class MtnPageModule {}
