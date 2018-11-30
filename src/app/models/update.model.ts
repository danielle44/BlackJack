export interface Update {
  type: UpdateType;
  text: string;
}

export enum UpdateType {
  'Info', 'Error', 'Finish'
}
