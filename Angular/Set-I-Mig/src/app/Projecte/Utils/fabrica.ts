import { CartaSetIMig } from '../Model/Entitats/Implementacions/Carta/CartaSetIMig';

export class Fabrica {
  static generar(num: number, pal: string, imatge: string): CartaSetIMig {
    return new CartaSetIMig(num, pal, imatge);
  }
}
