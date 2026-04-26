<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    protected $fillable = [
        'liga_id',
        'club_local_id',
        'club_visitante_id',
        'fecha',
        'resultado',
    ];
    //un partido tiene 2 clubes
    public function clubLocal(){
        return $this->belongsTo(Club::class, 'club_local_id');
    }
    
    public function clubVisitante(){
        return $this->belongsTo(Club::class, 'club_visitante_id');
    }
}
