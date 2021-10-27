import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerPaginationComponent } from './server-pagination.component';
import { ServerPaginationRoutesModule } from './server-pagination.routes.module';



@NgModule({
  declarations: [ServerPaginationComponent],
  imports: [
    CommonModule,
    ServerPaginationRoutesModule
  ]
})
export class ServerPaginationModule { }
