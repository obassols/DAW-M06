import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserApi {
  constructor(private http: HttpClient) { }

  private createHeader(): any {
    const TOKEN = '6470ce68e532a37494b757bf58a8b5bb3763f4517b78fdbb4b7db25128612ff7';

    const HEADER = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Origin,Content-Type,Accept,Authorization',
      Autorization: `Bearer ${TOKEN}`,
    };

    return { headers: new HttpHeaders(HEADER) };
  }

  getUsers(): Observable<any> {
    const REQUEST_OPTIONS = this.createHeader();
    return this.http.get('https://gorest.co.in/public/v2/users', REQUEST_OPTIONS);
  }

  addUser(user: any): Observable<any> {
    const REQUEST_OPTIONS = this.createHeader();
    const USER_STRING = JSON.stringify(user);
    return this.http.post('https://gorest.co.in/public/v2/users', USER_STRING, REQUEST_OPTIONS);
  }
}
