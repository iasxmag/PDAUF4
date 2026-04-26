import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  // Llamadas al backend para registro y login
  register(datos: any) {
    return this.http.post(`${environment.apiUrl}/usuarios/register`, datos);
  }

  login(username: string, password: string) {
    return this.http.post(`${environment.apiUrl}/usuarios/login`, { username, password });
  }

  getUsuarios() {
  return this.http.get<any[]>(`${environment.apiUrl}/usuarios`);
}
}
