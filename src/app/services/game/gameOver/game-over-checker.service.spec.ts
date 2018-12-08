import { TestBed } from '@angular/core/testing';

import { GameOverCheckerService } from './game-over-checker.service';

describe('GameOverDetectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameOverCheckerService = TestBed.get(GameOverCheckerService);
    expect(service).toBeTruthy();
  });
});
