import {Injectable} from '@angular/core';
import {NotificationsProviderService} from '../notificationsProvider/notifications-provider.service';
import {Player} from '../../models/player.model';
import {Deck} from '../../models/deck.model';
import {DeckProviderService} from '../deck/deck-provider.service';
import {CardsDealerService} from './cards-dealer.service';
import {GameStatusProviderService} from './game-status-provider.service';
import {GameStatus} from '../../models/game-status.enum';

@Injectable({
  providedIn: 'root'
})
export class GameStarterService {

  players: Player[];
  dealer: Player;
  deck: Deck;

  constructor(
    private notificationsProvider: NotificationsProviderService,
    private deckProvider: DeckProviderService,
    private cardsDealer: CardsDealerService,
    private gameStatusProvider: GameStatusProviderService) {

    this.gameStatusProvider.setStatus(GameStatus.Initializing);
  }

  startGame(dealer: Player, players: Player[]) {
    this.players = players;
    this.dealer = dealer;
    this.deck = this.deckProvider.getDeck();

    this.notifyGameStarted();
    this.cardsDealer.dealCards(this.dealer, this.players, this.deck);

    this.gameStatusProvider.setStatus(GameStatus.Ready);
  }

  notifyGameStarted() {
    this.notificationsProvider.notifyInfo('Game has been started');

    this.players.forEach(player => {
      this.notificationsProvider.notifyInfo(`${player.name} is on the game`);
    });
  }
}
