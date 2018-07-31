<template lang="pug">
#counter
  p {{ count }}
  p
    button(@click="increment") +
    button(@click="decrement") -
</template>

<script>
export default {
  name: 'counter',
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  // actions
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>