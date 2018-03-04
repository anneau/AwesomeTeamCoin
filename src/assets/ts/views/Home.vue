<template>
    <section class="hero is-primary is-fullheight">
        <nav-bar></nav-bar>
        <div class="hero-body has-text-centered">
            <div class="container">
                <h1 class="title">
                    Love Unstoppable Applications?
                </h1>
                <h2 class="subtitle">
                    We do too.
                </h2>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import NavBar from './layouts/NavBar.vue'

    @Component<Home>({
        components: {
            'nav-bar': NavBar,
        }
    })
    export default class Home extends Vue {

    }
</script>

<style scoped lang="scss">
    .box {
        margin-bottom: 0;
    }
    .title {
        font-size: 50px;
    }
    .subtitle {
        font-size: 40px;
    }
    .forms {
        margin-top: 30px;
    }
    .or {
        font-size: 40px;
        margin-top: 70px;
    }
</style>
