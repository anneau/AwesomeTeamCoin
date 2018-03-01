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
                                        <th class="has-text-centered">{{ showingAccount.address }}</th>
                                        <th class="has-text-centered">{{ showingAccount.balances }}</th>
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
    import NavBar from './layouts/NavBar.vue'
    import AwesomeTeamCoin from '../../../../build/contracts/AwesomeTeamCoin.json'

    interface Account {
        address: string,
        balances: number
    }

    @Component({
        components: {
            'nav-bar': NavBar
        }
    })
    export default class Balances extends Vue {
        showingAccounts : any[] = []

        async created () {
            let accounts = await window['web3'].eth.getAccounts()
            const contract = require('truffle-contract')
            const atc = contract(AwesomeTeamCoin)
            atc.setProvider(window.web3.currentProvider)
            if (typeof atc.currentProvider.sendAsync !== "function") {
                atc.currentProvider.sendAsync = function() {
                    return atc.currentProvider.send.apply(
                        atc.currentProvider, arguments
                    );
                };
            }
            const instance = await atc.deployed()
            for (let account of accounts) {
                const balances = await instance.balanceOf(account)
                let accountData = {} as Account
                accountData.address = account
                accountData.balances = balances.c[0]
                this.showingAccounts.push(accountData)
            }
        }
    }
</script>

<style scoped lang="scss">
    .title {
        font-size: 50px;
    }
</style>
