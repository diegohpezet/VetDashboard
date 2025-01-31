<?php

namespace Database\Factories;

use App\Models\Owner;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pet>
 */
class PetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'species' => $this->faker->randomElement(['Cat', 'Dog', 'Parrot']),
            'breed' => $this->faker->randomElement(['Siamese', 'Persian', 'Bengal']),
            'sex' => $this->faker->randomElement(['Male', 'Female']),
            'stage' => $this->faker->randomElement(['Adult', 'Baby', 'Puppy']),
            'characteristics' => $this->faker->text,
            'owner_id' => Owner::inRandomOrder()->value('id') ?? Owner::factory(),
        ];
    }
}
