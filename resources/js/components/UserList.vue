<template>

    <div class="col">
        <h1 class="font-weight-bold mt-4 mb-4">Users</h1>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <button class="btn btn-danger" @click="deleteUser(user)">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Users",
        mounted() {
            this.$store.dispatch('fetchUsers')
        },
        methods: {
            deleteUser(user) {
                let response = confirm('Do you really want to delete user ' + user.name + '?');
                if(response) {
                    this.$store.dispatch('deleteUser', user)
                }
            }
        },
        computed: {
            ...mapGetters(['users'])
        }
    }
</script>

<style scoped>

</style>