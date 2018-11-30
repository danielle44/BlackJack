export interface Notification {
  type: NotificationType;
  text: string;
}

export enum NotificationType {
  'Info', 'Error', 'Finish'
}
