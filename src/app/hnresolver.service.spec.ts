import { TestBed, inject } from '@angular/core/testing';

import { Hn.ResolverService } from './hn.resolver.service';

describe('Hn.ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hn.ResolverService]
    });
  });

  it('should be created', inject([Hn.ResolverService], (service: Hn.ResolverService) => {
    expect(service).toBeTruthy();
  }));
});
