<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $table = 'hoteles'; 

    protected $fillable = [
        'nombre', 'ciudad', 'numero_habitaciones', 'direccion', 'nit',
    ];

    /**
     * Obtiene los tipos de habitación asociados con el hotel.
     */
    public function tiposHabitacion()
    {
        return $this->hasMany(TipoHabitacion::class);
    }
}