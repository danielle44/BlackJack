import { Injectable } from '@angular/core';
import {Dealer} from '../../../models/dealer.model';
import {CardsDealerService} from './cards-dealer.service';
import {GameOverDetectorService} from '../gameOver/game-over-detector.service';
import {Player} from '../../../models/player.model';
import {GameOverCheckerService} from '../gameOver/game-over-checker.service';

@Injectable({
  providedIn: 'root'
})
export class DealerMovesService {

  constructor(private cardsDealer: CardsDealerService,
              private gameOverDetector: GameOverDetectorService,
              private gameOverChecker: GameOverCheckerService) { }

  async playDealerTurn(dealer: Dealer, player: Player) {
    while (!this.gameOverChecker.isGameOver(dealer, player)) { // TODO: check in one place the status
      await this.cardsDealer.dealCard(dealer);
      this.gameOverDetector.detectAndSetStatusIfGameOver(dealer, player);
    }
  }
}
