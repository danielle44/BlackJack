import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  @Input() player: Player;
  @Output() startGame: EventEmitter<any> = new EventEmitter();
  @Output() hit: EventEmitter<any> = new EventEmitter();
  @Output() stand: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onStand() {
    this.stand.emit(this.player);
  }

  onHit() {
    this.hit.emit(this.player);
  }

  onStartGame() {
    this.startGame.emit(this.player);
  }
}
