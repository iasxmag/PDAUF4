import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  
  constructor(private http: HttpClient) { }

  // Métodos CRUD partidos ADMIN.

  // Crear un nuevo partido
  createPartido(datos: any) {
    return this.http.post('http://localhost:3000/partidos', datos);
  }

  // Actualizar un partido existente
  updatePartido(id: string, datos: any) {
    return this.http.put(`http://localhost:3000/partidos/${id}`, datos);
  }

  // Borrar un partido
  deletePartido(id: string) {
    return this.http.delete(`http://localhost:3000/partidos/${id}`);
  }

  // Obtener todos los partidos
  getPartidos(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/partidos');
  }
}