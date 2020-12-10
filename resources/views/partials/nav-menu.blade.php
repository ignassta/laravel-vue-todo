@auth
    <nav class="navbar navbar-expand navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">ToDo list</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">

                    @if(auth()->user()->role == 1)
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'users'}">Users</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'create-user'}">New user</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'admin-todos'}">Todos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'create-todo'}">New todo</router-link>
                        </li>
                    @endif

                    @if(auth()->user()->role == 2)
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'user-todos'}">Todos</router-link>
                        </li>
                    @endif

                    <li class="nav-item">
                        <a class="nav-link"
                           href="#"
                           onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                            Logout ({{ Auth::user()->name }})
                        </a>
                    </li>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </ul>
            </div>
        </div>
    </nav>
@endauth
