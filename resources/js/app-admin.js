require('./bootstrap');
window.Vue = require('vue');

import Vuex from 'vuex'
import VueRouter from "vue-router";

Vue.use(Vuex);
Vue.use(VueRouter);

let state = {
    users: [],
    user: '',
    todos: []
};

let getters = {
    users(state) {
        return state.users
    },
    user(state) {
        return state.user
    },
    todos(state) {
        return state.todos
    }
};

let mutations = {
    FETCH_USERS(state, users) {
        return state.users = users;
    },
    STORE_USER(state, user) {
        state.users.unshift(user);
    },
    EDIT_USER(state, user) {
        return state.user = user
    },
    UPDATE_USER(state, user) {
        let index = state.users.findIndex(item => item.id === user.id);
        state.users[index] = user;
        // console.log('update ' + user)
    },
    DELETE_USER(state, user) {
        let index = state.users.findIndex(item => item.id === user.id);
        console.log('delete ' + user.id);
        state.users.splice(index, 1)
    },

    FETCH_TODOS(state, todos) {
        return state.todos = todos;
    },
    STORE_TODO(state, todo) {
        state.todos.unshift(todo);
    },
    DELETE_TODO(state, todo) {
        let index = state.todos.findIndex(item => item.id === todo.id);
        console.log('delete ' + todo.id);
        state.todos.splice(index, 1)
    }
};

let actions = {
    fetchUsers({commit}) {
        axios.get('/api/admin/users')
            .then(response => {
                commit('FETCH_USERS', response.data)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    },
    storeUser({commit}, user) {
        axios.post('/api/admin/user/store', user)
            .then(response => {
                commit('STORE_USER', response.data)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    },
    editUser({commit}, userId) {
        axios.get('/api/admin/user/edit/' + userId)
            .then(response => {
                commit('EDIT_USER', response.data)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    },
    updateUser({commit}, user) {
        axios.post('/api/admin/user/update/' + user.id, user)
            .then(response => {
                // console.log('update ' + response.data)
                commit('UPDATE_USER', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    },
    deleteUser({commit}, user) {
        axios.post('/api/admin/user/delete/' + user.id)
            .then(response => {
                if (response.data === 'ok')
                    commit('DELETE_USER', user)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    },

    fetchTodos({commit}) {
        axios.get('/api/admin/todos')
            .then(response => {
                commit('FETCH_TODOS', response.data)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    },
    storeTodo({commit}, todo) {
        axios.post('/api/admin/todo/store', todo)
            .then(response => {
                commit('STORE_TODO', response.data)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    },
    deleteTodo({commit}, todo) {
        axios.post('/api/admin/todo/delete/' + todo.id)
            .then(response => {
                if (response.data === 'ok')
                    commit('DELETE_TODO', todo)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    }
};

const userList = Vue.component('user-list', require('./components/UserList').default);
const createUser = Vue.component('create-user', require('./components/CreateUser').default);
const editUser = Vue.component('edit-user', require('./components/EditUser').default);
const adminTodoList = Vue.component('admin-todo-list', require('./components/AdminTodoList').default);
const createTodo = Vue.component('create-todo', require('./components/CreateTodo').default);

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    strict: process.env.NODE_ENV !== 'production'
});

const router = new VueRouter({
    routes: [
        {
            name: 'users',
            path: '/admin/users',
            component: userList,
        },
        {
            name: 'create-user',
            path: '/admin/user/create',
            component: createUser,
        },
        {
            name: 'edit-user',
            path: '/admin/user/edit/:id',
            component: editUser,
            params: true
        },

        {
            name: 'todos',
            path: '/admin/todos',
            component: adminTodoList,
        },
        {
            name: 'create-todo',
            path: '/admin/create-todo',
            component: createTodo,
        }
    ],
    mode: 'history'
});

const appAdmin = new Vue({
    el: '#app-admin',
    router,
    store
});