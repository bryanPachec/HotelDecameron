<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tipos_habitacion', function (Blueprint $table) {
            $table->id(); 
            $table->unsignedBigInteger('hotel_id'); 
            $table->integer('cantidad'); 
            $table->string('tipo_habitacion'); 
            $table->string('acomodacion'); 
            $table->timestamps(); 

            $table->foreign('hotel_id')->references('id')->on('hoteles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tipos_habitacion');
    }
};
