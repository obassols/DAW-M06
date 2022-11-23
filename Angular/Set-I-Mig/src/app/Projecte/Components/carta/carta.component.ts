import { Component, Input, OnInit } from '@angular/core';
import { CartaSetIMig } from '../../Model/Entitats/Implementacions/Carta/CartaSetIMig';
import { BarallaService } from '../../Model/Serveis/Baralla/baralla.service';
import { JugadorService } from '../../Model/Serveis/Jugador/jugador.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() carta!: CartaSetIMig;

  constructor(private barallaService: BarallaService, private jugadorService: JugadorService) { }

  ngOnInit(): void {
  }

  agafar(carta: CartaSetIMig): void {
    if (this.jugadorService.getJugador().contar() <= 7.5) {
      carta.girar();
      this.jugadorService.getJugador().agafar(carta);
      this.barallaService.getBaralla().eliminar(carta);
    }
  }
}
