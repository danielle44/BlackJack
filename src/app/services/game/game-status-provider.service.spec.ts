import { TestBed } from '@angular/core/testing';

import { GameStatusProviderService } from './game-status-provider.service';

describe('GameStatusProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameStatusProviderService = TestBed.get(GameStatusProviderService);
    expect(service).toBeTruthy();
  });
});
