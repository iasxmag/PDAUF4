<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Club; // Importar el modelo de Club

class ClubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Crear algunos clubes de ejemplo
        Club::create([
            'nombre' => 'Club Atlético CR',
            'ciudad' => 'Ciudad Real',
            'categoria' => 'Segunda',
        ]);

        Club::create([
            'nombre' => 'Club Maestre',
            'ciudad' => 'Ciudad Real',
            'categoria' => 'Segunda',
        ]);

        Club::create([
            'nombre' => 'Club Puertollano',
            'ciudad' => 'Puertollano',
            'categoria' => 'Tercera',
        ]);
    }
}
