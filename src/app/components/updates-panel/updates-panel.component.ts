import { Component, OnInit } from '@angular/core';
import {Notification} from '../../models/notification.model';
import {NotificationsProviderService} from '../../services/notificationsProvider/notifications-provider.service';

@Component({
  selector: 'app-updates-panel',
  templateUrl: './updates-panel.component.html',
  styleUrls: ['./updates-panel.component.scss']
})
export class UpdatesPanelComponent implements OnInit {

  notifications: Notification[];

  constructor(private notificationsProvider: NotificationsProviderService) {
    this.notifications = notificationsProvider.getNotifications();
  }

  getTime() {
    return Date.now();
  }

  ngOnInit() {
  }

}
