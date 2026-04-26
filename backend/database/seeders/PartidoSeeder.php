<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Partido; // Importar el modelo de Partido

class PartidoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear algunos partidos de ejemplo
        Partido::create([
            'liga_id' => 1, // Liga Regional Ciudad Real
            'club_local_id' => 2,
            'club_visitante_id' => 1, 
            'fecha' => '2026-09-15 19:00:00',
            'resultado' => '2-1',
        ]);
    }
}
