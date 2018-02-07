import { TestBed, inject } from '@angular/core/testing';

import { BeforeRouteChangeService } from './before-route-change.service';

describe('BeforeRouteChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeforeRouteChangeService]
    });
  });

  it('should be created', inject([BeforeRouteChangeService], (service: BeforeRouteChangeService) => {
    expect(service).toBeTruthy();
  }));
});
