import { TestBed } from '@angular/core/testing';

import { StorageutilService } from './storageutil.service';

describe('StorageutilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageutilService = TestBed.get(StorageutilService);
    expect(service).toBeTruthy();
  });
});
