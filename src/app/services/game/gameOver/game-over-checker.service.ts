import {Injectable} from '@angular/core';
import {Player} from '../../../models/player.model';
import {HandCalcService} from '../hand-calc.service';
import {Dealer} from '../../../models/dealer.model';

@Injectable({
  providedIn: 'root'
})
export class GameOverCheckerService {
  dealer: Dealer;
  player: Player;

  constructor(private handCalc: HandCalcService) { }

  isGameOver(dealer: Dealer, player: Player): boolean {
    if (!dealer || !player) {
      throw new Error('Detect must have a dealer and a player params');
    }

    this.dealer = dealer;
    this.player = player;

    return (this.isSomeoneHas21() || this.isSomeoneOver21() || this.isDealerMustStop());
  }

  private isSomeoneHas21(): boolean {
    return this.handCalc.is21(this.dealer.cards) || this.handCalc.is21(this.player.cards);
  }

  private isSomeoneOver21(): boolean {
    return this.handCalc.isOver21(this.dealer.cards) || this.handCalc.isOver21(this.player.cards);
  }

  private isDealerMustStop(): boolean {
    return this.handCalc.is17OrMore(this.dealer.cards) || this.dealer.cards.length >= 5;
  }
}
