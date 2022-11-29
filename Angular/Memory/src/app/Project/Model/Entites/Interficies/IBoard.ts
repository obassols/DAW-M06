import { CardRow } from '../Implemetations/CardRow';

export interface IBoard {
  cardsNum: number;
  rowsNum: number;
  rows: Array<CardRow>;
  searching: boolean;
  shuffle(): void;
  clearRows(): void;
  resolveRows(): void;
}
