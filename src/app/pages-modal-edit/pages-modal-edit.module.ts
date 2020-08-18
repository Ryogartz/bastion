import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesModalEditPageRoutingModule } from './pages-modal-edit-routing.module';

import { PagesModalEditPage } from './pages-modal-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesModalEditPageRoutingModule
  ],
  declarations: [PagesModalEditPage]
})
export class PagesModalEditPageModule {}
