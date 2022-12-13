import { Component, OnInit } from '@angular/core';
import { Incidencia } from '../../../Entitats/Implementacions/Incidencia';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.scss']
})
export class IncidenciaComponent implements OnInit {
  incidencia: Incidencia = new Incidencia();

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(`${this.incidencia.codi} - ${this.incidencia.titol}`);
  }
}
