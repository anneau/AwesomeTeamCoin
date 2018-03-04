import './bootstrap'
import Vue from 'vue'
import Component from 'vue-class-component'
import router from './router'

@Component<App>({
    router
})
class App extends Vue {

}

const vm = new App()

vm.$mount('#app')
