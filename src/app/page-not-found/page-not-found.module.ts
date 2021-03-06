import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundRoutesModule } from './page-not-found.routes.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutesModule,
    SharedModule
  ]
})
export class PageNotFoundModule { }
