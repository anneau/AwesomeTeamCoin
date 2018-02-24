<template>
    <div class="box">
        <article class="media">
            <div class="media-content">
                <div class="content has-text-centered">
                    <h3>Start Trade</h3>
                    <a class="button is-primary is-outlined is-medium" @click.stop="submit">Start Trade!</a>
                </div>
            </div>
        </article>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { Getter } from 'vuex-class'
    import Web3 from 'web3'

    @Component
    export default class UnlockAccount extends Vue {
        address = ''
        password = ''
        @Getter('getWeb3Store') web3 : Web3

        async submit() {
            this.$router.push('/trading')
        }
    }
</script>
