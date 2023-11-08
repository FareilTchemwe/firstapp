import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MtnFormPageRoutingModule } from './mtn-form-routing.module';

import { MtnFormPage } from './mtn-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MtnFormPageRoutingModule
  ],
  declarations: [MtnFormPage]
})
export class MtnFormPageModule {}
