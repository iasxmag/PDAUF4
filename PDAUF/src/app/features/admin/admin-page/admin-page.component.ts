import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PartidoService } from '../../../core/services/partido.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-page.component.html'
})

export class AdminPageComponent implements OnInit {
  partidos: any[] = [];
  arbitros: any[] = [];

  // Modelo del formulario de partido
  partidoForm = {
    id: '',
    deporte: '',
    equipoLocal: '',
    equipoVisitante: '',
    fecha: '',
    ubicacion: '',
    arbitro: '' ,
    resultado: ''
  };
  
  editando = false;
  
  constructor(private partidoService: PartidoService, private authService: AuthService) {}

  ngOnInit() {
    this.cargarPartidos();
    this.cargarArbitros();
  }

  // Método para cargar partidos
  cargarPartidos() {
    this.partidoService.getPartidos().subscribe(res => this.partidos = res);
  }

  // Método para cargar árbitros
  cargarArbitros() {
  this.authService.getUsuarios().subscribe({
    // Filtrar solo los usuarios que son árbitros
    next: (usuarios) => {
      this.arbitros = usuarios.filter(u => u.tipo === 'arbitro');
      console.log('Árbitros cargados:', this.arbitros); // Mira la consola (F12)
    },
    error: (err) => console.error('Error al cargar usuarios', err)
  });
}

// Método para guardar o modificar un partido
  guardar() {
    if (this.editando) {
      this.partidoService.updatePartido(this.partidoForm.id, this.partidoForm).subscribe(() => {
        this.resetear();
        this.cargarPartidos();
      });
    } else {
      this.partidoService.createPartido(this.partidoForm).subscribe(() => {
        this.resetear();
        this.cargarPartidos();
      });
    }
  }

// Método para editar un partido
  editar(p: any) {
    this.editando = true;
    this.partidoForm = { ...p }; 
  }

  // Método para  borrar un partido
  borrar(id: string) {
    if (confirm('¿Seguro que quieres borrar este partido?')) {
      this.partidoService.deletePartido(id).subscribe(() => this.cargarPartidos());
    }
  }

  // Método para resetear el formulario
  resetear() {
    this.editando = false;
    this.partidoForm = { id: '', deporte: '', equipoLocal: '', equipoVisitante: '', fecha: '', ubicacion: '', arbitro: '', resultado: ''};
  }
}