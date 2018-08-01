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
    input: {
      get() {
        return this.$store.state.input
      },
      set(value) {
         this.$store.commit('updateInput', value)
      }
    }
  },
  methods: {
    reverseText() {
      this.$store.commit('reverseText')
    }
  }  
}
</script>
