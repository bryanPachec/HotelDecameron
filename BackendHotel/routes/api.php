<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\TipoHabitacionController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('hoteles', HotelController::class);
Route::post('tipos-habitacion', [TipoHabitacionController::class, 'store']);
