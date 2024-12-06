<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Hotel;

class HotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Hotel::create([
            'nombre' => 'Hotel Central',
            'ciudad' => 'Ciudad Central',
            'numero_habitaciones' => 50,
            'direccion' => '123 Calle Principal',
            'nit' => '900112233'
        ]);

        // Agrega más hoteles según sea necesario
    }
}