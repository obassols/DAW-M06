import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Card } from '../../Model/Entites/Implemetations/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
  route: string;
  constructor(@Inject(APP_BASE_HREF) private baseHref: string) {
    this.route = baseHref;
  }

  ngOnInit(): void {
  }

}
