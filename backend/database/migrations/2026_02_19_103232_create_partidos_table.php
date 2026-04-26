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
        Schema::create('partidos', function (Blueprint $table) {
            $table->id();
            $table->dateTime('fecha');
            $table->string('resultado')->nullable();
            //Creación de relaciones:
            //relacion con Liga
            $table->foreignId('liga_id')->constrained('ligas')->onDelete('cascade');
            //relación con Clubes
            $table->foreignId('club_local_id')->constrained('clubs')->onDelete('cascade');
            $table->foreignId('club_visitante_id')->constrained('clubs')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partidos');
    }
};
