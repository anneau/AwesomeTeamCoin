import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Transactions from './views/Transactions.vue'
import Balances from './views/Balances.vue'
import Trading from './views/Trading.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/transactions',
            component: Transactions,
            name: 'transactions'
        },
        {
            path: '/balances',
            component: Balances,
            name: 'balances'
        },
        {
            path: '/trading',
            component: Trading,
            name: 'trading'
        }
    ],
    linkExactActiveClass: 'is-active'
})
