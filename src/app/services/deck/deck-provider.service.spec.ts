import {TestBed} from '@angular/core/testing';

import {DeckProviderService} from './deck-provider.service';
import {CardsBuilderService} from './cards-builder.service';
import {ArrayShufflerService} from '../utils/array-shuffler.service';
import {Card} from '../../models/card.model';
import {Rank} from '../../models/rank.enum';
import {Suit} from '../../models/suit.enum';
import {Deck} from '../../models/deck.model';

describe('DeckProviderService', () => {

  const fakeCardsArray = [
    new Card(Rank.Six, Suit.Clubs),
    new Card(Rank.Nine, Suit.Diamonds),
    new Card(Rank.Eight, Suit.Clubs),
    new Card(Rank.Three, Suit.Hearts)
  ];

  let service: DeckProviderService;
  let deck: Deck;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ArrayShufflerService,
      { provide: CardsBuilderService, useClass: MockCardsBuilderService },
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(DeckProviderService);
  });

  describe('#initDeck and #getDeck', () => {
    it('should return a shuffled deck that contains all the cards', () => {
      service.initDeck();
      deck = service.getDeck();
      expect(deck.getSize()).toEqual(fakeCardsArray.length);

      const deckCards: Card[] = [];
      for (let i = 0; i < 4; i++) {
        deckCards.push(deck.getCard());
      }

      expect(deckCards).not.toEqual(fakeCardsArray);
    });

    it ('should raise error when trying to get deck that was not init yet', () => {
      expect(() => { service.getDeck(); }).toThrow(new Error('Deck was not init'));
    });

    it ('should return the same deck until init', () => {
      service.initDeck();
      deck = service.getDeck();

      const sameDeck = service.getDeck();
      expect(deck).toEqual(sameDeck);

      service.initDeck();
      const anotherDeck = service.getDeck();
      expect(deck).not.toEqual(anotherDeck);
    });
  });

  class MockCardsBuilderService {

    buildOrderedCardsDeck() {
      return fakeCardsArray;
    }
  }
});
