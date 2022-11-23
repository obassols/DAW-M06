import { ICarta } from './ICarta';

export interface ICartaSetIMig extends ICarta {
  valor: number;
  calcValor(num: number): void;
  girar(): void;
}
