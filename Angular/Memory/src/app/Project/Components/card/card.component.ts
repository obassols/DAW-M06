import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../Model/Entites/Implemetations/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
  constructor() { }

  ngOnInit(): void {
  }

}
