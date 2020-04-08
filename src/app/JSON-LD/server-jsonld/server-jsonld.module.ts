import { NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BEFORE_APP_SERIALIZED } from '@angular/platform-server';
import { SeoSocialShareDataService } from '../../seo-service/seo-social-share-data.service'

export function serializeJsonLdFactory(doc: Document, jsonLdService: SeoSocialShareDataService) {
  const serializeAndInject = function () {
    const script = doc.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = jsonLdService.toJson();
    doc.head.appendChild(script);
  };
  return serializeAndInject;
}

@NgModule({
  providers: [
    SeoSocialShareDataService, {
      provide: BEFORE_APP_SERIALIZED,
      useFactory: serializeJsonLdFactory,
      deps: [DOCUMENT, SeoSocialShareDataService],
      multi: true,
    },
  ],
  declarations: [],
  imports: [

  ]
})
export class ServerJsonldModule { }
