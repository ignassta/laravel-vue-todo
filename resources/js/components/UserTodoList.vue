<template>

    <div class="col">
        <h1 class="font-weight-bold mt-4 mb-4">Todo list</h1>
        <div class="todo-holder">
            <div class="todo alert d-flex align-items-center justify-content-between"
                 role="alert"
                 v-for="todo in todos"
                 @click="updateUserTodo(todo)"
                 v-bind:class="getStatus(todo)">
                <div>{{ todo.task }}</div>
                <div></div>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "ToDoList",
        mounted() {
            this.$store.dispatch('fetchUserTodos')
        },
        methods: {
            updateUserTodo(todo) {
                this.$store.dispatch('updateUserTodo', todo)
            },
            getStatus(todo) {
                if(todo.status == 1) {
                    return 'alert-secondary'
                } else if(todo.status == 2) {
                    return 'alert-warning'
                } else {
                    return 'alert-success'
                }
            }
        },
        computed: {
            ...mapGetters(['todos'])
        }
    }
</script>

<style lang="scss"scoped>

.todo-holder {

    .todo {

        &:hover {
            cursor: pointer;
        }
    }
}
</style>