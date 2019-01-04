import { TestBed } from '@angular/core/testing';

import { DealerSecondCardRevealerService } from './dealer-second-card-revealer.service';
import {CardsDealerService} from './cards-dealer.service';
import {Dealer} from '../../../models/dealer.model';
import {Rank} from '../../../models/rank.enum';
import {Suit} from '../../../models/suit.enum';
import {Card} from '../../../models/card.model';

fdescribe('DealerSecondCardRevealerService', () => {
  let service: DealerSecondCardRevealerService;
  let cardsDealerService: any;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: CardsDealerService, useClass: CardsDealerServiceMock }
    ]
  }));

  beforeEach(() => {
     service = TestBed.get(DealerSecondCardRevealerService);
     cardsDealerService = TestBed.get(CardsDealerService);

     spyOn(cardsDealerService, 'dealCard');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`#revealDealerSecondCard`, () => {
    const dealer = new Dealer();
    const card = new Card(Rank.Nine, Suit.Hearts);

    it(`should deal the second card if dealer has one card`, () => {
      dealer.cards = [card];
      service.revealDealerSecondCard(dealer);
      expect(cardsDealerService.dealCard).toHaveBeenCalled();
    });

    it(`should not deal another card if dealer has less than one card`, () => {
      dealer.cards = [];
      service.revealDealerSecondCard(dealer);
      expect(cardsDealerService.dealCard).not.toHaveBeenCalled();
    });

    it(`should not deal another card if dealer has more than one cards`, () => {
      dealer.cards = [card, card];
      service.revealDealerSecondCard(dealer);
      expect(cardsDealerService.dealCard).not.toHaveBeenCalled();
    });
  });
});

class CardsDealerServiceMock {
  dealCard(x) {}
}
