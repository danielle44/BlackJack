import {Card} from './card.model';
import {consts} from '../consts';
import {Rank} from './rank.enum';
import {Suit} from './suit.enum';

export class Player {

  isDealer: boolean;
  name: string;
  moneyInDollars: number;
  cards: Card[];

  constructor(name: string, isDealer: boolean = false) {
    this.cards = [];
    this.cards.push(new Card(Rank.Eight, Suit.Clubs));
    this.cards.push(new Card(Rank.Ace, Suit.Diamonds));

    this.moneyInDollars = consts.player.initMoneyInDollars;
    this.name = name || consts.player.names.noName;
    this.isDealer = !!isDealer;
  }
}
