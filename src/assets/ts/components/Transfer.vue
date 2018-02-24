<template>
    <div class="box">
        <article class="media">
            <div class="media-content">

                <div class="content has-text-centered">
                    <h3>Transfer</h3>
                    <div class="field has-text-left">
                        <label class="label">Your Address</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Input your address" v-model="senderAddress">
                        </div>
                    </div>
                    <div class="field has-text-left">
                        <label class="label">Receiver Address</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Input receiver address" v-model="receiverAddress">
                        </div>
                    </div>
                    <div class="field has-text-left">
                        <label class="label">Amount of Sending AwesomeCoin</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Input receiver address" v-model="amount">
                        </div>
                    </div>
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
    import Web3 from 'web3'

    @Component
    export default class CreateAccount extends Vue {
        senderAddress = ''
        receiverAddress = ''
        amount = 0
        @Getter('getWeb3Store') web3 : Web3

        async submit () {

        }
    }
</script>
