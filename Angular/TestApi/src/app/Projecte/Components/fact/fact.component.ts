import { Component, OnInit } from '@angular/core';
import { CatFact } from '../../Services/API/Cat/CatFactApi';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.scss']
})
export class FactComponent implements OnInit {

  fact!: string;

  factNth!: Array<{fact: string, length: number}>;

  allFacts!: Array<{ fact: string, length: number }>;

  constructor(private httpClient: CatFact) { }

  ngOnInit(): void {
    this.httpClient.getFact().subscribe(
      data => {
        this.fact = data.fact;
      }
    );

    this.httpClient.getNthFacts(3).subscribe(
      data => {
        this.factNth = data.data;
      }
    );

    this.httpClient.getAllFacts().subscribe(
      data => {
        this.allFacts = data.data;
      }
    );
  }

}
