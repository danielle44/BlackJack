import {Card} from './card.model';

export class Deck {
  private cards: Card[];

  constructor(cards: Card[]){
    this.cards = cards;
  }

  getCard(): Card {
    if (!this.cards.length) {
      throw Error('Deck is empty');
    }

    return this.cards.shift();
  }

  getSize() {
    return this.cards.length;
  }
}
