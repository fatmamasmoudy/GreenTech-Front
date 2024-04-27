import { TestBed } from '@angular/core/testing';

import { DeforestationService } from './deforestation.service';

describe('DeforestationService', () => {
  let service: DeforestationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeforestationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
