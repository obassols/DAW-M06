import { PAL } from 'src/app/Projecte/Utils/pals';
import { Utils } from 'src/app/Projecte/Utils/Utils';
import { IBarallaSetIMig } from '../../Interficies/Baralla/IBarallaSetIMig';
import { CartaSetIMig } from '../Carta/CartaSetIMig';


export class BarallaSetIMig implements IBarallaSetIMig {
  cartes: Array<CartaSetIMig> = new Array<CartaSetIMig>();

  constructor() {
    this.generar();
    this.eliminar8i9();
    this.inicialitzarValor();
    this.barrejar();
  }

  generar(): void {
    for (const pal of PAL) {
      for (let i = 1; i < 13; i++) {
        this.cartes.push(new CartaSetIMig(i, pal.pal, pal.imatge));
      }
    }
  }

  private eliminar8i9(): void {
    this.cartes = this.cartes.filter(carta => carta.num !== 8 && carta.num !== 9);
  }

  public inicialitzarValor(): void {
    for (const carta of this.cartes) {
      carta.calcValor(carta.num);
    }
  }

  eliminar(carta: CartaSetIMig): void {
    this.cartes = this.cartes.filter(c => c !== carta);
    console.log(this.cartes);
  }

  barrejar(): void {
    for (let index = 0; index < this.cartes.length; index++) { this.canviar(index); }
  }

  private canviar(index: number): void {
    const index2 = Utils.getRandom(this.cartes.length);
    this.intercanviar(index, index2);
  }

  private intercanviar(index: number, index2: number): void {
    const aux = this.cartes[index];
    this.cartes[index] = this.cartes[index2];
    this.cartes[index2] = aux;
  }

}
