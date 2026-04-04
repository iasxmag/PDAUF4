import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  //Metodo para el login de usuarios. Redirecciona a la pagina correspondiente segun el tipo de usuario
  onLogin() {
    this.authService.login(this.usuario, this.contrasena).subscribe({
      next: (res: any) => {
        console.log('Login correcto', res);
      // Guardar el id y el equipo del usuario en el localStorage
        localStorage.setItem('userId', res._id);
        localStorage.setItem('miEquipo', res.equipo); 
        switch (res.tipo) {
          case 'admin':
            this.router.navigate(['/admin-page']);
            break;
          case 'normal':
            this.router.navigate(['/usuario-page']);
            break;
          case 'capitan':
            this.router.navigate(['/capitan-page']);
            break;
          case 'arbitro':
            this.router.navigate(['/arbitro-page']);
            break;
            default:
              console.error('Tipo de usuario desconocido:', res.tipo);
        }
      },
      error: err => {
        console.error('Error en el login:', err);
        alert('Usuario o contraseña incorrectos');
      }
    });
      
  }
}