import { Injectable } from '@angular/core';
import {Card} from '../../models/card.model';
import {Rank} from '../../models/rank.enum';

@Injectable({
  providedIn: 'root'
})
export class HandCalcService {
  constructor() { }

  isBlackJack(hand: Card[]): boolean {
    return this.is21(hand) && hand.length === 2;
  }

  is21(hand: Card[]): boolean {
    return this.calcHandScore(hand) === 21;
  }

  isOver21(hand: Card[]): boolean {
    return this.calcHandScore(hand) > 21;
  }

  is17OrMore(hand: Card[]): boolean {
    return this.calcHandScore(hand) >= 17;
  }

  compareHands(dealerHand: Card[], playerHand: Card[]): HandsComparisonValue {
    const dealerScore = this.calcHandScore(dealerHand);
    const playerScore = this.calcHandScore(playerHand);

    const comparatorResult = this.handValuesComparator(dealerScore, playerScore);

    if (comparatorResult === 0) {
      return HandsComparisonValue.Tie;
    }

    return (comparatorResult > 0) ? HandsComparisonValue.Dealer : HandsComparisonValue.Player;
  }

  private getHandPossibleValues(hand: Card[]): number[] {

    if (!hand.some(card => card.isAce())) {
      return [this.calcHandNoAcesSum(hand)];
    }

    const handNoAces = hand.filter(card => !card.isAce());
    const handNoAcesSum = this.calcHandNoAcesSum(handNoAces);
    const acesCount = hand.length - handNoAces.length;

    // Only 1 Ace can have the value of 11 (otherwise it's over 21)
    const sumWhenAceIs11 = handNoAcesSum + 11 + (acesCount - 1);
    const sunWhenAllAcesAre1 = handNoAcesSum + acesCount;

    return [sumWhenAceIs11, sunWhenAllAcesAre1];
  }

  private calcHandNoAcesSum(handNoAces: Card[]) {
    return handNoAces
      .map(card => card.rank)
      .map(rank => ([Rank.Jack, Rank.Queen, Rank.King].includes(rank) ? 10 : rank))
      .reduce(((rank1, rank2) => rank1 + rank2), 0);
  }

  calcHandScore(hand: Card[]): number {
    const handValues = this.getHandPossibleValues(hand);
    const handValueSorted = handValues.sort(this.handValuesComparator);
    return handValueSorted.pop();
  }

  private handValuesComparator(handValue1: number, handValue2: number): number {
    if (handValue1 < 1 || handValue2 < 1) {
      throw Error('Value must be at least 1');
    }

    if (handValue1 > 21 && handValue2 > 21) {
      return 0;
    }

    if (handValue2 > 21) {
      return 1;
    }

    if (handValue1 > 21) {
      return -1;
    }

    return handValue1 - handValue2;
  }
}

export enum HandsComparisonValue {
  'Dealer', 'Player', 'Tie'
}
