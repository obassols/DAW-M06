import { Component, HostListener } from '@angular/core';
import { CartaSetIMig } from './Projecte/Model/Entitats/Implementacions/Carta/CartaSetIMig';
import { BarallaService } from './Projecte/Model/Serveis/Baralla/baralla.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Set-I-Mig';
  constructor(private barallaService: BarallaService) { }
  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event): void {
    this.generarBaralla();
  }

  generarBaralla(): void {
    this.barallaService.getBaralla().cartes = new Array<CartaSetIMig>();
  }
}
