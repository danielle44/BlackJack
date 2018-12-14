import {TestBed} from '@angular/core/testing';

import {HandCalcService, HandsComparisonValue} from './hand-calc.service';
import {Card} from '../../models/card.model';
import {Rank} from '../../models/rank.enum';
import {Suit} from '../../models/suit.enum';

fdescribe('HandCalcService', () => {
  let service: HandCalcService;

  const twoCard = new Card(Rank.Two, Suit.Clubs);
  const threeCard = new Card(Rank.Three, Suit.Diamonds);
  const fourCard = new Card(Rank.Four, Suit.Hearts);
  const fiveCard = new Card(Rank.Five, Suit.Spades);
  const sixCard = new Card(Rank.Six, Suit.Diamonds);
  const sevenCard = new Card(Rank.Seven, Suit.Clubs);
  const eightCard = new Card(Rank.Eight, Suit.Hearts);
  const nineCard = new Card(Rank.Nine, Suit.Spades);
  const tenCard = new Card(Rank.Ten, Suit.Diamonds);
  const jackCard = new Card(Rank.Jack, Suit.Clubs);
  const queenCard = new Card(Rank.Queen, Suit.Hearts);
  const kingCard = new Card(Rank.King, Suit.Spades);
  const aceCard = new Card(Rank.Ace, Suit.Diamonds);

  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    service = TestBed.get(HandCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('#isBlackJack', () => {
    it('should return true for Ace and Jack', () => {
      expect(service.isBlackJack([aceCard, jackCard])).toBeTruthy();
      expect(service.isBlackJack([jackCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and Queen', () => {
      expect(service.isBlackJack([aceCard, queenCard])).toBeTruthy();
      expect(service.isBlackJack([queenCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and King', () => {
      expect(service.isBlackJack([aceCard, kingCard])).toBeTruthy();
      expect(service.isBlackJack([kingCard, aceCard])).toBeTruthy();
    });


    it('should return true for Ace and Ten', () => {
      expect(service.isBlackJack([aceCard, tenCard])).toBeTruthy();
      expect(service.isBlackJack([tenCard, aceCard])).toBeTruthy();
    });

    it('should return false for Queen and multiple cards with the sum of 21', () => {
      expect(service.isBlackJack([queenCard, twoCard, fiveCard, fourCard])).toBeFalsy();
    });

    it('should return false fo cards with a sum different from 21', () => {
      expect(service.isBlackJack([twoCard, fiveCard])).toBeFalsy();
    });

  });

  describe('#is21', () => {
    it('should return true for Ace and Jack', () => {
      expect(service.is21([aceCard, jackCard])).toBeTruthy();
      expect(service.is21([jackCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and Queen', () => {
      expect(service.is21([aceCard, queenCard])).toBeTruthy();
      expect(service.is21([queenCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and King', () => {
      expect(service.is21([aceCard, kingCard])).toBeTruthy();
      expect(service.is21([kingCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and Ten', () => {
      expect(service.is21([aceCard, tenCard])).toBeTruthy();
      expect(service.is21([tenCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and multiple cards with then sum of 21', () => {
      expect(service.is21([aceCard, sevenCard, threeCard])).toBeTruthy();
    });


    it('should return true for 2 Aces and multiple cards with the sum of 21', () => {
      const ace2Card = new Card(Rank.Ace, Suit.Clubs);
      expect(service.is21([aceCard, ace2Card, nineCard])).toBeTruthy();
    });


    it('should return true for Queen and multiple cards with the sum of 21', () => {
      expect(service.is21([queenCard, twoCard, fiveCard, fourCard])).toBeTruthy();
    });


    it('should return true for multiple number cards with the sum of 21', () => {
      const six2Card = new Card(Rank.Six, Suit.Hearts);
      expect(service.is21([threeCard, fourCard, twoCard, sixCard, six2Card])).toBeTruthy();
    });


    it('should return false cards with a sum different from 21', () => {
      expect(service.is21([threeCard, fourCard, twoCard, sixCard])).toBeFalsy();
    });
  });

  describe('#isOver21', () => {
    it('should return true for more than 21', () => {
      expect(service.isOver21([queenCard, kingCard, jackCard])).toBeTruthy();
    });

    it('should return true for more than 21', () => {
      expect(service.isOver21([queenCard, kingCard, fiveCard])).toBeTruthy();
    });

    it('should return true for 2 queens and 2 aces - 22', () => {
      const ace2Card = new Card(Rank.Ace, Suit.Clubs);
      const queen2Card = new Card(Rank.Queen, Suit.Spades);
      expect(service.isOver21([aceCard, ace2Card, queenCard, queen2Card])).toBeTruthy();
    });

    it('should return true for 2 queens and a two - 22', () => {
      const queen2Card = new Card(Rank.Queen, Suit.Spades);
      expect(service.isOver21([twoCard, queenCard, queen2Card])).toBeTruthy();
    });

    it('should return false for two aces - since one can be at the value of 1', () => {
      const ace2Card = new Card(Rank.Ace, Suit.Clubs);
      expect(service.isOver21([aceCard, ace2Card])).toBeFalsy();
    });

    it('should return false for four aces - since three can be at the value of 1', () => {
      const ace2Card = new Card(Rank.Ace, Suit.Clubs);
      const ace3Card = new Card(Rank.Ace, Suit.Hearts);
      const ace4Card = new Card(Rank.Ace, Suit.Spades);
      expect(service.isOver21([aceCard, ace2Card, ace3Card, ace4Card])).toBeFalsy();
    });

    it('should return false for less than 21', () => {
      expect(service.isOver21([threeCard, fourCard])).toBeFalsy();
    });
  });

  describe('#is17OrMore', () => {
    it('should return true for 17', () => {
      expect(service.is17OrMore([queenCard, sevenCard])).toBeTruthy();
    });

    it('should return true for more than 17', () => {
      expect(service.is17OrMore([queenCard, kingCard])).toBeTruthy();
    });

    it('should return true for less than 17', () => {
      expect(service.is17OrMore([queenCard, fourCard])).toBeFalsy();
    });
  });

  describe(`#compareHands`, () => {
    describe('Tie', () => {
      it('should return tie for two black jacks', () => {
        const bjHand = [queenCard, aceCard];
        const bjHand2 = [jackCard, aceCard];
        expect(service.compareHands(bjHand, bjHand2)).toEqual(HandsComparisonValue.Tie);
      });

      it('should return tie for two 21s', () => {
        const toHand = [queenCard, sevenCard, fourCard];
        const toHand2 = [tenCard, fiveCard, sixCard];
        expect(service.compareHands(toHand, toHand2)).toEqual(HandsComparisonValue.Tie);
      });

      it('should return tie for the same hand', () => {
        const oneCardHand = [fourCard];
        const oneAceHand = [aceCard];
        const twoCardsHand = [tenCard, fiveCard];

        expect(service.compareHands(oneCardHand, oneCardHand)).toEqual(HandsComparisonValue.Tie);
        expect(service.compareHands(oneAceHand, oneAceHand)).toEqual(HandsComparisonValue.Tie);
        expect(service.compareHands(twoCardsHand, twoCardsHand)).toEqual(HandsComparisonValue.Tie);
      });

      it('should return tie for two 21 when one of them is a black jack', () => {
        const bjHand = [jackCard, aceCard];
        const toHand = [queenCard, sevenCard, fourCard];
        expect(service.compareHands(toHand, bjHand)).toEqual(HandsComparisonValue.Tie);
      });

      it('should return tie for two 5s (1 card vs 2 cards)', () => {
        const oneCardHand = [fiveCard];
        const twoCardsHand = [twoCard, threeCard];
        expect(service.compareHands(oneCardHand, twoCardsHand)).toEqual(HandsComparisonValue.Tie);
      });

      it('should return tie for two 17s (one contains ace)', () => {
        const firstHand = [fiveCard, kingCard, twoCard];
        const secondHand = [aceCard, sixCard];
        expect(service.compareHands(firstHand, secondHand)).toEqual(HandsComparisonValue.Tie);
      });

      it('should return tie when both hands are over 21', () => {
        const hand22 = [jackCard, tenCard, twoCard];
        const hand23 = [kingCard, sevenCard, sixCard];
        expect(service.compareHands(hand22, hand23)).toEqual(HandsComparisonValue.Tie);
      });
    });

    describe('Dealer/Player Wins', () => {
      it('should return correct winner for blackjack vs 20', () => {
        const bjHand = [kingCard, aceCard];
        const hand20 = [jackCard, tenCard];
        expect(service.compareHands(bjHand, hand20)).toEqual(HandsComparisonValue.Dealer);
        expect(service.compareHands(hand20, bjHand)).toEqual(HandsComparisonValue.Player);
      });

      it('should return correct winner for blackjack vs 22', () => {
        const bjHand = [kingCard, aceCard];
        const hand22 = [jackCard, tenCard, twoCard];
        expect(service.compareHands(bjHand, hand22)).toEqual(HandsComparisonValue.Dealer);
        expect(service.compareHands(hand22, bjHand)).toEqual(HandsComparisonValue.Player);
      });

      it('should return correct winner for 21 vs 20', () => {
        const hand21 = [kingCard, sevenCard, fourCard];
        const hand20 = [jackCard, tenCard];
        expect(service.compareHands(hand21, hand20)).toEqual(HandsComparisonValue.Dealer);
        expect(service.compareHands(hand20, hand21)).toEqual(HandsComparisonValue.Player);
      });

      it('should return correct winner for 21 vs 22', () => {
        const hand21 = [kingCard, sevenCard, fourCard];
        const hand22 = [jackCard, tenCard, twoCard];
        expect(service.compareHands(hand21, hand22)).toEqual(HandsComparisonValue.Dealer);
        expect(service.compareHands(hand22, hand21)).toEqual(HandsComparisonValue.Player);
      });

      it('should return correct winner for 17 vs 22', () => {
        const hand17 = [kingCard, fourCard];
        const hand22 = [jackCard, tenCard, twoCard];
        expect(service.compareHands(hand17, hand22)).toEqual(HandsComparisonValue.Dealer);
        expect(service.compareHands(hand22, hand17)).toEqual(HandsComparisonValue.Player);
      });

      it('should return correct winner for 17 vs 19', () => {
        const hand17 = [kingCard, sevenCard];
        const hand19 = [jackCard, nineCard];
        expect(service.compareHands(hand19, hand17)).toEqual(HandsComparisonValue.Dealer);
        expect(service.compareHands(hand17, hand19)).toEqual(HandsComparisonValue.Player);
      });

      it('should return correct winner for 12 vs 17', () => {
        const hand17 = [kingCard, sevenCard];
        const hand12 = [jackCard, twoCard];
        expect(service.compareHands(hand17, hand12)).toEqual(HandsComparisonValue.Dealer);
        expect(service.compareHands(hand12, hand17)).toEqual(HandsComparisonValue.Player);
      });

      it('should return correct winner for 17 vs 23', () => {
        const hand17 = [kingCard, sevenCard];
        const hand23 = [jackCard, jackCard, threeCard];
        expect(service.compareHands(hand17, hand23)).toEqual(HandsComparisonValue.Dealer);
        expect(service.compareHands(hand23, hand17)).toEqual(HandsComparisonValue.Player);
      });
    });
  });

  describe('#calcHandScore', () => {
    it('should return 10 for Royals and ten', () => {
      expect(service.calcHandScore([jackCard])).toEqual(10);
      expect(service.calcHandScore([queenCard])).toEqual(10);
      expect(service.calcHandScore([kingCard])).toEqual(10);
      expect(service.calcHandScore([tenCard])).toEqual(10);
    });

    it('should correct value for 11', () => {
      expect(service.calcHandScore([aceCard])).toEqual(11);
      expect(service.calcHandScore([eightCard, threeCard])).toEqual(11);
      expect(service.calcHandScore([sixCard, fiveCard])).toEqual(11);
    });

    it('should correct value for 17', () => {
      expect(service.calcHandScore([queenCard, sevenCard])).toEqual(17);
      expect(service.calcHandScore([aceCard, sixCard])).toEqual(17);
      expect(service.calcHandScore([fiveCard, nineCard, threeCard])).toEqual(17);
    });

    it('should correct value for 20', () => {
      expect(service.calcHandScore([queenCard, kingCard])).toEqual(20);
      expect(service.calcHandScore([tenCard, kingCard])).toEqual(20);
      expect(service.calcHandScore([jackCard, jackCard])).toEqual(20);
    });

    it('should correct value for 7', () => {
      console.log(sevenCard);
      expect(service.calcHandScore([sevenCard])).toEqual(7);
      expect(service.calcHandScore([fourCard, threeCard])).toEqual(7);
    });
  });
});
