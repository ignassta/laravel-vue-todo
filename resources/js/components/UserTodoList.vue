<template>

    <div class="col">
        <h1 class="font-weight-bold mt-4 mb-4">Todo list</h1>
        <div class="todo-holder" v-for="todo in todos">
            <div class="alert alert-secondary d-flex align-items-center justify-content-between" role="alert">
                <div>{{ todo.task }}</div>
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
        computed: {
            ...mapGetters(['todos'])
        }
    }
</script>

<style scoped>

</style>