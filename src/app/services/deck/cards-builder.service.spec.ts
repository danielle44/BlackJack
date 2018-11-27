import {TestBed} from '@angular/core/testing';

import {CardsBuilderService} from './cards-builder.service';
import {EnumToArrayConverterService} from '../utils/enum-to-array-converter.service';
import {Card} from '../../models/card.model';

describe('CardsBuilderService', () => {
  let service: CardsBuilderService;
  let cards: Card[];

  const fakeEnumArray = ['Item1', 'Item2', 'Item3'];

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: EnumToArrayConverterService, useClass: MockEnumToArrayConverterService }
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(CardsBuilderService);
  });

  describe(`#buildOrderedCardsArray`, () => {

    it('should return correct amount of cards', () => {
      cards = service.buildOrderedCardsArray();
      expect(cards.length).toEqual(fakeEnumArray.length * fakeEnumArray.length);
    });

    it('should return an ordered array of cards', () => {
      cards = service.buildOrderedCardsArray();

      let currentCard;
      let cardIndex = 0;

      fakeEnumArray.forEach((fakeSuit) => {
        fakeEnumArray.forEach((fakeRank) => {
          currentCard = cards[cardIndex++];
          expect(currentCard.rank).toEqual(fakeRank);
          expect(currentCard.suit).toEqual(fakeSuit);
        });
      });
    });
  });

  class MockEnumToArrayConverterService {

    convert() {
      return fakeEnumArray;
    }
  }
});


