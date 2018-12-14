import { Injectable } from '@angular/core';
import {Player} from '../../../models/player.model';
import {Deck} from '../../../models/deck.model';
import {Dealer} from '../../../models/dealer.model';

@Injectable({
  providedIn: 'root'
})
export class CardsDealerService {

  constructor() { }

  dealCard(player: Player, deck: Deck) {
    const card = deck.getCard();
    player.cards.push(card);
  }

  dealCards(dealer: Dealer, players: Player[], deck: Deck) {
    const numOfCards = 2;
    let isLastTime = false;

    for (let i = 0; i < numOfCards; i++) {
      isLastTime = (i === numOfCards - 1);

      this.dealCardToEachPlayer(deck, players);
      this.dealCardToDealer(deck, dealer, !isLastTime);
    }
  }

  private dealCardToEachPlayer(deck, players) {
    players.forEach(player => {
      this.dealCard(player, deck);
    });
  }

  private dealCardToDealer(deck, dealer, isCardOpen: boolean = true) {
    if (!isCardOpen) {
      return;
    }

    const card = deck.getCard();
    card.isOpen = isCardOpen;
    dealer.cards.push(card);
  }
}
