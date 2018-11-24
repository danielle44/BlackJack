import {Player} from './player.model';
import {consts} from '../consts';

export class Dealer extends Player {
  constructor() {
    super(consts.player.names.dealer, true);
  }
}
