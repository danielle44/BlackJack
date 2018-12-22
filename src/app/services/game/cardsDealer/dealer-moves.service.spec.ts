import { TestBed } from '@angular/core/testing';

import { DealerMovesService } from './dealer-moves.service';

describe('DealerSecondCardRevealerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DealerMovesService = TestBed.get(DealerMovesService);
    expect(service).toBeTruthy();
  });
});
