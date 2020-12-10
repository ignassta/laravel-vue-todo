<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $todos = Todo::where('user_id', $user->id)->get();

        return response()->json($todos);
    }
}
