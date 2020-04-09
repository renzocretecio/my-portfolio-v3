import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { ServerJsonldModule } from './JSON-LD/server-jsonld/server-jsonld.module';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,

    ServerJsonldModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
