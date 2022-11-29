export interface ICard {
  num: number;
  visibility: boolean;
  resolved: boolean;
  flip(): void;
}
