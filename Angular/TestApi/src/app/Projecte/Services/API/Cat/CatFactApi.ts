import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CatFact {
  constructor(private http: HttpClient) { }

  getFact(): Observable<any> {
    return this.http.get('https://catfact.ninja/fact');
  }

  getAllFacts(): Observable<any> {
    return this.http.get('https://catfact.ninja/facts');
  }

  getNthFacts(total: number): Observable<any> {
    return this.http.get('https://catfact.ninja/facts?limit=' + total);
  }
}
