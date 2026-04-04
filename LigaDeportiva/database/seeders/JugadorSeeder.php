<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Jugador; // Importar el modelo de Jugador

class JugadorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //crear jugadores
        //Jugador para el Club Atletico CR
        Jugador::create([
            'nombre' => 'Juan Pérez',
            'posicion' => 'Delantero',
            'dorsal' => 8,
            'club_id' => 1, // Asignar al club con ID 1
        ]);

        //Jugador para el Club Maestre
        Jugador::create([
            'nombre' => 'Carlos Gómez',
            'posicion' => 'Defensa',
            'dorsal' => 4,
            'club_id' => 2, // Asignar al club con ID 2
        ]);
    }
}
