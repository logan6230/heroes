import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }
  
  baseUrl: string = environment.baseUrl;

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }
  getHeroeByid(id: string) {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);

  }
}
