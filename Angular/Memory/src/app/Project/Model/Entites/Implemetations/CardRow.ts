import { ICardRow } from '../Interficies/ICardRow';
import { Card } from './Card';

export class CardRow implements ICardRow {
  cardsNum: number;
  cards: Array<Card> = new Array<Card>();
  fliped: boolean;
  flipedCard: Card;

  constructor(cardNum: number) {
    this.fliped = true;
    this.flipedCard = new Card(-1);
    this.cardsNum = cardNum;

    for (let index = 0; index < cardNum; index++) {
      this.cards[index] = new Card(index + 1);
    }
  }
}
