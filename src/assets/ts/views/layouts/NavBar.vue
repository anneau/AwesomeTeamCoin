<template>
    <div class="hero-head">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <router-link to="/">
                        AwesomeTeamCoin
                    </router-link>
                </div>
                <div id="navbarMenuHeroA" class="navbar-menu">
                    <div class="navbar-end">
                        <router-link to="/" class="navbar-item">
                            Home
                        </router-link>
                        <router-link to="/trade" class="navbar-item">
                            Trade
                        </router-link>
                        <router-link to="/balances" class="navbar-item">
                            Balances
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({})
    export default class NavBar extends Vue {
    }
</script>

<style scoped lang="scss">
    .navbar-brand {
        font-size: 40px;
    }
</style>
