<template>
  <h1>Hello</h1>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'IndexPage',

  methods: {
    ...mapActions(['getUser'])
  },

  mounted() {
    this.getUser()
  }
}
</script>
