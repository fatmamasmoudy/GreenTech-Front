import { TestBed } from '@angular/core/testing';

import { GrasslandService } from './grassland.service';

describe('GrasslandService', () => {
  let service: GrasslandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrasslandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
