import { Injectable } from '@angular/core';
import {Player} from '../../../models/player.model';
import {Dealer} from '../../../models/dealer.model';
import {DeckProviderService} from '../../deck/deck-provider.service';

@Injectable({
  providedIn: 'root'
})
export class CardsDealerService {

  constructor(private deckProvider: DeckProviderService) { }

  dealCard(player: Player) {
    const deck = this.deckProvider.getDeck();
    const card = deck.getCard();
    player.cards.push(card);
  }

  dealCards(dealer: Dealer, players: Player[]) {
    const numOfCards = 2;
    let isLastTime = false;

    for (let i = 0; i < numOfCards; i++) {
      isLastTime = (i === numOfCards - 1);

      this.dealCardToEachPlayer(players);
      this.dealCardToDealer(dealer, !isLastTime);
    }
  }

  private dealCardToEachPlayer(players) {
    players.forEach(player => {
      this.dealCard(player);
    });
  }

  private dealCardToDealer(dealer, isCardOpen: boolean = true) {
    const deck = this.deckProvider.getDeck();
    if (!isCardOpen) {
      return;
    }

    const card = deck.getCard();
    card.isOpen = isCardOpen;
    dealer.cards.push(card);
  }
}
