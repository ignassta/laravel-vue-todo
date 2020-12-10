<template>

    <div class="container">
        <div v-if="!secrets.length" class="row vh-100 justify-content-center align-items-center">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header">
                        <h1>Login</h1>
                    </div>
                    <div class="card-body">
                        <form action="#" @submit.prevent="handleLogin">
                            <div class="form-group">
                                <input type="email" class="form-control" v-model="formData.email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" v-model="formData.password">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "LoginForm",
        data() {
            return {
                secrets: [],
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            handleLogin() {
                axios.get('/sanctum/csrf-cookie')
                    .then(response => {axios.post('/login', this.formData)
                        .then(response => {window.location = "/"})
                        .catch(error => console.log(error));
                    });
            }
        }
    }
</script>

<style scoped>

</style>