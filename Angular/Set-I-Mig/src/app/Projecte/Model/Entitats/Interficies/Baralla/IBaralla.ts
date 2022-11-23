import { ICarta } from '../Carta/ICarta';


export interface IBaralla<T extends ICarta> {
    cartes: Array<T>;
    barrejar(): void;
}



