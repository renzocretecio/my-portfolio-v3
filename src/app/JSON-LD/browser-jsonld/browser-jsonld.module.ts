import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerJsonldModule } from '../server-jsonld/server-jsonld.module'


@NgModule({
  providers: [
    ServerJsonldModule
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BrowserJsonldModule { }
