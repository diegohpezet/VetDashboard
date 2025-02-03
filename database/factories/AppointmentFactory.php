<?php

namespace Database\Factories;

use App\Models\Pet;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointment>
 */
class AppointmentFactory extends Factory
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
            'reason' => $this->faker->sentence(5),
            'status' => $this->faker->randomElement(['Scheduled', 'Completed', 'Cancelled']),
        ];
    }
}
