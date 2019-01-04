import { TestBed } from '@angular/core/testing';

import { DealerMovesService } from './dealer-moves.service';
import {GameOverCheckerService} from '../gameOver/game-over-checker.service';
import {CardsDealerService} from './cards-dealer.service';
import {GameOverDetectorService} from '../gameOver/game-over-detector.service';
import {Dealer} from '../../../models/dealer.model';
import {Player} from '../../../models/player.model';

describe('DealerMovesService', () => {
  let gameOverCheckerMock: any;
  let cardsDealerMock: any;
  let gameOverDetectorMock: any;
  let service: DealerMovesService;

  const dealer = new Dealer();
  const player = new Player('Player');

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: CardsDealerService, useClass: CardsDealerServiceMock },
      { provide: GameOverDetectorService, useClass: GameOverDetectorServiceMock },
      { provide: GameOverCheckerService, useClass: GameOverCheckerServiceMock }
    ]
  }));

  class CardsDealerServiceMock {
    dealCard() {}
  }
  class GameOverDetectorServiceMock {
    detectAndSetStatusIfGameOver() {}
  }
  class GameOverCheckerServiceMock {
    isGameOver() {}
  }

  beforeEach(() => {
    cardsDealerMock = TestBed.get(CardsDealerService);
    gameOverDetectorMock = TestBed.get(GameOverDetectorService);
    gameOverCheckerMock = TestBed.get(GameOverCheckerService);

    spyOn(cardsDealerMock, 'dealCard');
    spyOn(gameOverDetectorMock, 'detectAndSetStatusIfGameOver');
    spyOn(gameOverCheckerMock, 'isGameOver');

    service = TestBed.get(DealerMovesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`#playDealerTurn`, () => {
    fit(`should deal a new card as long as game isn't over`, (done) => {
      let isGameOver = false;
      const maxTimesToRun = 20;
      let timesRan = 0;

      gameOverCheckerMock.isGameOver.and.callFake(_ => isGameOver);
      gameOverDetectorMock.detectAndSetStatusIfGameOver.and.callFake(() => {
        ++timesRan;
        isGameOver =  timesRan >= maxTimesToRun;
      });

      service.playDealerTurn(dealer, player).then(() => {
        expect(cardsDealerMock.dealCard).toHaveBeenCalledWith(dealer);
        expect(cardsDealerMock.dealCard.calls.count()).toEqual(maxTimesToRun);
        done();
      });
    });

    it(`should not call #dealCard and #detectAndSetStatusIfGameOver when game is over`, () => {

    });
  });
});
