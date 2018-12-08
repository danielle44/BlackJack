import { TestBed } from '@angular/core/testing';

import { GameOverSetterService } from './game-over-setter.service';

describe('GameOverSetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameOverSetterService = TestBed.get(GameOverSetterService);
    expect(service).toBeTruthy();
  });
});
