import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JugadoresService } from './jugadores.service';

//Mock de datos
  const jugadores = [

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

describe('JugadoresService', () => {
  let service: JugadoresService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JugadoresService]
    });
    service = TestBed.inject(JugadoresService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  //--------PRUEBAS DE INTEGRACIÓN--------
  
  //Prueba 1: Verificar que el servicio se crea correctamente
  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  //Prueba 2: Verificar que se obtiene la lista de jugadores correctamente
  it('debería obtener la lista de jugadores', () => {
    service.getJugadores().subscribe(jugadores => {
      expect(jugadores.length).toBe(9);
      expect(jugadores[0].nombre).toBe('Pablo Jiménez');
    });

    const req = httpMock.expectOne('http://localhost:3000/api/jugadores');
    expect(req.request.method).toBe('GET');
    req.flush(jugadores);
  });

  //Prueba 3: Verificar que se obtiene un jugador por su id correctamente
  it('debería obtener un jugador por su id', () => {
    service.getJugador(1).subscribe(jugador => {
      expect(jugador.nombre).toBe('Pablo Jiménez');
    });

    const req = httpMock.expectOne('http://localhost:3000/api/jugadores/1');
    expect(req.request.method).toBe('GET');
    req.flush(jugadores[0]);
  });

  //Prueba 4: Verificar que se maneja correctamente un error 404
  it('debería manejar un error 404', () => {
    service.getJugador(99).subscribe({
      next: () => fail('debería haber fallado'),
      error: (error) => {
        expect(error.status).toBe(404);
      }
    });

    const req = httpMock.expectOne('http://localhost:3000/api/jugadores/99');
    req.flush('No encontrado', { status: 404, statusText: 'Not Found' });
  });
});