<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Liga; // Importar el modelo de Liga

class LigaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Crear algunas ligas de ejemplo
        Liga::create([
            'nombre' => 'Liga Regional Ciudad Real',
            'deporte' => 'Fútbol',
            'temporada' => '2026-2027',
        ]);
    }
}
