import { TestBed } from '@angular/core/testing';

import { RestutilService } from './restutil.service';

describe('RestutilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestutilService = TestBed.get(RestutilService);
    expect(service).toBeTruthy();
  });
});
