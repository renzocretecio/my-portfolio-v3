import { TestBed } from '@angular/core/testing';

import { SeoSocialShareDataService } from './seo-social-share-data.service';

describe('SeoSocialShareDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeoSocialShareDataService = TestBed.get(SeoSocialShareDataService);
    expect(service).toBeTruthy();
  });
});
