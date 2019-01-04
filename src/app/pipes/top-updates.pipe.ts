import { Pipe, PipeTransform } from '@angular/core';
import {Update} from '../models/notification.model';

@Pipe({
  name: 'topUpdates',
  pure: false
})
export class TopUpdatesPipe implements PipeTransform {

  ITEMS_COUNT = 20;

  constructor() {}

  transform(updates: Update[] = []): Update[] {
    return [...updates]
      .reverse()
      .slice(0, this.ITEMS_COUNT);
  }
}


