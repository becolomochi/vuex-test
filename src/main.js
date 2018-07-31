import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

// ストアの作成
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}

new Vue({
  el: '#app',
  store,
  components: { Counter },
  template: ` 
  <div class="app">
    <counter></counter>
  </div>
  `,
  render: h => h(App)
})
