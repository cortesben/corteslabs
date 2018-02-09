import { TestBed, inject } from '@angular/core/testing';

import { RouteResolver } from './route.resolver';

describe('RouteResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteResolver]
    });
  });

  it('should be created', inject([RouteResolver], (service: RouteResolver) => {
    expect(service).toBeTruthy();
  }));
});
