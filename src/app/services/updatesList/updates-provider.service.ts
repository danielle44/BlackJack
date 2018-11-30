import { Injectable } from '@angular/core';
import {Update, UpdateType} from '../../models/update.model';

@Injectable({
  providedIn: 'root'
})
export class UpdatesProviderService {

  updates: Update[];

  constructor() {
    this.updates = [];
  }

  addInfo(text) {
    this.addUpdate({ text, type: UpdateType.Info });
  }

  addError(text) {
    this.addUpdate({ text, type: UpdateType.Error });
  }

  addUpdate({ text, type }) {
    this.updates.push({ text, type });
  }

  getUpdates() {
    return this.updates;
  }
}
