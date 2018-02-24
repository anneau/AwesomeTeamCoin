<template>
    <section class="hero is-primary is-fullheight">
        <nav-bar></nav-bar>
        <div class="hero-body has-text-centered">
            <div class="container">
                <div class="box">
                    <article class="media">
                        <div class="media-content">
                            <div class="content has-text-centered">
                                <h2>AwesomeTeamCoin</h2>
                                <table class="table is-bordered">
                                    <tbody>
                                    <tr><th class="has-text-centered">Address</th><th class="has-text-centered">Balances</th></tr>
                                    <tr v-for="showingAccount in showingAccounts">
                                        <th class="has-text-centered">{{ showingAccount }}</th>
                                        <th class="has-text-centered">OK</th>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { Getter, Action } from 'vuex-class'
    import NavBar from './layouts/NavBar.vue'
    import Web3 from 'web3'

    @Component({
        components: {
            'nav-bar': NavBar
        }
    })
    export default class Balances extends Vue {
        @Getter('getWeb3Store') web3 : Web3
        @Action('setWeb3Store') setWeb3 : any

        showingAccounts = {}

        async created () {
            await this.setWeb3()
            let accounts = await this.web3.eth.getAccounts()
            for (let account of accounts) {
                console.log(account)
            }
        }
    }
</script>

<style scoped lang="scss">
    .title {
        font-size: 50px;
    }
</style>
