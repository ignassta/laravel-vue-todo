@extends('layouts.app')

@section('content')

    @guest
    <section class="homepage vh-100 d-flex justify-content-center align-items-center">
        <div class="content-holder">
            <h1>ToDo list</h1>
            <h2>made by: Ignas Staržinskis</h2>
            <h2>technologies used: PHP 7.3, Git, MySql, Laravel, Vue.js, Vuex, Vue router</h2>
            <div class="login-link-holder text-center mt-5">
                <a href="{{ route('login') }}" class="btn btn-primary">Login</a>
            </div>
        </div>
    </section>
    @endguest

    @auth
    <div class="container">
        <div class="row">
            <router-view></router-view>
        </div>
    </div>
    @endauth

@endsection
