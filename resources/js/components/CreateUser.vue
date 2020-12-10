<template>

    <div class="col">
        <div class="user-create-form d-flex justify-content-center align-items-center">
            <form action="" @submit="createUser(user)">
                <h1 class="font-weight-bold mb-3">Create new user</h1>
                <div class="form-group">
                    <input type="text" placeholder="Name" v-model="user.name" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Email" v-model="user.email" class="form-control">
                </div>
                <div class="form-group position-relative">
                    <input :type="pswVisible ? 'text' : 'password'" placeholder="password" v-model="user.password" class="form-control">
                    <button class="psw-btn btn position-absolute" @click.prevent="togglePswVisibility">
                        <i class="fa" :class="pswVisible ? 'fa-eye-slash' : 'fa-eye'"></i>
                    </button>
                </div>
                <div class="form-group">
                    <button class="btn btn-block btn-primary" @click.prevent="storeUser(user)">Submit</button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    export default {
        name: "CreateUser",
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    password: '',
                },
                pswVisible: false,
            }
        },
        methods: {
            storeUser(user) {
                this.$store.dispatch('storeUser', user)
            },
            togglePswVisibility() {
                this.pswVisible = !this.pswVisible
            }
        },
    }
</script>

<style lang="scss" scoped>

    .user-create-form {
        height: calc(100vh - 60px);

        input {
            width: 100%;
        }
        .psw-btn {
            top: 0;
            right: 0;

            &:focus {
                box-shadow: unset;
            }
            i {
                font-size: 25px;
            }
        }
    }

</style>