import {getRankValue, Rank} from './rank.enum';
import {Suit} from './suit.enum';

export class Card {
  constructor(public rank: Rank, public suit: Suit, public isOpen: boolean = true){}

  isAce() {
    return getRankValue(this.rank) === getRankValue(Rank.Ace);
  }
}
