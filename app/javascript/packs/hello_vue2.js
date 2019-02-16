import Vue from 'vue/dist/vue.esm'
import App from './app2.vue'

document.body.appendChild(document.createElement('hello'))

new Vue({
  el: '#app',
  data: {
    message: 'World'
  },
  methods: {
    update() {
      this.message = 'Vue.js'
    }
  }
})
