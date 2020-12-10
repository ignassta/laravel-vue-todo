<template>

    <div class="col">
        <div class="todo-create-form d-flex justify-content-center align-items-center">
            <form action="">
                <h1 class="font-weight-bold mb-3">Create new ToDo task</h1>
                <div class="form-group">
                    <input type="text" name="task" placeholder="Task" v-model="todo.task" class="form-control">
                </div>
                <div class="form-group">
                    <select name="user" class="form-control" v-model="todo.user">
                        <option value="">Select user</option>
                        <option v-for="user in users" v-bind:value="user.id">
                            {{ 'ID: ' + user.id + ', email: ' + user.email }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-block btn-primary" @click.prevent="storeTodo(todo)">Submit</button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "CreateToDo",
        data() {
            return {
                todo: {
                    task: '',
                    user: '',
                },
            }
        },
        mounted() {
            this.$store.dispatch('fetchUsers')
        },
        methods: {
            storeTodo(todo) {
                this.$store.dispatch('storeTodo', todo)
            },
        },
        computed: {
            ...mapGetters(['users'])
        }
    }
</script>

<style lang="scss" scoped>

.todo-create-form {
    height: calc(100vh - 60px);

    input, select {
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