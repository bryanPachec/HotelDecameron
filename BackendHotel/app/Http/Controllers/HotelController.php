<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Http\Requests\StoreHotelRequest;

/**
 * Controlador para operaciones relacionadas con hoteles.
 */
class HotelController extends Controller
{
    /**
     * Almacena un nuevo hotel en la base de datos.
     *
     * @param StoreHotelRequest $request Datos validados del hotel.
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreHotelRequest $request)
    {
        $hotel = Hotel::create($request->validated());
        return response()->json($hotel, 201);
    }

    /**
     * Muestra una lista de todos los hoteles.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $hotels = Hotel::all();
        return response()->json($hotels, 200);
    }

 
}