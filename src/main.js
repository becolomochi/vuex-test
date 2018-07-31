import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    input: 'abc'
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    reverseText(state) {
      // state.input += 'aaaaa'
      state.input = state.input.split('').reverse().join('');
    }
  }
})

new Vue({
  el: '#app',
  // "store" オプションで指定されたストアは、全ての子コンポーネントに注入されます
  store,
  render: h => h(App)
})