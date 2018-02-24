import Web3 from 'web3'
import * as types from './mutation-types'
import { getWeb3 } from "./api/getWeb3";

const state = {
    web3: Web3
}

const getters = {
    getWeb3Store: (state :any) => state.web3
}

const actions = {
    async setWeb3Store ({ commit } : any) {
        const web3 = await getWeb3()
        commit(types.SET_WEB3, web3)
    }
}

const mutations = {
    [types.SET_WEB3] (state : any, web3 : Web3) {
        state.web3 = web3
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
