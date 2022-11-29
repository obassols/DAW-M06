import { Card } from '../Implemetations/Card';

export interface ICardRow {
  cardsNum: number;
  cards: Array<Card>;
  fliped: boolean;
  flipedCard: Card;
}
