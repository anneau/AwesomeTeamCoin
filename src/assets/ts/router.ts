import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Balances from './views/Balances.vue'
import Trade from './views/Trade.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/balances',
            component: Balances,
            name: 'balances'
        },
        {
            path: '/trade',
            component: Trade,
            name: 'trade'
        }
    ],
    linkExactActiveClass: 'is-active'
})
