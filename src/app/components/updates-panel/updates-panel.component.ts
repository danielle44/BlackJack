import { Component, OnInit } from '@angular/core';
import {Update} from '../../models/update.model';
import {UpdatesProviderService} from '../../services/updatesList/updates-provider.service';

@Component({
  selector: 'app-updates-panel',
  templateUrl: './updates-panel.component.html',
  styleUrls: ['./updates-panel.component.scss']
})
export class UpdatesPanelComponent implements OnInit {

  updates: Update[];

  constructor(private updatesProvider: UpdatesProviderService) {
    this.updates = updatesProvider.getUpdates();
  }

  getTime() {
    return Date.now();
  }

  ngOnInit() {
  }

}
