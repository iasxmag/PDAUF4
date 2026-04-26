<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Jugador>
 */
class JugadorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    
    public function definition(): array {
        return [
            'nombre' => $this->faker->name(),
            'posicion' => $this->faker->word(),
            'dorsal' => $this->faker->randomNumber(2),
            'club_id' =>  1, // Asignamos un club_id fijo para simplificar las pruebas
        ];
    }
}
