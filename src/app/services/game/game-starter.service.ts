import {Injectable} from '@angular/core';
import {NotificationsProviderService} from '../notificationsProvider/notifications-provider.service';
import {Player} from '../../models/player.model';
import {Deck} from '../../models/deck.model';
import {DeckProviderService} from '../deck/deck-provider.service';
import {CardsDealerService} from './cardsDealer/cards-dealer.service';
import {GameStatusProviderService} from './game-status-provider.service';
import {GameStatus} from '../../models/game-status.enum';
import {Dealer} from '../../models/dealer.model';

@Injectable({
  providedIn: 'root'
})
export class GameStarterService {

  players: Player[];
  dealer: Dealer;
  deck: Deck;

  constructor(
    private notificationsProvider: NotificationsProviderService,
    private deckProvider: DeckProviderService,
    private cardsDealer: CardsDealerService,
    private gameStatusProvider: GameStatusProviderService) {

    this.gameStatusProvider.setStatus(GameStatus.Initializing);
  }

  startGame(dealer: Dealer, players: Player[]) {
    this.players = players;
    this.dealer = dealer;
    this.deck = this.deckProvider.getDeck();

    this.emptyPlayersCards();
    this.notifyGameStarted();
    this.cardsDealer.dealCards(this.dealer, this.players, this.deck);

    this.gameStatusProvider.setStatus(GameStatus['On Going']);
  }

  emptyPlayersCards() {
    this.dealer.cards = [];
    this.players.forEach(player => player.cards = []);
  }

  // TODO: should be in another file
  dealCardToPlayer(player: Player) {
    this.cardsDealer.dealCard(player, this.deck);
  }

  notifyGameStarted() {
    this.players.forEach(player => {
      this.notificationsProvider.notifyInfo(`${player.name} is on the game`);
    });
  }
}
