<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//importamos los controladores
use App\Http\Controllers\ClubController; 
use App\Http\Controllers\JugadorController; 
use App\Http\Controllers\LigaController; 

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//RUTAS PUBLICAS, añadimos ->only(['index', 'show']) para decirle donde puede acceder cualquiera.
//rutas de clubes
Route::apiResource('clubes', ClubController::class)->only(['index', 'show']);

//rutas de jugadores
Route::apiResource('jugadores', JugadorController::class)->only(['index', 'show']);

//rutas de ligas
Route::apiResource('ligas', LigaController::class)->only(['index', 'show']);

//RUTAS PROTEGIDAS, todas menos las que se indican.
Route::middleware('admin')->group(function () {
    Route::apiResource('clubes', ClubController::class)->except(['index', 'show']);
    Route::apiResource('jugadores', JugadorController::class)->except(['index', 'show']);
    Route::apiResource('ligas', LigaController::class)->except(['index', 'show']);
});