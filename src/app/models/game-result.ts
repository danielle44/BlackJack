import {Player} from './player.model';

export interface GameResult {
  isTie: boolean;
  winner: Player;
  looser: Player;
  isBlackJack: boolean;
  winnerScore: number;
  looserScore: number;
}
