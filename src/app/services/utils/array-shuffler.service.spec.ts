import { TestBed } from '@angular/core/testing';

import { ArrayShufflerService } from './array-shuffler.service';

describe('ArrayShufflerService', () => {
  let service: ArrayShufflerService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(ArrayShufflerService);
  });

  describe('#shuffle', () => {
    it('should shuffle the array', () => {
      const arr = [1, 2, 3, 4, 5, 6];
      const shuffledArr = service.shuffle(arr);

      expect(arr).not.toEqual(shuffledArr);
    });
  });
});
