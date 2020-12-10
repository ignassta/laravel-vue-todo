require('./bootstrap');
window.Vue = require('vue');

Vue.component('login-form', require('./components/LoginForm').default);

const app = new Vue({
    el: '#app-guest',
});