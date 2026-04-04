import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  // Llamadas al backend para registro y login
  register(datos: any) {
    return this.http.post('http://localhost:3000/usuarios/register', datos);
  }

  login(username: string, password: string) {
    return this.http.post('http://localhost:3000/usuarios/login', { username, password });
  }

  getUsuarios() {
  return this.http.get<any[]>('http://localhost:3000/usuarios');
}
}
