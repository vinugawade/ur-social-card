<?php

namespace Database\Factories;

use App\Models\SocialCard;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<SocialCard>
 */
class SocialCardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->userName(),
            'user_id' => User::factory(),
            'url' => $this->faker->url(),
            'active' => $this->faker->boolean(100),
        ];
    }
}
