import { TestBed } from '@angular/core/testing';

import { ForestmanagmentService } from './forestmanagment.service';

describe('ForestmanagmentService', () => {
  let service: ForestmanagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForestmanagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
