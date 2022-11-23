import { IJugador } from '../../Interficies/Jugador/IJugador';
import { CartaSetIMig } from '../Carta/CartaSetIMig';

export class Jugador implements IJugador {
  nom: string;
  cartes: Array<CartaSetIMig> = new Array<CartaSetIMig>();

  constructor(nom: string) {
    this.nom = nom;
  }

  agafar(carta: CartaSetIMig): void {
    this.cartes.push(carta);
  }

  contar(): number {
    let total = 0;
    this.cartes.forEach(
      (carta) => { total += carta.valor; }
    );
    return total;
  }
}
