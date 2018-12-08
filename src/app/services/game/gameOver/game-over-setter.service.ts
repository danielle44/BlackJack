import { Injectable } from '@angular/core';
import {GameStatus} from '../../../models/game-status.enum';
import {GameStatusProviderService} from '../game-status-provider.service';
import {NotificationsProviderService} from '../../notificationsProvider/notifications-provider.service';
import {GameResult} from '../../../models/game-result';

@Injectable({
  providedIn: 'root'
})
export class GameOverSetterService {

  constructor(private gameStatusProvider: GameStatusProviderService,
              private notifier: NotificationsProviderService) { }

  set(gameResult: GameResult): void {
    this.gameStatusProvider.setStatus(GameStatus.Over);
    this.notifier.notifyInfo(`The winner is: ${gameResult.winner.name}`);

    if (gameResult.isTie) {
      this.notifier.notifyInfo(`It's a tie of ${gameResult.winnerScore}!`);
      return;
    }

    if (gameResult.isBlackJack) {
      this.notifier.notifyInfo('with BlackJack!');
      return;
    }

    if (gameResult.looserScore > 21) {
      this.notifier.notifyInfo(`${gameResult.looser.name} have more than 21 (${gameResult.looserScore})`);
      return;
    }

    this.notifier.notifyInfo(`${gameResult.winnerScore} vs ${gameResult.looserScore}`);
  }
}
