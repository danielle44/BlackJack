import {Component, OnInit} from '@angular/core';
import {Player} from '../../models/player.model';
import {Dealer} from '../../models/dealer.model';
import {GameStarterService} from '../../services/game/game-starter.service';
import {GameStatusProviderService} from '../../services/game/game-status-provider.service';
import {GameStatus} from '../../models/game-status.enum';
import {GameOverDetectorService} from '../../services/game/gameOver/game-over-detector.service';
import {DealerMovesService} from '../../services/game/cardsDealer/dealer-moves.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  players: Player[];
  dealer: Dealer;

  constructor(private game: GameStarterService,
              private gameStatusProvider: GameStatusProviderService,
              private gameOverDetector: GameOverDetectorService,
              private dealerMoves: DealerMovesService
              ) {
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
    this.gameOverDetector.detectAndSetStatusIfGameOver(this.dealer, this.players[0]);
  }

  hit(player) {
    this.game.dealCardToPlayer(player);
    this.gameOverDetector.detectAndSetStatusIfGameOver(this.dealer, player);
  }

  stand(player) {
    this.dealerMoves.playDealerTurn(this.dealer, player);
  }

}
