import { TestBed } from '@angular/core/testing';

import { DealerSecondCardRevealerService } from './dealer-second-card-revealer.service';

describe('DealerSecondCardRevealerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DealerSecondCardRevealerService = TestBed.get(DealerSecondCardRevealerService);
    expect(service).toBeTruthy();
  });
});
