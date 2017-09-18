import Vue from 'vue'
import App from './components/App.vue'

// Mount the Vue.js application.
new Vue({
  el: '#app',
  render: h => h(App, {
    props: {
      propMessage: 'World'
    }
  })
})