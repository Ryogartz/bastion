import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotersPageRoutingModule } from './voters-routing.module';

import { VotersPage } from './voters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotersPageRoutingModule
  ],
  declarations: [VotersPage]
})
export class VotersPageModule {}
