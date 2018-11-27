import { TestBed } from '@angular/core/testing';

import { EnumToArrayConverterService } from './enum-to-array-converter.service';
import {Rank} from '../../models/rank.enum';
import {Suit} from '../../models/suit.enum';

describe('EnumToArrayService', () => {
  let service: EnumToArrayConverterService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(EnumToArrayConverterService);
  });

  it('should return correct array for Rank', () => {
    const expectedResult = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    const ranksArray = service.convert(Rank);

    expect(ranksArray.length).toEqual(13);
    expect(ranksArray).toEqual(expectedResult);
  });


  it('should return correct array for Suit', () => {
    const expectedResult = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
    const suitsArray = service.convert(Suit);

    expect(suitsArray.length).toEqual(4);
    expect(suitsArray).toEqual(expectedResult);
  });
});
