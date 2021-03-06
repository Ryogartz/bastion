import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSearchPageRoutingModule } from './modal-search-routing.module';

import { ModalSearchPage } from './modal-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalSearchPageRoutingModule
  ],
  declarations: [ModalSearchPage]
})
export class ModalSearchPageModule {}
