import {Rank} from './rank.enum';
import {Suit} from './suit.enum';

export class Card {
  constructor(public rank: Rank, public suite: Suit){}
}
