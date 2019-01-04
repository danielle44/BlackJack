import { Injectable } from '@angular/core';
import {Player} from '../../../models/player.model';
import {Dealer} from '../../../models/dealer.model';
import {DeckProviderService} from '../../deck/deck-provider.service';
import {TimeoutService} from '../../utils/timeout.service';

@Injectable({
  providedIn: 'root'
})
export class CardsDealerService {

  constructor(
    private deckProvider: DeckProviderService,
    private timeout: TimeoutService
  ) { }

  async dealFirstCards(dealer: Dealer, players: Player[]) {
    this.dropOldCards(dealer, players);

    await this.dealCardToEachPlayer(players);
    await this.dealCard(dealer);
    await this.dealCardToEachPlayer(players);
  }

  async dealCard(player: Player) {
    await this.timeout.timeout(500);

    const deck = this.deckProvider.getDeck();
    const card = deck.getCard();
    player.cards.push(card);
  }

  private dropOldCards(dealer: Dealer, players: Player[]): void {
    dealer.cards = [];
    players.forEach(player => player.cards = []);
  }

  private async dealCardToEachPlayer(players) {
    for (const player of players) {
      await this.dealCard(player);
    }
  }
}
