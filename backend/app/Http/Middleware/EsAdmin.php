<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    
    //funcion para gestionar permisos
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->query('admin') !=='1') {
            return response()->json(['error' => 'No tienes permiso de administrador.'], 403);
        }
        return $next($request);
    }
}
