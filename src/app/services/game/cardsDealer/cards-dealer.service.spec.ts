import {TestBed} from '@angular/core/testing';

import {CardsDealerService} from './cards-dealer.service';
import {Dealer} from '../../../models/dealer.model';
import {Player} from '../../../models/player.model';
import {DeckProviderService} from '../../deck/deck-provider.service';
import {Card} from '../../../models/card.model';
import {Rank} from '../../../models/rank.enum';
import {Suit} from '../../../models/suit.enum';

describe('CardsDealerService', () => {
  let service: CardsDealerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DeckProviderService, useClass: MockDeckProviderService }
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(CardsDealerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`#dealFirstCards`, () => {
    const dealer = new Dealer();
    const player = new Player('A Player');

    describe(`single player`, () => {
      it(`should deal 2 cards for the player and 1 for the dealer`, () => {
        service.dealFirstCards(dealer, [player]);

        expect(dealer.cards.length).toEqual(1);
        expect(player.cards.length).toEqual(2);
      });

      it(`should drop the old cards and deal new cards`, () => {
        service.dealFirstCards(dealer, [player]);
        service.dealFirstCards(dealer, [player]);

        expect(dealer.cards.length).toEqual(1);
        expect(player.cards.length).toEqual(2);
      });
    });

    describe(`multiple players`, () => {
      const player2 = new Player('Another Player');

      it(`should deal 2 cards for each player and 1 for the dealer`, () => {
        service.dealFirstCards(dealer, [player, player2]);

        expect(dealer.cards.length).toEqual(1);
        expect(player.cards.length).toEqual(2);
        expect(player2.cards.length).toEqual(2);
      });

      it(`should drop the old cards and deal new cards`, () => {
        service.dealFirstCards(dealer, [player, player2]);
        service.dealFirstCards(dealer, [player, player2]);

        expect(dealer.cards.length).toEqual(1);
        expect(player.cards.length).toEqual(2);
        expect(player2.cards.length).toEqual(2);
      });
    });
  });

  class MockDeckProviderService {
    getDeck() {
      return {
        getCard: () => new Card(Rank.Ten, Suit.Clubs)
      };
    }
  }
});
