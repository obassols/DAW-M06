import { Component, OnInit } from '@angular/core';
import { BarallaSetIMig } from '../../Model/Entitats/Implementacions/Baralla/BarallaSetIMig';
import { BarallaService } from '../../Model/Serveis/Baralla/baralla.service';

@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})
export class BarallaComponent implements OnInit {

  constructor(private barallaService: BarallaService) { }

  ngOnInit(): void {
  }

  public getBaralla(): BarallaSetIMig {
    return this.barallaService.getBaralla();
  }

}
