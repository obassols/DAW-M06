import { ICartaSetIMig } from '../../Interficies/Carta/ICartaSetIMig';
import { Carta } from './Carta';

export class CartaSetIMig extends Carta implements ICartaSetIMig {
  valor!: number;
  visible: boolean;

  constructor(num: number, pal: string, img: string) {
    super(num, pal, img);
    this.visible = false;
    this.calcValor(num);
  }

  public calcValor(num: number): void {
    if (num < 8) {
      this.valor = num;
    } else {
      this.valor = 0.5;
    }
  }

  public girar(): void {
    this.visible = !this.visible;
  }
}
