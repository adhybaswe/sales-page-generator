<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure there's at least one user
        $user = User::first() ?: User::create([
            'name' => 'Demo User',
            'email' => 'demo@example.com',
            'password' => Hash::make('password'),
        ]);

        $products = [
            [
                'user_id' => $user->id,
                'name' => 'EcoClean Smart Bottle',
                'description' => 'A smart water bottle that self-sterilizes your water using UV-C technology in 60 seconds.',
                'features' => ['Self-Cleaning UV-C Tech', '24h Cold / 12h Hot Insulation', '316 Food Grade Stainless Steel', '1-Month Battery Life'],
                'target_audience' => 'Travelers, Urban Commuters, Fitness Enthusiasts',
                'price' => 750000,
                'usp' => 'The only bottle that ensures your water is 99.9% bacteria-free without the need for daily washing.',
            ],
            [
                'user_id' => $user->id,
                'name' => 'SaaS Project Manager Pro',
                'description' => 'A cloud-based project management platform focused on minimalism and speed for creative teams.',
                'features' => ['Intuitive Kanban Boards', 'Automatic Time Tracking', 'Slack & Discord Integration', 'AI Performance Reports'],
                'target_audience' => 'Creative Agencies, Startups, Freelancers',
                'price' => 299000,
                'usp' => 'Manage projects 2x faster without the clutter of unnecessary features.',
            ],
            [
                'user_id' => $user->id,
                'name' => 'Mastering Copywriting Crash Course',
                'description' => 'An intensive 7-day video course that teaches you how to write ads that sell without sounding "salesy".',
                'features' => ['15 Exclusive Video Lessons', 'Ready-to-use Headline Templates', 'Live Assignment Review Sessions', 'Alumni Group Access'],
                'target_audience' => 'Online Store Owners, Content Creators, Beginner Marketers',
                'price' => 499000,
                'usp' => 'Taught directly by practitioners who have generated billions from copywriting.',
            ],
        ];

        foreach ($products as $productData) {
            Product::create($productData);
        }
    }
}
