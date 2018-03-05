<template>
    <section class="hero is-primary is-fullheight">
        <nav-bar></nav-bar>
        <div class="hero-body has-text-centered">
            <div class="container">
                <div class="columns forms">
                    <transfer class="column is-4 is-offset-4"></transfer>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import NavBar from './layouts/NavBar.vue'
    import Transfer from '../components/Transfer.vue'

    @Component({
        components: {
            'nav-bar': NavBar,
            'transfer': Transfer
        },
    })
    export default class Trade extends Vue {

    }
</script>

<style scoped lang="scss">
    .title {
        font-size: 50px;
    }
</style>
