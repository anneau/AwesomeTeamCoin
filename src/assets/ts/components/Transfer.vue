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
                        <label class="label">Amount</label>
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
    import AwesomeTeamCoin from '../../../../build/contracts/AwesomeTeamCoin.json'

    @Component
    export default class CreateAccount extends Vue {
        senderAddress = '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'
        receiverAddress = '0xf17f52151EbEF6C7334FAD080c5704D77216b732'
        amount = 10

        async submit () {
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
            console.log(instance)
            const response = await instance.transfer(this.receiverAddress, this.amount, { from: this.senderAddress })
            console.log(response)
        }
    }
</script>
