import { CartaSetIMig } from '../../Implementacions/Carta/CartaSetIMig';
import { ICartaSetIMig } from '../Carta/ICartaSetIMig';
import { IBaralla } from './IBaralla';


export interface IBarallaSetIMig extends IBaralla<ICartaSetIMig> {
  inicialitzarValor(): void;
  eliminar(carta: CartaSetIMig): void;
}



