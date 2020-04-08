import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SeoSocialShareDataService } from './seo-service/seo-social-share-data.service'

@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {

  constructor(private titleService: Title,
    private meta: Meta,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly seoSocialShareDataService: SeoSocialShareDataService) {

  }

  public setupRouting() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary')
    ).subscribe((route: ActivatedRoute) => {
      const seo = route.snapshot.data['seo'];
      const jsonLd = {
        name: seo.title,
        url: 'https://creteciorenzo.netlify.com/' + this.router.routerState.snapshot.url,
      };
      // set your meta tags & title here
      this.seoSocialShareDataService.setData(seo, 'Website', jsonLd);
    });


  }



}


