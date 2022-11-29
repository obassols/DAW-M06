import { Utils } from 'src/app/Project/Utils/Utils';
import { IBoard } from '../Interficies/IBoard';
import { Card } from './Card';
import { CardRow } from './CardRow';

export class Board implements IBoard {
  rowsNum: number;
  cardsNum: number;
  rows: Array<CardRow> = new Array<CardRow>();
  searching: boolean;

  constructor(rowNum: number, cardsNum: number) {
    this.rowsNum = rowNum;
    this.cardsNum = cardsNum;
    this.searching = false;

    for (let index = 0; index < this.rowsNum; index++) {
      this.rows[index] = new CardRow(cardsNum);
    }
    this.shuffle();
  }

  shuffle(): void {
    this.rows.forEach(row => {
      for (let index = 0; index < row.cards.length; index++) { this.change(row.cards, index); }
    });
  }

  private change(arr: Array<Card>, index: number): void {
    const index2 = Utils.getRandom(arr.length - 1);
    this.interchange(arr, index, index2);
  }

  private interchange(arr: Array<Card>, index: number, index2: number): void {
    const aux = arr[index];
    arr[index] = arr[index2];
    arr[index2] = aux;
  }

  resolveRows(): void {
    this.rows.forEach(row => {
      row.flipedCard.resolved = true;
      row.flipedCard = new Card(-1);
      row.fliped = false;
    });
  }

  clearRows(): void {
    this.rows.forEach(row => {
        row.flipedCard.flip();
        row.flipedCard = new Card(-1);
        row.fliped = false;
    });
  }
}
