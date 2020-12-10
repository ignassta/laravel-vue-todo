require('./bootstrap');
window.Vue = require('vue');

import Vuex from 'vuex'
import VueRouter from "vue-router";

Vue.use(Vuex);
Vue.use(VueRouter);

let state = {
    users: []
};

let getters = {
    users(state) {
        return state.users
    }
};

let mutations = {
    FETCH_USERS(state, users) {
        return state.users = users;
    },
    DELETE_USER(state, user) {
        let index = state.users.findIndex(item => item.id === user.id);
        console.log('delete ' + user.id);
        state.users.splice(index, 1)
    },
};

let actions = {
    fetchUsers({commit}) {
        axios.get('/api/admin/users')
            .then(response => {
                console.log(response.data)
                commit('FETCH_USERS', response.data)
            })
            .catch(error => {
                console.log(error.response.data)
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
};

const userList = Vue.component('user-list', require('./components/UserList').default);
const createUser = Vue.component('create-user', require('./components/CreateUser').default);

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
        }
    ],
    mode: 'history',
    store
});

const appAdmin = new Vue({
    el: '#app-admin',
    router,
    store
});