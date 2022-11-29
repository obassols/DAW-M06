import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../../Model/Entites/Implemetations/Board';
import { Card } from '../../Model/Entites/Implemetations/Card';
import { CardRow } from '../../Model/Entites/Implemetations/CardRow';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {
  @Input() board!: Board;
  errors!: number;
  correctAnswers!: number;
  clearing!: boolean;


  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.errors = 0;
    this.correctAnswers = 0;
    this.clearing = false;
    this.board = new Board(4, 4);

    setTimeout(() => {
      this.board.rows.forEach(row => {
        row.cards.forEach(card => {
          card.flip();
        });
        row.fliped = false;
      });
    }, 10000);
  }

  checkFlips(): void {
    const result = this.board.rows.every((row) => row.fliped && row.flipedCard.num !== -1);
    if (result && !this.clearing) {
      this.checkResult();
    }
  }

  checkResult(): void {
    const result = this.board.rows.every((row) => row.flipedCard.num === this.board.rows[0].flipedCard.num);
    if (!result) {
      this.errors++;
      console.log('Errors: ' + this.errors);

      this.clearing = true;
      setTimeout(() => {
        this.board.clearRows();
        this.clearing = false;
      }, 3000);

    } else {
      this.correctAnswers++;
      console.log('Correct: ' + this.correctAnswers);

      if (this.correctAnswers === this.board.cardsNum) {
        console.log('Congratulations! You won the game!');
        console.log('Restarting the game...');
        setTimeout(() => {
          this.startGame();
        }, 10000);

      } else {
        this.board.resolveRows();
      }
    }
  }
}
