import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalityPageRoutingModule } from './personality-routing.module';

import { PersonalityPage } from './personality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalityPageRoutingModule
  ],
  declarations: [PersonalityPage]
})
export class PersonalityPageModule {}
