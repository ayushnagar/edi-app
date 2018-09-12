import { TestBed, inject } from '@angular/core/testing';

import { ProcessPendingService } from './process-pending.service';

describe('ProcessPendingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessPendingService]
    });
  });

  it('should be created', inject([ProcessPendingService], (service: ProcessPendingService) => {
    expect(service).toBeTruthy();
  }));
});
