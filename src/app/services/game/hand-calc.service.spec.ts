import {TestBed} from '@angular/core/testing';

import {HandCalcService, HandsComparisonValues} from './hand-calc.service';
import {Card} from '../../models/card.model';
import {Rank} from '../../models/rank.enum';
import {Suit} from '../../models/suit.enum';

fdescribe('HandCalcService', () => {
  let service: HandCalcService;

  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    service = TestBed.get(HandCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('#isBlackJack', () => {
    it('should return true for Ace and Jack', () => {
      const jackCard = new Card(Rank.Jack, Suit.Diamonds);
      const aceCard = new Card(Rank.Ace, Suit.Hearts);

      expect(service.isBlackJack([aceCard, jackCard])).toBeTruthy();
      expect(service.isBlackJack([jackCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and Queen', () => {
      const queenCard = new Card(Rank.Queen, Suit.Diamonds);
      const aceCard = new Card(Rank.Ace, Suit.Hearts);

      expect(service.isBlackJack([aceCard, queenCard])).toBeTruthy();
      expect(service.isBlackJack([queenCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and King', () => {
      const kingCard = new Card(Rank.King, Suit.Diamonds);
      const aceCard = new Card(Rank.Ace, Suit.Hearts);

      expect(service.isBlackJack([aceCard, kingCard])).toBeTruthy();
      expect(service.isBlackJack([kingCard, aceCard])).toBeTruthy();
    });


    it('should return true for Ace and Ten', () => {
      const tenCard = new Card(Rank.Ten, Suit.Diamonds);
      const aceCard = new Card(Rank.Ace, Suit.Hearts);

      expect(service.isBlackJack([aceCard, tenCard])).toBeTruthy();
      expect(service.isBlackJack([tenCard, aceCard])).toBeTruthy();
    });

    it('should return false for Queen and multiple cards with the sum of 21', () => {
      const queenCard = new Card(Rank.Queen, Suit.Diamonds);
      const twoCard = new Card(Rank.Two, Suit.Hearts);
      const fiveCard = new Card(Rank.Five, Suit.Hearts);
      const fourCard = new Card(Rank.Four, Suit.Hearts);

      expect(service.isBlackJack([queenCard, twoCard, fiveCard, fourCard])).toBeFalsy();
    });

    it('should return false fo cards with a sum different from 21', () => {
      const twoCard = new Card(Rank.Two, Suit.Hearts);
      const fiveCard = new Card(Rank.Five, Suit.Hearts);

      expect(service.isBlackJack([twoCard, fiveCard])).toBeFalsy();
    });

  });

  describe('#is21', () => {
    it('should return true for Ace and Jack', () => {
      const jackCard = new Card(Rank.Jack, Suit.Diamonds);
      const aceCard = new Card(Rank.Ace, Suit.Hearts);

      expect(service.is21([aceCard, jackCard])).toBeTruthy();
      expect(service.is21([jackCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and Queen', () => {
      const queenCard = new Card(Rank.Queen, Suit.Diamonds);
      const aceCard = new Card(Rank.Ace, Suit.Hearts);

      expect(service.is21([aceCard, queenCard])).toBeTruthy();
      expect(service.is21([queenCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and King', () => {
      const kingCard = new Card(Rank.King, Suit.Diamonds);
      const aceCard = new Card(Rank.Ace, Suit.Hearts);

      expect(service.is21([aceCard, kingCard])).toBeTruthy();
      expect(service.is21([kingCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and Ten', () => {
      const tenCard = new Card(Rank.Ten, Suit.Diamonds);
      const aceCard = new Card(Rank.Ace, Suit.Hearts);

      expect(service.is21([aceCard, tenCard])).toBeTruthy();
      expect(service.is21([tenCard, aceCard])).toBeTruthy();
    });

    it('should return true for Ace and multiple cards with then sum of 21', () => {
      const aceCard = new Card(Rank.Ace, Suit.Hearts);
      const sevenCard = new Card(Rank.Seven, Suit.Diamonds);
      const treeCard = new Card(Rank.Three, Suit.Diamonds);

      expect(service.is21([aceCard, sevenCard, treeCard])).toBeTruthy();
    });


    it('should return true for 2 Aces and multiple cards with the sum of 21', () => {
      const aceCard = new Card(Rank.Ace, Suit.Hearts);
      const ace2Card = new Card(Rank.Ace, Suit.Clubs);
      const nineCard = new Card(Rank.Nine, Suit.Diamonds);

      expect(service.is21([aceCard, ace2Card, nineCard])).toBeTruthy();
    });


    it('should return true for Queen and multiple cards with the sum of 21', () => {
      const queenCard = new Card(Rank.Queen, Suit.Diamonds);
      const twoCard = new Card(Rank.Two, Suit.Hearts);
      const fiveCard = new Card(Rank.Five, Suit.Hearts);
      const fourCard = new Card(Rank.Four, Suit.Hearts);

      expect(service.is21([queenCard, twoCard, fiveCard, fourCard])).toBeTruthy();
    });


    it('should return true for multiple number cards with the sum of 21', () => {
      const threeCard = new Card(Rank.Three, Suit.Diamonds);
      const fourCard = new Card(Rank.Four, Suit.Hearts);
      const twoCard = new Card(Rank.Two, Suit.Hearts);
      const sixCard = new Card(Rank.Six, Suit.Hearts);
      const six2Card = new Card(Rank.Six, Suit.Hearts);

      expect(service.is21([threeCard, fourCard, twoCard, sixCard, six2Card])).toBeTruthy();
    });


    it('should return false cards with a sum different from 21', () => {
      const threeCard = new Card(Rank.Three, Suit.Diamonds);
      const fourCard = new Card(Rank.Four, Suit.Hearts);
      const twoCard = new Card(Rank.Two, Suit.Hearts);
      const sixCard = new Card(Rank.Six, Suit.Hearts);

      expect(service.is21([threeCard, fourCard, twoCard, sixCard])).toBeFalsy();
    });
  });

  describe('#isOver21', () => {
    it('should return true for more than 21', () => {
      const queenCard = new Card(Rank.Queen, Suit.Diamonds);
      const kingCard = new Card(Rank.King, Suit.Hearts);
      const jackCard = new Card(Rank.Jack, Suit.Hearts);

      expect(service.isOver21([queenCard, kingCard, jackCard])).toBeTruthy();
    });

    it('should return true for more than 21', () => {
      const queenCard = new Card(Rank.Queen, Suit.Diamonds);
      const kingCard = new Card(Rank.King, Suit.Hearts);
      const fiveCard = new Card(Rank.Five, Suit.Hearts);

      expect(service.isOver21([queenCard, kingCard, fiveCard])).toBeTruthy();
    });

    it('should return true for 2 queens and 2 aces - 22', () => {
      const aceCard = new Card(Rank.Ace, Suit.Diamonds);
      const ace2Card = new Card(Rank.Ace, Suit.Clubs);
      const queenCard = new Card(Rank.Queen, Suit.Hearts);
      const queen2Card = new Card(Rank.Queen, Suit.Spades);

      expect(service.isOver21([aceCard, ace2Card, queenCard, queen2Card])).toBeTruthy();
    });

    it('should return true for 2 queens and a two - 22', () => {
      const twoCard = new Card(Rank.Two, Suit.Diamonds);
      const queenCard = new Card(Rank.Queen, Suit.Hearts);
      const queen2Card = new Card(Rank.Queen, Suit.Spades);

      expect(service.isOver21([twoCard, queenCard, queen2Card])).toBeTruthy();
    });

    it('should return false for two aces - since one can be at the value of 1', () => {
      const aceCard = new Card(Rank.Ace, Suit.Diamonds);
      const ace2Card = new Card(Rank.Ace, Suit.Clubs);

      expect(service.isOver21([aceCard, ace2Card])).toBeFalsy();
    });

    it('should return false for four aces - since three can be at the value of 1', () => {
      const aceCard = new Card(Rank.Ace, Suit.Diamonds);
      const ace2Card = new Card(Rank.Ace, Suit.Clubs);
      const ace3Card = new Card(Rank.Ace, Suit.Hearts);
      const ace4Card = new Card(Rank.Ace, Suit.Spades);

      expect(service.isOver21([aceCard, ace2Card, ace3Card, ace4Card])).toBeFalsy();
    });

    it('should return false for less than 21', () => {
      const threeCard = new Card(Rank.Three, Suit.Diamonds);
      const fourCard = new Card(Rank.Four, Suit.Hearts);

      expect(service.isOver21([threeCard, fourCard])).toBeFalsy();
    });
  });

  describe(`#compareHands`, () => {
    describe('Tie', () => {
      it('should return tie for two black jacks', () => {
        const bjHand = [
          new Card(Rank.Queen, Suit.Spades),
          new Card(Rank.Ace, Suit.Clubs)
        ];
        const bjHand2 = [
          new Card(Rank.Jack, Suit.Spades),
          new Card(Rank.Ace, Suit.Spades)
        ];

        expect(service.compareHands(bjHand, bjHand2)).toEqual(HandsComparisonValues.Tie);
      });

      it('should return tie for two 21s', () => {
        const toHand = [
          new Card(Rank.Queen, Suit.Spades),
          new Card(Rank.Seven, Suit.Clubs),
          new Card(Rank.Four, Suit.Clubs)
        ];

        const toHand2 = [
          new Card(Rank.Ten, Suit.Spades),
          new Card(Rank.Five, Suit.Spades),
          new Card(Rank.Six, Suit.Spades)
        ];

        expect(service.compareHands(toHand, toHand2)).toEqual(HandsComparisonValues.Tie);
      });

      it('should return tie for the same hand', () => {
        const oneCardHand = [
          new Card(Rank.Four, Suit.Clubs)
        ];

        const oneAceHand = [
          new Card(Rank.Ace, Suit.Clubs)
        ];

        const twoCardsHand = [
          new Card(Rank.Ten, Suit.Spades),
          new Card(Rank.Five, Suit.Spades)
        ];

        expect(service.compareHands(oneCardHand, oneCardHand)).toEqual(HandsComparisonValues.Tie);
        expect(service.compareHands(oneAceHand, oneAceHand)).toEqual(HandsComparisonValues.Tie);
        expect(service.compareHands(twoCardsHand, twoCardsHand)).toEqual(HandsComparisonValues.Tie);
      });

      it('should return tie for two 21 when one of them is a black jack', () => {
        const bjHand = [
          new Card(Rank.Jack, Suit.Spades),
          new Card(Rank.Ace, Suit.Spades)
        ];

        const toHand = [
          new Card(Rank.Queen, Suit.Spades),
          new Card(Rank.Seven, Suit.Clubs),
          new Card(Rank.Four, Suit.Clubs)
        ];

        expect(service.compareHands(toHand, bjHand)).toEqual(HandsComparisonValues.Tie);
      });

      it('should return tie for two 5s (1 card vs 2 cards)', () => {
        const oneCardHand = [new Card(Rank.Five, Suit.Clubs)];
        const twoCardsHand = [new Card(Rank.Two, Suit.Clubs), new Card(Rank.Three, Suit.Diamonds)];

        expect(service.compareHands(oneCardHand, twoCardsHand)).toEqual(HandsComparisonValues.Tie);
      });

      it('should return tie for two 17s (one contains ace)', () => {
        const firstHand = [
          new Card(Rank.Five, Suit.Clubs),
          new Card(Rank.King, Suit.Diamonds),
          new Card(Rank.Two, Suit.Hearts)
        ];

        const secondHand = [
          new Card(Rank.Ace, Suit.Clubs),
          new Card(Rank.Six, Suit.Diamonds)
        ];

        expect(service.compareHands(firstHand, secondHand)).toEqual(HandsComparisonValues.Tie);
      });

      it('should return tie when both hands are over 21', () => {
        const hand22 = [
          new Card(Rank.Jack, Suit.Clubs),
          new Card(Rank.Ten, Suit.Diamonds),
          new Card(Rank.Two, Suit.Diamonds)
        ];

        const hand23 = [
          new Card(Rank.King, Suit.Diamonds),
          new Card(Rank.Seven, Suit.Hearts),
          new Card(Rank.Six, Suit.Hearts)
        ];

        expect(service.compareHands(hand22, hand23)).toEqual(HandsComparisonValues.Tie);
      });
    });

    describe('Dealer/Player Wins', () => {
      it('should return correct winner for blackjack vs 20', () => {
        const bjHand = [
          new Card(Rank.King, Suit.Diamonds),
          new Card(Rank.Ace, Suit.Hearts)
        ];

        const hand20 = [
          new Card(Rank.Jack, Suit.Clubs),
          new Card(Rank.Ten, Suit.Diamonds)
        ];

        expect(service.compareHands(bjHand, hand20)).toEqual(HandsComparisonValues.Dealer);
        expect(service.compareHands(hand20, bjHand)).toEqual(HandsComparisonValues.Player);
      });

      it('should return correct winner for blackjack vs 22', () => {
        const bjHand = [
          new Card(Rank.King, Suit.Diamonds),
          new Card(Rank.Ace, Suit.Hearts)
        ];

        const hand22 = [
          new Card(Rank.Jack, Suit.Clubs),
          new Card(Rank.Ten, Suit.Diamonds),
          new Card(Rank.Two, Suit.Diamonds)
        ];

        expect(service.compareHands(bjHand, hand22)).toEqual(HandsComparisonValues.Dealer);
        expect(service.compareHands(hand22, bjHand)).toEqual(HandsComparisonValues.Player);
      });

      it('should return correct winner for 21 vs 20', () => {
        const hand21 = [
          new Card(Rank.King, Suit.Diamonds),
          new Card(Rank.Seven, Suit.Hearts),
          new Card(Rank.Four, Suit.Hearts)
        ];

        const hand20 = [
          new Card(Rank.Jack, Suit.Clubs),
          new Card(Rank.Ten, Suit.Diamonds)
        ];

        expect(service.compareHands(hand21, hand20)).toEqual(HandsComparisonValues.Dealer);
        expect(service.compareHands(hand20, hand21)).toEqual(HandsComparisonValues.Player);
      });

      it('should return correct winner for 21 vs 22', () => {
        const hand21 = [
          new Card(Rank.King, Suit.Diamonds),
          new Card(Rank.Seven, Suit.Hearts),
          new Card(Rank.Four, Suit.Hearts)
        ];

        const hand22 = [
          new Card(Rank.Jack, Suit.Clubs),
          new Card(Rank.Ten, Suit.Diamonds),
          new Card(Rank.Two, Suit.Diamonds)
        ];

        expect(service.compareHands(hand21, hand22)).toEqual(HandsComparisonValues.Dealer);
        expect(service.compareHands(hand22, hand21)).toEqual(HandsComparisonValues.Player);
      });

      it('should return correct winner for 17 vs 22', () => {
        const hand17 = [
          new Card(Rank.King, Suit.Diamonds),
          new Card(Rank.Four, Suit.Hearts)
        ];

        const hand22 = [
          new Card(Rank.Jack, Suit.Clubs),
          new Card(Rank.Ten, Suit.Diamonds),
          new Card(Rank.Two, Suit.Diamonds)
        ];

        expect(service.compareHands(hand17, hand22)).toEqual(HandsComparisonValues.Dealer);
        expect(service.compareHands(hand22, hand17)).toEqual(HandsComparisonValues.Player);
      });

      it('should return correct winner for 17 vs 19', () => {
        const hand17 = [
          new Card(Rank.King, Suit.Diamonds),
          new Card(Rank.Seven, Suit.Hearts)
        ];

        const hand19 = [
          new Card(Rank.Jack, Suit.Clubs),
          new Card(Rank.Nine, Suit.Diamonds)
        ];

        expect(service.compareHands(hand19, hand17)).toEqual(HandsComparisonValues.Dealer);
        expect(service.compareHands(hand17, hand19)).toEqual(HandsComparisonValues.Player);
      });

      it('should return correct winner for 12 vs 17', () => {
        const hand17 = [
          new Card(Rank.King, Suit.Diamonds),
          new Card(Rank.Seven, Suit.Hearts)
        ];

        const hand12 = [
          new Card(Rank.Jack, Suit.Clubs),
          new Card(Rank.Two, Suit.Diamonds)
        ];

        expect(service.compareHands(hand17, hand12)).toEqual(HandsComparisonValues.Dealer);
        expect(service.compareHands(hand12, hand17)).toEqual(HandsComparisonValues.Player);
      });

      it('should return correct winner for 17 vs 23', () => {
        const hand17 = [
          new Card(Rank.King, Suit.Diamonds),
          new Card(Rank.Seven, Suit.Hearts)
        ];

        const hand23 = [
          new Card(Rank.Jack, Suit.Clubs),
          new Card(Rank.Ten, Suit.Diamonds),
          new Card(Rank.Three, Suit.Diamonds)
        ];

        expect(service.compareHands(hand17, hand23)).toEqual(HandsComparisonValues.Dealer);
        expect(service.compareHands(hand23, hand17)).toEqual(HandsComparisonValues.Player);
      });
    });
  });
});
