import { TestBed } from '@angular/core/testing';

import { GameOverDetectorService } from './game-over-detector.service';

describe('GameOverDetectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameOverDetectorService = TestBed.get(GameOverDetectorService);
    expect(service).toBeTruthy();
  });
});
