import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiPaginationComponent } from './ui-pagination.component';
import { UiPaginationRoutesModule } from './ui-pagination.routes.module';



@NgModule({
  declarations: [UiPaginationComponent],
  imports: [
    CommonModule,
    UiPaginationRoutesModule
  ]
})
export class UiPaginationModule { }
