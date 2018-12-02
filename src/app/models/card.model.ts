import {Rank} from './rank.enum';
import {Suit} from './suit.enum';

export class Card {
  constructor(public rank: Rank, public suit: Suit, public isOpen: boolean = true){}

  isAce() {
    return this.rank === Rank.Ace;
  }
}
