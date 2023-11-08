import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrangeFormPageRoutingModule } from './orange-form-routing.module';

import { OrangeFormPage } from './orange-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrangeFormPageRoutingModule
  ],
  declarations: [OrangeFormPage]
})
export class OrangeFormPageModule {}
