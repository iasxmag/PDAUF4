<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\Jugador;

// ---------- PRUEBAS UNITARIAS -----------
class JugadorUnitTest extends TestCase
{

    // Prueba 1: Verificar que el jugador tiene un nombre y dorsal asignados correctamente
    public function test_jugador_tiene_nombre_y_dorsal() {
        // crear un jugador en memoria 
        $jugador = new Jugador([
            'nombre' => 'Laura Gómez',
            'dorsal' => 10
        ]);

        // Verificar que el nombre y dorsal se asignaron correctamente
        $this->assertEquals('Laura Gómez', $jugador->nombre);
        $this->assertEquals(10, $jugador->dorsal);
    }

    // Prueba 2: Verificar que el jugador tiene una posición asignada correctamente
    public function test_jugador_tiene_posicion() {
        //Crear jugador en memoria
        $jugador = new Jugador([
            'nombre' => 'Carlos Pérez',
            'posicion' => 'Defensa'
        ]);

        //Verificar que la posición se asignó correctamente
        $this->assertEquals('Defensa', $jugador->posicion);
    }
}