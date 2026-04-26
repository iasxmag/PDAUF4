import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario: string = '';
  contrasena: string = '';
  tipo: string = 'normal';
  equipo: string ='';

  constructor(private authService: AuthService, private router: Router) {}

  // Método para registrar un nuevo usuario
  onRegister() {
    const datos = {
      username: this.usuario,
      password: this.contrasena,
      tipo: this.tipo,
      equipo: this.equipo
    };

    this.authService.register(datos).subscribe({
      next: res => {
        console.log('Usuario registrado:', res);
        alert('Registro completado correctamente');
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error('Error en el registro', err);
        alert('No se pudo registrar el usuario');
      }
    });
}
}
