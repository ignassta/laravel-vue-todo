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

    public function update(Request $request, $id)
    {
        $todo = Todo::find($id);

        $status = $todo->status;

        if($status <= 2) {
            $status++;
        } else {
            $status = 1;
        }

        $todo->status = $status;
        $todo->save();

        return response()->json($todo);
    }
}
