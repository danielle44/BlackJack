import { Injectable } from '@angular/core';
import {Dealer} from '../../../models/dealer.model';
import {CardsDealerService} from './cards-dealer.service';

@Injectable({
  providedIn: 'root'
})
export class DealerSecondCardRevealerService {

  constructor(private cardsDealer: CardsDealerService) { }

  revealDealerSecondCard(dealer: Dealer) {
    if (dealer.cards.length === 1) {
      this.cardsDealer.dealCard(dealer);
    }
  }
}
