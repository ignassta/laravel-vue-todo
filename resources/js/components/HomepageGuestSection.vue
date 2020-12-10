<template>

    <section class="homepage-section vh-100 d-flex justify-content-center align-items-center">
        <div class="content-holder">
            <h1>ToDo list</h1>
            <h2>made by: Ignas Staržinskis</h2>
            <h2>technologies used: PHP 7.3, Git, MySql, Laravel, Vue.js, Vuex, Vue router</h2>
            <div class="login-link-holder text-center mt-5">
                <a v-bind:href="href" class="btn btn-primary">Login</a>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "HomepageGuestSection",
        props: {
            href: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../sass/_variables.scss';

.homepage-section {

    h1 {
        font-weight: 700;
        font-size: 60px;
    }
    h2 {
        font-weight: 300;
        font-size: 18px;
        color: $color3;
    }
}

</style>