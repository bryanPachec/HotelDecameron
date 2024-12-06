<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TipoHabitacion;

class TipoHabitacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TipoHabitacion::create([
            'hotel_id' => 1, // Asegúrate de que este ID exista en la tabla de hoteles
            'cantidad' => 20,
            'tipo_habitacion' => 'Estándar',
            'acomodacion' => 'Doble'
        ]);

        // Agrega más tipos de habitación según sea necesario
    }
}