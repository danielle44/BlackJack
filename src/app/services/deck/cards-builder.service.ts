import { Injectable } from '@angular/core';
import {Deck} from '../../models/deck.model';
import {Suit} from '../../models/suit.enum';
import {Rank} from '../../models/rank.enum';
import {Card} from '../../models/card.model';
import {EnumToArrayConverterService} from '../utils/enum-to-array-converter.service';

@Injectable({
  providedIn: 'root'
})
export class CardsBuilderService {
  constructor(private enumToArrayConverter: EnumToArrayConverterService) { }

  buildOrderedCardsArray(): Card[] {
    const ranks: Rank[] = this.enumToArrayConverter.convert(Rank);
    const suits: Suit[] = this.enumToArrayConverter.convert(Suit);
    const cards: Card[] = [];

    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        cards.push(new Card(rank, suit));
      });
    });

    return cards;
  }
}
