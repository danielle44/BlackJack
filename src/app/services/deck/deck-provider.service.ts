import { Injectable } from '@angular/core';
import {Deck} from '../../models/deck.model';
import {CardsBuilderService} from './cards-builder.service';
import {ArrayShufflerService} from '../utils/array-shuffler.service';

@Injectable({
  providedIn: 'root'
})
export class DeckProviderService {

  constructor(private cardsBuilder: CardsBuilderService, private shuffler: ArrayShufflerService) { }

  getDeck(): Deck {
    let cards = this.cardsBuilder.buildOrderedCardsArray();
    cards = this.shuffler.shuffle(cards);
    return new Deck(cards);
  }
}
