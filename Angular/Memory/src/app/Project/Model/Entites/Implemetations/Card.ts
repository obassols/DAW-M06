import { ICard } from '../Interficies/ICard';

export class Card implements ICard {
  num: number;
  visibility: boolean;
  resolved: boolean;

  constructor(num: number) {
    this.num = num;
    this.visibility = true;
    this.resolved = false;
  }

  flip(): void {
    if (!this.resolved) {
      this.visibility = !this.visibility;
    }
  }
}
