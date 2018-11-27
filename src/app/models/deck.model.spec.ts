import {Deck} from './deck.model';
import {Card} from './card.model';
import {Rank} from './rank.enum';
import {Suit} from './suit.enum';

describe('Deck', () => {

  const firstCard = new Card(Rank.Queen, Suit.Clubs);
  const secondCard = new Card(Rank.Five, Suit.Hearts);
  const thirdCard = new Card(Rank.Six, Suit.Spades);

  let deck: Deck;

  describe(`#getCard`, () => {

    it('should return and remove the first card of the deck', () => {
      deck = new Deck([firstCard, secondCard, thirdCard]);

      expect(deck.getCard()).toEqual(firstCard);
      expect(deck.getCard()).toEqual(secondCard);
      expect(deck.getCard()).toEqual(thirdCard);
      expect(() => { deck.getCard(); }).toThrow(new Error('Deck is empty'));
    });

  });

  describe('#getSize', () => {

    it('should return correct size for an empty deck', () => {
      deck = new Deck([]);
      expect(deck.getSize()).toEqual(0);
    });

    it('should return correct size for a deck with a single card', () => {
      deck = new Deck([firstCard]);
      expect(deck.getSize()).toEqual(1);
    });

    it('should return correct size for a deck with multiple cards', () => {
      deck = new Deck([firstCard, secondCard, thirdCard]);
      expect(deck.getSize()).toEqual(3);
    });
  });
});
