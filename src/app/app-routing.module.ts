import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/server-pagination'
  },
  {
    path: 'server-pagination',
    loadChildren: () => import('./pagination/server-pagination/server-pagination.module').then(m => m.ServerPaginationModule)
  },
  {
    path: 'ui-pagination',
    loadChildren: async () => (await import('./pagination/ui-pagination/ui-pagination.module')).UiPaginationModule
  },
  {
    path: 'page-not-found',
    loadChildren: async () => (await import('./page-not-found/page-not-found.module')).PageNotFoundModule
  },
  // {
  //   path: 'page-not-found',
  //   loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  // },
  {
    path: '**',
    redirectTo: '/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
