import { Injectable } from '@angular/core';
import { BarallaSetIMig } from '../../Entitats/Implementacions/Baralla/BarallaSetIMig';

@Injectable({
  providedIn: 'root'
})
export class BarallaService {
  baralla: BarallaSetIMig = new BarallaSetIMig();
  constructor() { }

  getBaralla(): BarallaSetIMig {
    return this.baralla;
  }
}
