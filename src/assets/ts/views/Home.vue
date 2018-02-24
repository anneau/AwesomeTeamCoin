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
                <div class="columns forms">
                    <unlock-account class="column is-4 is-offset-1"></unlock-account>
                    <p class="column is-2 or">OR</p>
                    <create-account class="column is-4"></create-account>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Web3 from 'web3'
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { Getter, Action } from 'vuex-class'
    import NavBar from './layouts/NavBar.vue'
    import UnlockAccount from '../components/UnlockAccount.vue'
    import CreateAccount from '../components/CreateAccount.vue'

    @Component<Home>({
        components: {
            'nav-bar': NavBar,
            'unlock-account': UnlockAccount,
            'create-account': CreateAccount
        }
    })
    export default class Home extends Vue {
        @Getter('getWeb3Store') web3 : Web3
        @Action setWeb3Store: any

        async created() {
            await this.setWeb3Store()
        }
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
