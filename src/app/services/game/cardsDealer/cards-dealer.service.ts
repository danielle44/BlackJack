import { Injectable } from '@angular/core';
import {Card} from '../../../models/card.model';
import {Player} from '../../../models/player.model';
import {Deck} from '../../../models/deck.model';
import {Dealer} from '../../../models/dealer.model';

@Injectable({
  providedIn: 'root'
})
export class CardsDealerService {

  constructor() { }

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
    let card: Card;

    players.forEach(player => {
      card = deck.getCard();
      player.cards.push(card);
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
