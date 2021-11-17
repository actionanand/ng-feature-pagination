import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


import { ServerPaginationComponent } from './server-pagination.component';
import { ServerPaginationRoutesModule } from './server-pagination.routes.module';



@NgModule({
  declarations: [ServerPaginationComponent],
  imports: [
    CommonModule,
    ServerPaginationRoutesModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class ServerPaginationModule { }
