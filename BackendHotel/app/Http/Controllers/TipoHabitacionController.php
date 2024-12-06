<?php

namespace App\Http\Controllers;

use App\Models\TipoHabitacion;
use App\Models\Hotel;
use App\Http\Requests\StoreTipoHabitacionRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

/**
 * Controlador para operaciones relacionadas con tipos de habitación.
 */
class TipoHabitacionController extends Controller
{
    /**
     * Almacena un nuevo tipo de habitación en la base de datos.
     *
     * @param StoreTipoHabitacionRequest $request Datos validados del tipo de habitación.
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreTipoHabitacionRequest $request)
    {
        // Validar las reglas de tipo de habitación y acomodación
        $tipoHabitacion = $request->tipo_habitacion;
        $acomodacion = $request->acomodacion;
        
        $this->validarAcomodacionPorTipo($tipoHabitacion, $acomodacion);
        
        // Obtener el hotel y su número máximo de habitaciones
        $hotel = Hotel::find($request->hotel_id);
        $numeroHabitacionesMaximo = $hotel->numero_habitaciones; // Campo que contiene el número máximo de habitaciones
        
        // Calcular la cantidad de habitaciones existentes
        $habitacionesExistentes = TipoHabitacion::where('hotel_id', $hotel->id)->sum('cantidad');
        
        // Validar que la cantidad total no exceda el máximo
        if (($habitacionesExistentes + $request->cantidad) > $numeroHabitacionesMaximo) {
            throw ValidationException::withMessages([
                'cantidad' => ['La cantidad total de habitaciones excede el máximo permitido por el hotel.'],
            ]);
        }

        // Crear el tipo de habitación
        $tipoHabitacion = TipoHabitacion::create($request->validated());

        return response()->json($tipoHabitacion, 201);
    }

    /**
     * Valida que la acomodación sea correcta según el tipo de habitación.
     *
     * @param string $tipoHabitacion
     * @param string $acomodacion
     * @throws \Illuminate\Validation\ValidationException
     */
    private function validarAcomodacionPorTipo($tipoHabitacion, $acomodacion)
    {
        $reglas = [
            'Estándar' => ['Sencilla', 'Doble'],
            'Junior' => ['Triple', 'Cuádruple'],
            'Suite' => ['Sencilla', 'Doble', 'Triple'],
        ];

        if (!in_array($acomodacion, $reglas[$tipoHabitacion] ?? [])) {
            throw ValidationException::withMessages([
                'acomodacion' => ['La acomodación no es válida para este tipo de habitación.'],
            ]);
        }
    }
}