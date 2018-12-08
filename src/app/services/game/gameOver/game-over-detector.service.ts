import { Injectable } from '@angular/core';
import {GameOverCheckerService} from './game-over-checker.service';
import {GameOverSetterService} from './game-over-setter.service';
import {GameResultCalculatorService} from './game-result-calculator.service';
import {Player} from '../../../models/player.model';
import {Dealer} from '../../../models/dealer.model';

@Injectable({
  providedIn: 'root'
})
export class GameOverDetectorService {

  constructor(private gameOverChecker: GameOverCheckerService,
              private gameOverSetter: GameOverSetterService,
              private gameResultCalculator: GameResultCalculatorService) { }

  detectAndSetStatusIfGameOver(dealer: Dealer, player: Player): void {
    if (!this.gameOverChecker.isGameOver(dealer, player)) {
      return;
    }

    const gameResult = this.gameResultCalculator.calc(dealer, player);
    this.gameOverSetter.set(gameResult);
  }
}
