<template>

    <div class="col">
        <h1 class="font-weight-bold mt-4 mb-4">Users</h1>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Task</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="todo in todos">
                <td>{{ todo.id }}</td>
                <td>{{ todo.task }}</td>
                <td>
                    <button class="btn btn-danger" @click="deleteTodo(todo)">
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
        name: "ToDoListAdmin",
        mounted() {
            this.$store.dispatch('fetchTodos')
        },
        methods: {
            deleteTodo(todo) {
                let response = confirm('Do you really want to delete task "' + todo.task + '"?');
                if(response) {
                    this.$store.dispatch('deleteTodo', todo)
                }
            }
        },
        computed: {
            ...mapGetters(['todos'])
        }
    }
</script>

<style scoped>

</style>