<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Auth::routes([
    'register' => false,
    'reset' => false,
    'verify' => false,
]);

Route::get('/', [HomeController::class, 'index'])->name('home');

//handle page reload
Route::get('{any}', function () {

    return view('index');

})->where('any','.*')->middleware('auth');
