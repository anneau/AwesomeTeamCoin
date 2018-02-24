import Web3 from 'web3'

export const getWeb3 = async function () {
    let web3 : Web3 | undefined

    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider)

        console.log('Injected web3 detected.')
    } else {
        let provider = new Web3.providers.HttpProvider('http://localhost:8545')

        web3 = new Web3(provider)

        console.log('No web3 instance injected, using Local web3.')
    }
    return web3
}
