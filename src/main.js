import botaoSimples from './components/HelloWorld.vue'

export default {
  install (Vue) {
    Vue.component('simple-button', botaoSimples)
  }
}
