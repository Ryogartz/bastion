import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dasboard/dasboard.module').then( m => m.DasboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },

  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'modal-search',
    loadChildren: () => import('./pages/modal-search/modal-search.module').then( m => m.ModalSearchPageModule)
  },
  {
    path: 'modal-recoverpassword',
    loadChildren: () => import('./pages/modal-recoverpassword/modal-recoverpassword.module').then( m => m.ModalRecoverpasswordPageModule)
  },
  {
    path: 'modal-recommended',
    loadChildren: () => import('./pages/modal-recommended/modal-recommended.module').then( m => m.ModalRecommendedPageModule)
  },
  {
    path: 'modal-productdetails',
    loadChildren: () => import('./pages/modal-productdetails/modal-productdetails.module').then( m => m.ModalProductdetailsPageModule)
  },

  // {
  //   path: 'modal-productdetails',
  //   loadChildren: () => import('./pages/modal-productdetails/modal-productdetails.module').then( m => m.ModalProductdetailsPageModule)
  // },
  // {
  //   path: 'modal-localinfo',
  //   loadChildren: () => import('./pages/modal-localinfo/modal-localinfo.module').then( m => m.ModalLocalinfoPageModule)
  // },

  {
    path: 'voters',
    loadChildren: () => import('./pages/voters/voters.module').then( m => m.VotersPageModule)
  },
  {
    path: 'red',
    loadChildren: () => import('./pages/red/red.module').then( m => m.RedPageModule)
  },
  {
    path: 'pages-modal-edit',
    loadChildren: () => import('./pages-modal-edit/pages-modal-edit.module').then( m => m.PagesModalEditPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
