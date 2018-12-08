import {Component, OnInit} from '@angular/core';
import {Player} from '../../models/player.model';
import {Dealer} from '../../models/dealer.model';
import {GameStarterService} from '../../services/game/game-starter.service';
import {GameStatusProviderService} from '../../services/game/game-status-provider.service';
import {GameStatus} from '../../models/game-status.enum';
import {GameOverDetectorService} from '../../services/game/gameOver/game-over-detector.service';

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
              private gameOverDetector: GameOverDetectorService
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
    console.log('hit ', player);
    console.log('status: ' + this.gameStatusProvider.getStatus());
  }

  stand(player) {
    console.log('stand ', player);
    console.log('status: ' + this.gameStatusProvider.getStatus());
  }

}

// if player has 21 - he won
// otherwise:

// player plays:
// if 'stay' -> dealer player
// if 'hit' -> take card, calc (if over 21 - lost) - and again hit or stay. (can hit until 5 cards)

// dealer plays:
// open closed card. if 21 - dealer won
// otherwise: if less than 17 - takes card, until gets at least 17 (maximum 5 cards)
// if got 17 or more - calc best score and compare to player's best score. if tie - no one wins
