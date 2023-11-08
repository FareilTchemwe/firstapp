import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrangePageRoutingModule } from './orange-routing.module';

import { OrangePage } from './orange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrangePageRoutingModule
  ],
  declarations: [OrangePage]
})
export class OrangePageModule {}
