import { ICarta } from '../../Interficies/Carta/ICarta';

export class Carta implements ICarta {
  num: number;
  pal: string;
  img: string;

  constructor(num: number, pal: string, img: string) {
    this.num = num;
    this.pal = pal;
    this.img = img;
  }
}
