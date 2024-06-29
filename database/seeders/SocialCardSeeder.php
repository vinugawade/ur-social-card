<?php

namespace Database\Seeders;

use App\Models\SocialCard;
use Illuminate\Database\Seeder;

class SocialCardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SocialCard::factory()->create();
//        SocialCardFactory::new()->create();
    }
}
