<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * FormRequest para validar datos de entrada para la creación de hoteles.
 */
class StoreHotelRequest extends FormRequest
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
            'nombre' => 'required|string|max:255',
            'ciudad' => 'required|string|max:255',
            'numero_habitaciones' => 'required|integer|min:1',
            'direccion' => 'required|string|max:255',
            'nit' => 'required|string|unique:hoteles',
        ];
    }
}