import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRecoverpasswordPageRoutingModule } from './modal-recoverpassword-routing.module';

import { ModalRecoverpasswordPage } from './modal-recoverpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRecoverpasswordPageRoutingModule
  ],
  declarations: [ModalRecoverpasswordPage]
})
export class ModalRecoverpasswordPageModule {}
