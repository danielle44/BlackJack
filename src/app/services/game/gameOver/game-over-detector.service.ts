import { Injectable } from '@angular/core';
import {GameOverCheckerService} from './game-over-checker.service';
import {GameOverSetterService} from './game-over-setter.service';
import {GameResultCalculatorService} from './game-result-calculator.service';
import {Player} from '../../../models/player.model';
import {Dealer} from '../../../models/dealer.model';
import {DealerSecondCardRevealerService} from '../cardsDealer/dealer-second-card-revealer.service';

@Injectable({
  providedIn: 'root'
})
export class GameOverDetectorService {

  constructor(private gameOverChecker: GameOverCheckerService,
              private gameOverSetter: GameOverSetterService,
              private gameResultCalculator: GameResultCalculatorService,
              private dealerSecondCardRevealer: DealerSecondCardRevealerService) { }

  async detectAndSetStatusIfGameOver(dealer: Dealer, player: Player) {
    if (!this.gameOverChecker.isGameOver(dealer, player)) {
      return;
    }

    await this.dealerSecondCardRevealer.revealDealerSecondCard(dealer); // TODO: move to game, and change to sync
    const gameResult = this.gameResultCalculator.calc(dealer, player);
    this.gameOverSetter.set(gameResult);
  }
}
