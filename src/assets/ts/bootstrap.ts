import Web3 from 'web3'
import { getWeb3 } from './stores/api/getWeb3';

declare global {
    interface Window {
        web3: Web3
    }
}

window.web3 = getWeb3()

