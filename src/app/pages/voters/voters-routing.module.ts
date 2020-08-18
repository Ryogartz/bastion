import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotersPage } from './voters.page';

const routes: Routes = [
  {
    path: '',
    component: VotersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotersPageRoutingModule {}
