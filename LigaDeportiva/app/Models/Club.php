<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Club extends Model
{
    //permitir insertar datos en la tabla clubs
    protected $fillable = [
        'nombre',
        'ciudad',
        'categoria',
    ];
    //relacion un club tiene muchos jugadores
    public function jugadores(){
        return $this->hasMany(Jugador::class);
    }
}
