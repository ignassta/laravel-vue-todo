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

const userList = Vue.component('user-list', require('./components/UserList').default);
const createUser = Vue.component('create-user', require('./components/CreateUser').default);

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
    mode: 'history'
});

const appAdmin = new Vue({
    el: '#app-admin',
    router
});