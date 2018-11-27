import {Card} from './card.model';
import {consts} from '../consts';

export class Player {

  isDealer: boolean;
  name: string;
  moneyInDollars: number;
  cards: Card[];

  constructor(name: string, isDealer: boolean = false) {
    this.cards = [];
    this.moneyInDollars = consts.player.initMoneyInDollars;
    this.name = name || consts.player.names.noName;
    this.isDealer = !!isDealer;
  }
}
