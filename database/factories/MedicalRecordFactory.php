<?php

namespace Database\Factories;

use App\Models\Pet;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MedicalRecord>
 */
class MedicalRecordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'pet_id' => Pet::inRandomOrder()->value('id') ?? Pet::factory(),
            'date' => $this->faker->dateTimeBetween('-2 weeks', '+1 week'),
            'diagnosis' => $this->faker->sentence(5),
            'treatment' => $this->faker->sentence(5),
            'vet_id' => User::inRandomOrder()->value('id') ?? User::factory()
        ];
    }
}
