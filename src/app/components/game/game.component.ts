import {Component, OnInit} from '@angular/core';
import {Player} from '../../models/player.model';
import {Dealer} from '../../models/dealer.model';
import {GameStarterService} from '../../services/game/game-starter.service';
import {GameStatusProviderService} from '../../services/game/game-status-provider.service';
import {GameStatus} from '../../models/game-status.enum';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  players: Player[];
  dealer: Player;

  constructor(private game: GameStarterService, private gameStatusProvider: GameStatusProviderService) {
    this.players = [
      new Player('Player1')
    ];

    this.dealer = new Dealer();
  }

  ngOnInit() {
    this.gameStatusProvider.setStatus(GameStatus.Ready);
  }

  startGame() {
    this.game.startGame(this.dealer, this.players);
  }

}
