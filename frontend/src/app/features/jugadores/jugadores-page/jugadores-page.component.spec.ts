import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugadoresPageComponent } from './jugadores-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule

 } from '@angular/forms';
describe('JugadoresPageComponent', () => {
  let component: JugadoresPageComponent;
  let fixture: ComponentFixture<JugadoresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadoresPageComponent, CommonModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadoresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //-----------PRUEBAS-----------

  //Prueba 1: Verificar que el componente se crea correctamente
  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  //Prueba 2: Verificar que haya 9 jugadores en total en el array
  it('debería tener 9 jugadores en total', () => {
    expect(component.jugadores.length).toBe(9);
  });

  //Prueba 3: Verificar que el filtro de jugadores funcione correctamente
  it('debería filtrar jugadores por nombre', () => {
    component.finalizarBusq = 'Pablo';
    expect(component.jugadoresFiltrados.length).toBe(1);
    expect(component.jugadoresFiltrados[0].nombre).toBe('Pablo Jiménez');
  });

  //Prueba 4: El filtro puede filtrar sin importar mayúsculas o minúsculas
  it('debería filtrar jugadores sin importar mayúsculas o minúsculas', () => {
    component.finalizarBusq = 'pablo';
    expect(component.jugadoresFiltrados.length).toBe(1);
    expect(component.jugadoresFiltrados[0].nombre).toBe('Pablo Jiménez');
  });

  //Prueba 5: Verificar que si no usamos el filtro, se muestren todos los jugadores
  it('debería mostrar todos los jugadores si el filtro está vacío', () => {
    component.finalizarBusq = '';
    expect(component.jugadoresFiltrados.length).toBe(9);
  });

  //Prueba 6: Verificar que los errroes esten controlados
  it ('debería devolver la lista vacía si no existe el jugadr con ese nombre', () => {
    component.finalizarBusq = 'NombreInexistente';
    expect(component.jugadoresFiltrados.length).toBe(0);
  });
});
