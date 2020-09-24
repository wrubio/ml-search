import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private httpHeaders: any;

  constructor(
    private http: HttpClient
  ) {
    this.httpHeaders = {
      headers: new HttpHeaders({
        name: 'wilmer',
        lastname: 'rubio',
      }),
    };
  }

  public getItems(query: string): Observable<any> {
    const url = `/api/items?q=${query}`;

    return this.http.get(url, this.httpHeaders);
  }

  public getItemById(id: string): Observable<any> {
    const url = `/api/items/${id}`;

    return this.http.get(url, this.httpHeaders);
  }
}
