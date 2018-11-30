import { TestBed } from '@angular/core/testing';

import { CardsDealerService } from './cards-dealer.service';

describe('CardsDealerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardsDealerService = TestBed.get(CardsDealerService);
    expect(service).toBeTruthy();
  });
});
