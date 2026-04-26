<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Club; //importamos el modelo de club

class ClubController extends Controller
{
    //metodo para mostrar todos los clubes
    public function index(){
        return response()->json(Club::all()); //devuelve todos los clubes en formato JSON
    }

    //Mostrar informacion sobre un club en especifico
    public function show($id){
        $club = Club::findOrFail($id); //busca el club por su id
        return response()->json($club); //devuelve la informacion del club
    }

    //Actualizar club
    public function update(Request $request, $id){
        $club = Club::findOrFail($id); //busca el club por su id
        $club->update($request->all()); //actualiza el club con los datos recibidos 
        return response()->json($club); //devuelve la informacion actualizada
    }

    //Eliminar club
    public function destroy($id){
        $club = Club::findOrFail($id); //busca el club
        $club->delete(); //elimina el club
        return response()->json(['message' => 'Club eliminado correctamente']);
    }

    public function store(Request $request){
        //definicion de reglas y mensajes
        $rules = [
            'nombre' => 'required|min:3|max:100|unique:clubs,nombre',
            'ciudad' => 'required|string',
            'categoria' => 'required|in:Primera,Segunda,Tercera', //solo permite esas 3 cosas
        ];
        
        $messages = [
            'nombre.required' => 'El nombre es obligatorio.',
            'nombre.min' => 'El nombre debe tener al menos 3 caracteres.',
            'nombre.max' => 'El nombre no puede tener más de 100 caracteres.',
            'nombre.unique' => 'Este club ya existe.',
            'categoria.in' => 'La categoria debe ser Primera, Segunda o Tercera.',
        ];

        //Ejecutar validacion
        $request->validate($rules, $messages);
        $club = Club::create($request->all());
        return response()->json($club, 201);
    }
}
