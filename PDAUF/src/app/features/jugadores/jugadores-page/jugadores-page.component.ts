import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jugadores-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './jugadores-page.component.html',
  styleUrl: './jugadores-page.component.css'
})
export class JugadoresPageComponent {
  //Mock de datos
  jugadores = [

    //futbol
    { id: 1, nombre: 'Pablo Jiménez', competicion: 'Fútbol', posicion: 'Delantero', equipo: 'Maestre FC' },
    { id: 2, nombre: 'Cristian Rodríguez', competicion: 'Fútbol', posicion: 'Defensa', equipo: 'CR Fútbol' },
    { id: 3, nombre: 'Sofía Martínez', competicion: 'Fútbol', posicion: 'Centrocampista', equipo: 'Daimiel FC' },

    //baloncesto
    { id: 4, nombre: 'Lucas Fernández', competicion: 'Baloncesto', posicion: 'Base', equipo: 'Lobos BC' },
    { id: 5, nombre: 'Valentina Gómez', competicion: 'Baloncesto', posicion: 'Alero', equipo: 'Valencia BC' },
    { id: 6, nombre: 'Diego Sánchez', competicion: 'Baloncesto', posicion: 'Pívot', equipo: 'CR Baloncesto' },
  
    //voleibol
    { id: 7, nombre: 'María López', competicion: 'Voleibol', posicion: 'Central', equipo: 'Maestre Volei' },
    { id: 8, nombre: 'Javier Torres', competicion: 'Voleibol', posicion: 'Opuesto', equipo: 'Torres VC' },
    { id: 9, nombre: 'Ana Ramírez', competicion: 'Voleibol', posicion: 'Libero', equipo: 'Puertollano VC' }
  ];

  finalizarBusq: string = '';

  get jugadoresFiltrados() {
    if (!this.finalizarBusq) {
      return this.jugadores;
    }
    return this.jugadores.filter(jug =>
      jug.nombre.toLowerCase().includes(this.finalizarBusq.toLowerCase())
    );
  }

}
