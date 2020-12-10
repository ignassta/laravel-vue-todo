<template>

    <div class="col">
        <div class="user-edit-form d-flex justify-content-center align-items-center">
            <form action="">
                <h1 class="font-weight-bold mb-3">Edit user</h1>
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
                    <button class="btn btn-block btn-primary" @click.prevent="updateUser(user)">Submit</button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "EditUser",
        data () {
            return {
                userId: this.$route.params.id,
                pswVisible: false
            }
        },
        mounted() {
            this.$store.dispatch('editUser', this.userId);
        },
        methods: {
            togglePswVisibility() {
                this.pswVisible = !this.pswVisible
            },
            updateUser(user) {
                this.$store.dispatch('updateUser', user)
            }
        },
        computed: {
            ...mapGetters(['user']),
        }
    }
</script>

<style lang="scss" scoped>

.user-edit-form {
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