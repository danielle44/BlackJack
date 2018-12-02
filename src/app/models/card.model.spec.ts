import {Card} from './card.model';
import {Rank} from './rank.enum';
import {Suit} from './suit.enum';

describe('Card Class', () => {

  describe('#isAce', () => {

    it('should return true for Ace', () => {
      const aceCard = new Card(Rank.Ace, Suit.Diamonds);
      expect(aceCard.isAce()).toBeTruthy();
    });

    it('should return false for Jack', () => {
      const jackCard = new Card(Rank.Jack, Suit.Diamonds);
      expect(jackCard.isAce()).toBeFalsy();
    });
    it('should return false for Number cards', () => {
      const fiveCard = new Card(Rank.Five, Suit.Diamonds);
      expect(fiveCard.isAce()).toBeFalsy();
    });
  });
});
