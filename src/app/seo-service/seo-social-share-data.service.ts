import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'
import { SocialShareData } from './share-data/social-share-data'


Injectable({
  providedIn: 'root'
})
export class SeoSocialShareDataService {
  private jsonLd: any = {};
  constructor(private readonly metaService: Meta,
    private readonly titleService: Title) { }

  public setData(data: SocialShareData, type: string, rawData: any) {
    this.setTitle(data.title)
    this.setDescription(data.description)
    this.setImage(data.image)
    this.jsonLd = this.getObject(type, rawData)
  }

  private setTitle(title: string = '') {
    this.titleService.setTitle(`Renzo R. Cretecio | ${title}`);
    if (title && title.length) {
      this.metaService.updateTag({ name: 'twitter:title', content: title });
      this.metaService.updateTag({ name: 'twitter:image:alt', content: title });
      this.metaService.updateTag({ property: 'og:image:alt', content: title });
      this.metaService.updateTag({ property: 'og:title', content: title });
      this.metaService.updateTag({ name: 'title', content: title });
    } else {
      this.metaService.removeTag(`name='twitter:title'`);
      this.metaService.removeTag(`name='twitter:image:alt'`);
      this.metaService.removeTag(`property='og:image:alt'`);
      this.metaService.removeTag(`property='og:title'`);
      this.metaService.removeTag(`name='title'`);
    }
  }

  public setDescription(description?: string) {
    if (description && description.length) {
      this.metaService.updateTag({ name: 'twitter:description', content: description });
      this.metaService.updateTag({ property: 'og:description', content: description });
      this.metaService.updateTag({ name: 'description', content: description });
    } else {
      this.metaService.removeTag(`name='twitter:description'`);
      this.metaService.removeTag(`property='og:description'`);
      this.metaService.removeTag(`name='description'`);
    }
  }

  public setImage(image?: string) {
    if (image && image.length) {
      this.metaService.updateTag({ name: 'twitter:image', content: image });
      this.metaService.updateTag({ property: 'og:image', content: image });
      this.metaService.updateTag({ property: 'og:image:height', content: '630' });
    } else {
      this.metaService.removeTag(`name='twitter:image'`);
      this.metaService.removeTag(`property='og:image'`);
      this.metaService.removeTag(`property='og:image:height'`);
    }
  }
  getObject(type: string, rawData?: any) {
    let object = {
      '@context': 'http://schema.org',
      '@type': type,
    };
    if (rawData) {
      object = Object.assign({}, object, rawData);
    }
    return object;
  }

  toJson() {
    return JSON.stringify(this.jsonLd);
  }

}
