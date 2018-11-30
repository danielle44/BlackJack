import {Injectable} from '@angular/core';
import {GameStatus} from '../../models/game-status.enum';
import {NotificationsProviderService} from '../notificationsProvider/notifications-provider.service';

@Injectable({
  providedIn: 'root'
})
export class GameStatusProviderService {

  status: GameStatus;

  constructor(private notificationsProvider: NotificationsProviderService) {
    this.status = GameStatus.Initializing;
  }

  setStatus(newStatus: GameStatus) {
    this.status = newStatus;
    const statusStr = GameStatus[newStatus].toString().toLowerCase();
    this.notificationsProvider.notifyInfo(`Game is ${statusStr}...`);
  }

  getStatus(): GameStatus {
    return this.status;
  }
}
