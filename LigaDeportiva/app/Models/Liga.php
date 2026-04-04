<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Liga extends Model
{
    protected $fillable = [
        'nombre',
        'deporte',
        'temporada',
    ];
    //relacion una liga tiene muchos partidos
    public function partidos(){
        return $this->hasMany(Partido::class);
    }
}
