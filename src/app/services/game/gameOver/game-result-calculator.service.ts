import {Injectable} from '@angular/core';
import {GameResult} from '../../../models/game-result';
import {Player} from '../../../models/player.model';
import {HandCalcService, HandsComparisonValue} from '../hand-calc.service';
import {Dealer} from '../../../models/dealer.model';

@Injectable({
  providedIn: 'root'
})
export class GameResultCalculatorService {

  constructor(private handCalc: HandCalcService) { }

  calc(dealer: Dealer, player: Player): GameResult {

    const handsComparisonVal = this.handCalc.compareHands(dealer.cards, player.cards);
    switch (handsComparisonVal) {
      case HandsComparisonValue.Tie:
        return {
          isTie: true,
          winner: player,
          looser: player,
          isBlackJack: false,
          winnerScore: this.handCalc.calcHandScore(player.cards),
          looserScore: this.handCalc.calcHandScore(player.cards)
        };
      case HandsComparisonValue.Dealer:
        return {
          isTie: false,
          winner: dealer,
          looser: player,
          isBlackJack: this.handCalc.isBlackJack(dealer.cards),
          winnerScore: this.handCalc.calcHandScore(dealer.cards),
          looserScore: this.handCalc.calcHandScore(player.cards)
        };
      case HandsComparisonValue.Player:
        return {
          isTie: false,
          winner: player,
          looser: dealer,
          isBlackJack: this.handCalc.isBlackJack(player.cards),
          winnerScore: this.handCalc.calcHandScore(player.cards),
          looserScore: this.handCalc.calcHandScore(dealer.cards)
        };
    }
  }
}
