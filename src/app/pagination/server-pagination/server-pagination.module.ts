import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ServerPaginationComponent } from './server-pagination.component';
import { ServerPaginationRoutesModule } from './server-pagination.routes.module';
import { SharedModule } from '../../shared/shared.module';


// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http, './assets/i18n/server', '.json'); // to use custom folder
// }

@NgModule({
  declarations: [ServerPaginationComponent],
  imports: [
    CommonModule,
    ServerPaginationRoutesModule,
    SharedModule,
    // TranslateModule.forChild({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   },
    //   isolate: false, // use as true to use separate translate files
    //   extend:true
    // })
  ]
})
export class ServerPaginationModule { }
