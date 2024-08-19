import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { hero } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHeroService {
  private url = 'https://66562e799f970b3b36c48e76.mockapi.io/heroes';
  constructor(private http: HttpClient) {}
  getAll(): Observable<hero[]> {
    return this.http.get<hero[]>(this.url);
  }
  createOne(newHero: hero) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<hero>(this.url, newHero, { headers });
  }
}
