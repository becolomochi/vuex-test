<template lang="pug">
#inputs
  p
    input(type="text" v-model="input")
  p
    button(@click="reverseText") reverse
</template>

<script>
export default {
  name: 'inputs',
  computed: {
    input() {
      return this.$store.state.input
    }
  },
  methods: {
    reverseText() {
      this.$store.commit('reverseText')
    }
  }  
}
</script>
