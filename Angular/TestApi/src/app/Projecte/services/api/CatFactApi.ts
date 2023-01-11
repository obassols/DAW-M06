import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CatFact {
  constructor(private http: HttpClient) {}

  getFact(): void {
    // Empty
  }
}
