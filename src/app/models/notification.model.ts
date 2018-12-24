export interface Update {
  text: string;
  time: number;
}

export interface Notification extends Update {
  type: NotificationType;
}

export enum NotificationType {
  'Info', 'Error', 'Finish'
}
