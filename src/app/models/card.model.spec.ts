import {Card} from './card.model';
import {Rank} from './rank.enum';
import {Suit} from './suit.enum';

describe('Card Class', () => {

  describe('#getValues', () => {

    it('should return correct values for Ace', () => {
      const aceCard = new Card(Rank.Ace, Suit.Diamonds);
      expect(aceCard.getValues()).toEqual([1, 11]);
    });

    it('should return correct values for Jack', () => {
      const jackCard = new Card(Rank.Jack, Suit.Diamonds);
      expect(jackCard.getValues()).toEqual([10]);
    });

    it('should return correct values for Queen', () => {
      const queenCard = new Card(Rank.Queen, Suit.Diamonds);
      expect(queenCard.getValues()).toEqual([10]);
    });

    it('should return correct values for King', () => {
      const kingCard = new Card(Rank.King, Suit.Diamonds);
      expect(kingCard.getValues()).toEqual([10]);
    });

    it('should return correct values for Number cards', () => {
      const fiveCard = new Card(Rank.Five, Suit.Diamonds);
      expect(fiveCard.getValues()).toEqual([5]);
    });
  });
});
