import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalityPage } from './personality.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalityPageRoutingModule {}
