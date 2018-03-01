import './bootstrap'
import Vue from 'vue'
import Component from 'vue-class-component'
import router from './router'
import store from './stores/index'

@Component<App>({
    router,
    store
})
class App extends Vue {

}

const vm = new App()

vm.$mount('#app')
