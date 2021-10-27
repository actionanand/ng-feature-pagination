import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerPaginationComponent } from './server-pagination.component';

const routes: Routes = [
  {
    path: '', component: ServerPaginationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServerPaginationRoutesModule { }
