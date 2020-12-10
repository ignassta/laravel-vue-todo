<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/admin/users', [\App\Http\Controllers\Admin\UserController::class, 'index']);
Route::post('/admin/user/store', [\App\Http\Controllers\Admin\UserController::class, 'store']);
Route::get('/admin/user/edit/{id}', [\App\Http\Controllers\Admin\UserController::class, 'edit']);
Route::post('/admin/user/update/{id}', [\App\Http\Controllers\Admin\UserController::class, 'update']);
Route::post('/admin/user/delete/{id}', [\App\Http\Controllers\Admin\UserController::class, 'destroy']);

Route::get('/admin/todos', [\App\Http\Controllers\Admin\TodoController::class, 'index']);
Route::post('/admin/todo/delete/{id}', [\App\Http\Controllers\Admin\TodoController::class, 'destroy']);