import { Injectable } from '@angular/core';
import {UpdatesProviderService} from '../updatesList/updates-provider.service';

@Injectable({
  providedIn: 'root'
})
export class GameStarterService {

  constructor(private updatesProvider: UpdatesProviderService) { }

  startGame(players) {
    console.log('game has been started');
    this.updatesProvider.addInfo('Game has been started');
  }
}
