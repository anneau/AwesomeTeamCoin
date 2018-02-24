<template>
    <div class="box">
        <article class="media">
            <div class="media-content">
                    <div class="content has-text-centered" v-if="generated">
                        <h3>Your Account : <span class="has-text-danger">DON'T FORGET</span></h3>
                        <div class="has-text-centered">
                            <p>Address : {{ response.address }}</p>
                            <p>PrivateKey : {{ response.privateKey }}</p>
                        </div>
                    </div>
                    <div class="content has-text-centered" v-else>
                        <h3>Create Ethereum Account</h3>
                        <a class="button is-primary is-outlined is-medium" @click.stop="submit">Submit</a>
                    </div>
            </div>
        </article>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { Getter } from 'vuex-class'
    import Web3 from '../../../web3/packages/web3'

    @Component
    export default class CreateAccount extends Vue {
        response = {
            address: '',
            privateKey: ''
        }
        generated = false
        @Getter('getWeb3Store') web3 : Web3

        async submit () {
            this.response = await this.web3.eth.accounts.create()
            console.log(this.response)
            this.generated = true
        }
    }
</script>
