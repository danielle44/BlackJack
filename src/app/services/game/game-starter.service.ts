import { Injectable } from '@angular/core';
import {NotificationsProviderService} from '../notificationsProvider/notifications-provider.service';
import {Player} from '../../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class GameStarterService {

  constructor(private notificationsProvider: NotificationsProviderService) { }

  startGame(players: Player[]) {
    this.notificationsProvider.notifyInfo('Game has been started');

    const regularPlayers = players.filter(player => !player.isDealer);
    regularPlayers.forEach(player => {
      this.notificationsProvider.notifyInfo(`${player.name} is on the game`);
    });
  }
}
