require('./bootstrap');
window.Vue = require('vue');

Vue.component('login-form', require('./components/LoginForm').default);

const appAdmin = new Vue({
    el: '#app-front',
});