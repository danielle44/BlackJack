import { Injectable } from '@angular/core';
import {NotificationType, Notification} from '../../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsProviderService {

  notifications: Notification[];

  constructor() {
    this.notifications = [];
  }

  notifyInfo(text) {
    this.notify({ text, type: NotificationType.Info });
  }

  notifyError(text) {
    this.notify({ text, type: NotificationType.Error });
  }

  notify({ text, type }) {
    this.notifications.push({ text, type, time: Date.now() });
  }

  getNotifications() {
    return this.notifications;
  }
}
