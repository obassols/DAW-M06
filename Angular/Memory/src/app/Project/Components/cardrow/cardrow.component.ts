import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../Model/Entites/Implemetations/Card';
import { CardRow } from '../../Model/Entites/Implemetations/CardRow';

@Component({
  selector: 'app-cardrow',
  templateUrl: './cardrow.component.html',
  styleUrls: ['./cardrow.component.sass']
})
export class CardrowComponent implements OnInit {
  @Input() cardRow!: CardRow;

  constructor() { }

  ngOnInit(): void {
  }

  flip(card: Card): void {
    if (!this.cardRow.fliped && !card.resolved) {
      card.flip();
      this.cardRow.flipedCard = card;
      this.cardRow.fliped = true;
    }
  }
}
