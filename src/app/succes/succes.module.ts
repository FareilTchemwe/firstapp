import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccesPageRoutingModule } from './succes-routing.module';

import { SuccesPage } from './succes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesPageRoutingModule
  ],
  declarations: [SuccesPage]
})
export class SuccesPageModule {}
