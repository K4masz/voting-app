import { TestBed } from '@angular/core/testing';

import { VoterStoreService } from './voter-store.service';

describe('VoterStoreService', () => {
  let service: VoterStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoterStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
