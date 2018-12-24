import { TopUpdatesPipe } from './top-updates.pipe';
import {Update} from '../models/notification.model';

describe('TopUpdatesPipe', () => {
  let pipe;
  let updates: Update[];

  beforeEach(() => {
    pipe = new TopUpdatesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the same array for an empty array', () => {
    updates = [];
    expect(pipe.transform(updates)).toEqual([]);
  });

  it('should return the same array for a single item array', () => {
    updates = [generateUpdate(1)];
    expect(pipe.transform(updates)).toEqual(updates);
  });

  it('should reverse a short array', () => {
    updates = [generateUpdate(1), generateUpdate(2), generateUpdate(3)];
    const expectedResult = [generateUpdate(3), generateUpdate(2), generateUpdate(1)];
    expect(pipe.transform(updates)).toEqual(expectedResult);
  });

  it('should reverse and take top 10 of a long array', () => {
    updates = [
      generateUpdate(1),
      generateUpdate(2),
      generateUpdate(3),
      generateUpdate(4),
      generateUpdate(5),
      generateUpdate(6),
      generateUpdate(7),
      generateUpdate(8),
      generateUpdate(9),
      generateUpdate(10),
      generateUpdate(11),
      generateUpdate(12)
    ];

    const expectedResult = [
      generateUpdate(12),
      generateUpdate(11),
      generateUpdate(10),
      generateUpdate(9),
      generateUpdate(8),
      generateUpdate(7),
      generateUpdate(6),
      generateUpdate(5),
      generateUpdate(4),
      generateUpdate(3)
    ];

    expect(pipe.transform(updates)).toEqual(expectedResult);
  });

  function generateUpdate(index): Update {
    return {
      text: `update number ${index}`,
      time: index
    };
  }
});
