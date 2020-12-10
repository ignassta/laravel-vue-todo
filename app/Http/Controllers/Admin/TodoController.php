<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Todo;
use App\Models\User;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::orderBy('created_at', 'desc')->get();

        return response()->json($todos);
    }

    public function create()
    {
        $users = User::all();

        return response()->json($users);
    }

    public function store(Request $request)
    {
        $request->validate([
            'task' => 'required',
            'user_id' => 'required',
        ]);

        $todo = new Todo([
            'task' => $request->get('name'),
            'user_id' => $request->get('email'),
        ]);

        $todo->save();

        return response()->json($todo);
    }

    public function destroy($id)
    {
        Todo::destroy($id);

        return response()->json("ok");
    }
}
