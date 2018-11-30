export interface Notification {
  type: NotificationType;
  text: string;
  time: number;
}

export enum NotificationType {
  'Info', 'Error', 'Finish'
}
