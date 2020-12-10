<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@admin.lt',
            'role' => '1',
            'email_verified_at' => now(),
            'password' => Hash::make('admin.111'),
            'remember_token' => Str::random(10),
        ]);

        DB::table('users')->insert([
            'name' => 'user',
            'email' => 'user@user.lt',
            'email_verified_at' => now(),
            'password' => Hash::make('user.111'),
            'remember_token' => Str::random(10),
        ]);

        User::factory(50)->create();
    }
}
