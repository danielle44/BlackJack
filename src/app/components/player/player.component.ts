import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../models/player.model';
import {HandCalcService} from '../../services/game/hand-calc.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;

  constructor(private handCalc: HandCalcService) {}

  ngOnInit() {}

  getScore() {
    return this.handCalc.calcHandScore(this.player.cards);
  }
}
