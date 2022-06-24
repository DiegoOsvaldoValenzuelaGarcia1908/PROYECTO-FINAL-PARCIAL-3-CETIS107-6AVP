<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\canciones;

class BackendController extends Controller

{

    public function getCanciones(){

    	$canciones = canciones::All();

    	return $canciones;
    }

}

