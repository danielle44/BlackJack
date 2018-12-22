import { Injectable } from '@angular/core';
import {Deck} from '../../models/deck.model';
import {CardsBuilderService} from './cards-builder.service';
import {ArrayShufflerService} from '../utils/array-shuffler.service';

@Injectable({
  providedIn: 'root'
})
export class DeckProviderService {

  private deck: Deck;

  constructor(private cardsBuilder: CardsBuilderService, private shuffler: ArrayShufflerService) { }

  initDeck(): void {
    let cards = this.cardsBuilder.buildOrderedCardsArray();
    cards = this.shuffler.shuffle(cards);
    this.deck = new Deck(cards);
  }

  getDeck(): Deck {
    if (!this.deck) {
      throw Error ('Deck was not init');
    }

    return this.deck;
  }
}
