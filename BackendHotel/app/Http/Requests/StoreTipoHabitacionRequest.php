<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * FormRequest para validar datos de entrada para la creación de tipos de habitación.
 */
class StoreTipoHabitacionRequest extends FormRequest
{
    /**
     * Determina si el usuario está autorizado para hacer esta solicitud.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // Cambiar según la lógica de autorización
    }

    /**
     * Reglas de validación aplicadas a la solicitud.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'hotel_id' => 'required|exists:hoteles,id',
            'cantidad' => 'required|integer|min:1',
            'tipo_habitacion' => 'required|in:Estándar,Junior,Suite',
            'acomodacion' => 'required|string',
        ];
    }
}