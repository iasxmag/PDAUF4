<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Liga; //importamos el modelo de liga

class LigaController extends Controller
{
    //metodo para mostrar todas las ligas
    public function index()
    {
        return response()->json(Liga::all());
    }

    //metodo para mostrar formulario de creacion de liga
    public function store(Request $request)
    {
        $liga = Liga::create($request->all());
        return response()->json($liga, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $liga = Liga::findOrFail($id);
        return response()->json($liga);
    }

    //actualizar
    public function update(Request $request, $id)
    {
        $liga = Liga::findOrFail($id);
        $liga->update($request->all());
        return response()->json($liga);
    }

    //eliminar
    public function destroy($id)
    {
        Liga::findOrFail($id)->delete();
        return response()->json(['message' => 'Liga eliminada correctamente']);
    }
}
