import { Component, OnInit } from '@angular/core';
import {Player} from '../../models/player.model';
import {Dealer} from '../../models/dealer.model';
import {GameStarterService} from '../../services/game/game-starter.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  players: Player[];

  constructor(private game: GameStarterService) {
    this.players = [
      new Dealer(),
      new Player('Player1')
    ];
  }

  ngOnInit() {
    this.game.startGame(this.players);
  }

}
