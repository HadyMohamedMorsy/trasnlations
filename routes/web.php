<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TranslateController;

Route::get('/', function () {
    return view('translate');
});
Route::post('translate' , [TranslateController::class , 'translate'])->name('translate');



