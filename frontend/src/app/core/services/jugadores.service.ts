import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Jugador {
  id: number;
  nombre: string;
  competicion: string;
  posicion: string;
  equipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  private apiUrl = 'http://localhost:3000/api/jugadores';

  constructor(private http: HttpClient) {}

  getJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.apiUrl);
  }

  getJugador(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(`${this.apiUrl}/${id}`);
  }
}