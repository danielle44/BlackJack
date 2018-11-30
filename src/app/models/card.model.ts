import {Rank} from './rank.enum';
import {Suit} from './suit.enum';

export class Card {
  constructor(public rank: Rank, public suit: Suit, public isOpen: boolean = true){}

  getValues() {
    switch (this.rank) {

      case Rank.Ace:
        return [1, 11];

      case Rank.Jack:
      case Rank.Queen:
      case Rank.King:
        return [10];

      default:
        return [this.rank];
    }
  }
}
