import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoService } from '../../../core/services/partido.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-arbitro-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './arbitro-page.component.html',
  styleUrl: './arbitro-page.component.css'
})
export class ArbitroPageComponent implements OnInit {
  misPartidos: any[] = [];

  constructor(private partidoService: PartidoService) {}

  ngOnInit() {
    // Recuperamos el ID que guardamos en el login
    const idArbitro = localStorage.getItem('userId');

    this.partidoService.getPartidos().subscribe({
      next: (partidos) => {
        // Filtramos: solo los partidos donde el campo 'arbitro' coincida con mi ID
        this.misPartidos = partidos.filter(p => p.arbitro === idArbitro || p.arbitro?._id === idArbitro);
        console.log('Mis partidos asignados:', this.misPartidos);
      },
      error: (err) => console.error('Error al cargar partidos', err)
    });
  }
}