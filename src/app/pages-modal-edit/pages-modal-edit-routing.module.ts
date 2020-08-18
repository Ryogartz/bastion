import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesModalEditPage } from './pages-modal-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PagesModalEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesModalEditPageRoutingModule {}
