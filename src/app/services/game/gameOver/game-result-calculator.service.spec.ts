import { TestBed } from '@angular/core/testing';

import { GameResultCalculatorService } from './game-result-calculator.service';

describe('GameResultCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameResultCalculatorService = TestBed.get(GameResultCalculatorService);
    expect(service).toBeTruthy();
  });
});
