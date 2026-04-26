import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoService } from '../../../core/services/partido.service';

@Component({
  selector: 'app-usuario-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-page.component.html',
  styleUrls: ['./usuario-page.component.css']
})
export class UsuarioPageComponent implements OnInit {
  partidosEquipo: any[] = [];
  miEquipo: string = '';

  constructor(private partidoService: PartidoService) {}

  ngOnInit() {
    // Sacamos el equipo del usuario del localStorage
    this.miEquipo = localStorage.getItem('miEquipo') || '';

    this.partidoService.getPartidos().subscribe(partidos =>{
        this.partidosEquipo = partidos.filter(p => 
          p.equipoLocal === this.miEquipo || p.equipoVisitante === this.miEquipo
        );
      });
    }
  }
