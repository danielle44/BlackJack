import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  @Input() players: Player[];
  @Input() dealer: Player;

  constructor() { }

  ngOnInit() {
  }

}
