<template>
    <section class="hero is-primary is-fullheight">
        <nav-bar></nav-bar>
        <div class="hero-body has-text-centered">
            <div class="container">
                <h1 class="title">
                    Transactions
                </h1>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { mapGetters, mapActions } from 'vuex'
    import { Getter, Action } from 'vuex-class'
    import Web3 from 'web3'
    import NavBar from './layouts/NavBar.vue'

    @Component({
        components: {
            'nav-bar': NavBar
        }
    })
    export default class Transactions extends Vue {
        @Getter('getWeb3Store') web3 : Web3

        async created() {
            console.log(await this.web3.eth.getBlockNumber())
        }
    }
</script>

<style scoped lang="scss">
    .title {
        font-size: 50px;
    }
</style>
