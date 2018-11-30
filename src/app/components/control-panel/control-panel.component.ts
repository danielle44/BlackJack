import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../../models/player.model';
import {GameStatusProviderService} from '../../services/game/game-status-provider.service';
import {GameStatus} from '../../models/game-status.enum';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  @Input() players: Player[];
  @Output() startGame: EventEmitter<any> = new EventEmitter();
  @Output() hit: EventEmitter<any> = new EventEmitter();
  @Output() stand: EventEmitter<any> = new EventEmitter();

  constructor(private gameStatusProvider: GameStatusProviderService) { }

  ngOnInit() {
  }

  onStand(player: Player) {
    this.stand.emit(player);
  }

  onHit(player: Player) {
    this.hit.emit(player);
  }

  onStartGame() {
    this.startGame.emit();
  }

  getEnabledButtons(): string[] {
    const status = this.gameStatusProvider.getStatus();

    const statusEnabledButtonsMap = {
      [GameStatus.Initializing]: [],
      [GameStatus.Ready]: ['startGame'],
      [GameStatus['On Going']]: ['hit', 'stand'],
      [GameStatus.Finished]: ['startGame'],
    };

    return statusEnabledButtonsMap[status];
  }

  shouldBeEnabled(buttonName: string): boolean {
    return this.getEnabledButtons().includes(buttonName);
  }
}
