<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ClubSeeder::class, // Llamar al seeder de Club
            JugadorSeeder::class, // Llamar al seeder de Jugador
            LigaSeeder::class, // Llamar al seeder de Liga
            PartidoSeeder::class, // Llamar al seeder de Partido
            ]);
    }
}
