<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jugador extends Model
{
    use HasFactory;
    //para evitar problemas con el nombre de la tabla
    protected $table = 'jugadores';
    protected $fillable = [
        'nombre',
        'posicion',
        'dorsal',
        'club_id',
    ];
    //relacion un jugador pertenece a un club
    public function club(){
        return $this->belongsTo(Club::class);
    }
}
