<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Jugador;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

// ---------- PRUEBAS DE INTEGRACIÓN -----------

class JugadorControllerTest extends TestCase
{
    use RefreshDatabase;

    //Prueba 1: Verificar que se puede crear un jugador a través de la API
    public function test_api_crear_jugador() {
        //Crear club para asignarselo al jugador
        $clubId = DB::table('clubs')->insertGetId([
            'nombre' => 'Club de Prueba',
            'ciudad' => 'Ciudad Test',
            'categoria' => 'Primera',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Creamos el jugador en la base de datos usando el factory para asegurarnos de que el club_id es válido
        Jugador::factory()->create([
            'nombre' => 'Laura Gómez',
            'posicion' => 'Delantero',
            'dorsal' => 10,
            'club_id' => $clubId 
        ]); 

        // peticion GET a la API para obtener la lista de jugadores
        $response = $this->getJson('/api/jugadores'); 

        //validar que la respuesta sea correcta y que el jugador creado esté en la lista
        $response->assertStatus(200) 
                 ->assertJsonFragment(['nombre' => 'Laura Gómez']); 
    }

    // Prueba 2: Verificar que se puede borrar un jugador a través de la API
    public function test_api_borrar_jugador() {

        $this->withoutMiddleware(); // Desactivar middleware para evitar problemas de autenticación o autorización durante la prueba

        // Creamos un club y un jugador para luego borrarlo
        $clubId = DB::table('clubs')->insertGetId([
            'nombre' => 'Club de Prueba',
            'ciudad' => 'Ciudad Test',
            'categoria' => 'Primera',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $jugador = Jugador::factory()->create([
            'nombre' => 'Carlos Pérez',
            'posicion' => 'Defensa',
            'dorsal' => 5,
            'club_id' => $clubId
        ]);

        // Hacemos la petición DELETE a la API
        $response = $this->deleteJson("/api/jugadores/{$jugador->id}"); 
        // Validamos que la respuesta sea correcta
        $response->assertStatus(200) // 
                 ->assertJson(['message' => 'Jugador eliminado correctamente']);
        // Verificamos que todo se ha eliminado correctamente
        $this->assertDatabaseMissing('jugadores', ['id' => $jugador->id]); 
    }   

    // Prueba 3: Verificar que se puede actualizar jugador
    public function test_api_actualizar_jugador(){

        $this->withoutMiddleware();

        // Volvemos a crear un club y un jugador para luego actualizarlo
        $clubId = DB::table('clubs')->insertGetId([
            'nombre' => 'Club de Prueba',
            'ciudad' => 'Ciudad Test',
            'categoria' => 'Primera',       
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $jugador = Jugador::factory()->create([
            'nombre' => 'Ana Martínez',
            'posicion' => 'Portero',
            'dorsal' => 1,
            'club_id' => $clubId
        ]);

        // Hacemos la petición PUT a la API para actualizar el jugador
        $response = $this->putJson("/api/jugadores/{$jugador->id}", [
            'nombre' => 'Ana Martínez Actualizada',
            'posicion' => 'Portero',
            'dorsal' => 1,
            'club_id' => $clubId
        ]); 

        // Validamos que la respuesta sea correcta
        $response->assertStatus(200) 
                 ->assertJson(['nombre' => 'Ana Martínez Actualizada']);

        // Verificamos que el jugador se ha actualizado en la base de datos
        $this->assertDatabaseHas('jugadores', ['id' => $jugador->id, 'nombre' => 'Ana Martínez Actualizada']); 
    }
}