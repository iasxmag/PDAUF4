<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jugador; //importar modelo

class JugadorController extends Controller
{

    //listar
    public function index()
    {
        return response()->json(Jugador::all());
    }

    //guardar
    public function store(Request $request)
    {
        //Validaciones
        $rules = [
            'nombre' => 'required|string',
            'posicion' => 'required|string',
            'dorsal' => 'required|integer|between:1,99', //numero debe ser entre 1 y 99
            'club_id' => 'required|exists:clubs,id'
        ];
        $messages = [
            'nombre.required' => 'El nombre es obligatorio.',
            'posicion.required' => 'La posición es obligatoria.',
            'dorsal.required' => 'El dorsal es obligatorio.',
            'dorsal.integer' => 'El dorsal debe ser un número entero.',
            'dorsal.between' => 'El dorsal debe estar entre 1 y 99.',
            'club_id.required' => 'El club es obligatorio.',
            'club_id.exists' => 'El club seleccionado no existe.'
        ];
        //Ejecutar validacion
        $request->validate($rules, $messages);

        $jugador = Jugador::create($request->all());
        return response()->json($jugador, 201);
    }

    //mostrar uno
    public function show($id)
    {
        $jugador = Jugador::findOrFail($id);
        return response()->json($jugador);
    }

    //actualizar
    public function update(Request $request, $id)
    {
        $jugador = Jugador::findOrFail($id);
         //Validaciones
        $rules = [
            'nombre' => 'required|string',
            'posicion' => 'required|string',
            'dorsal' => 'required|integer|between:1,99', //numero debe ser entre 1 y 99
            'club_id' => 'required|exists:clubs,id'
        ];
        $messages = [
            'nombre.required' => 'El nombre es obligatorio.',
            'posicion.required' => 'La posición es obligatoria.',
            'dorsal.required' => 'El dorsal es obligatorio.',
            'dorsal.integer' => 'El dorsal debe ser un número entero.',
            'dorsal.between' => 'El dorsal debe estar entre 1 y 99.',
            'club_id.required' => 'El club es obligatorio.',
            'club_id.exists' => 'El club seleccionado no existe.'
        ];

        //Ejecutar validacion
        $request->validate($rules, $messages);

        $jugador->update($request->all());
        return response()->json($jugador);
    }

    //eliminar
    public function destroy($id)
    {
        $jugador = Jugador::findOrFail($id);
        $jugador->delete();
        return response()->json(['message' => 'Jugador eliminado correctamente']);
    }
}
