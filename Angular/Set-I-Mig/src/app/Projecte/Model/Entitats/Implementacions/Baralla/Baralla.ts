import { PAL } from 'src/app/Projecte/Utils/pals';
import { Utils } from 'src/app/Projecte/Utils/Utils';
import { IBaralla } from '../../Interficies/Baralla/IBaralla';
import { ICarta } from '../../Interficies/Carta/ICarta';
import { Carta } from '../Carta/Carta';

export class Baralla implements IBaralla<ICarta> {
  cartes: Array<ICarta> = new Array<ICarta>();

  constructor() {
    PAL.forEach(pal => {
      for (let i = 1; i < 13; i++) {
        const carta = new Carta(i, pal.pal, pal.imatge);
        this.cartes.push(carta);
      }
    });
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
