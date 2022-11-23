import { CartaSetIMig } from '../../Implementacions/Carta/CartaSetIMig';

export interface IJugador {
  nom: string;
  cartes: Array<CartaSetIMig>;

  agafar(carta: CartaSetIMig): void;
  contar(): number;
}
