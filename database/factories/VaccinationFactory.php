<?php

namespace Database\Factories;

use App\Models\Pet;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vaccination>
 */
class VaccinationFactory extends Factory
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
            'name' => $this->faker->word(),
            'date' => $this->faker->dateTimeBetween('-2 weeks', '-1 week'),
            'next_dose' => $this->faker->dateTimeBetween('+2 weeks', '4 weeks'),
        ];
    }
}
