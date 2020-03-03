<template>
  <span ref="countup" />
</template>

<script>
import CountUp from 'countup.js'
export default {
  data() {
    return {
      numAnim: null
    }
  },
  mounted() {
    this.initCountUp()
  },
  methods: {
    initCountUp() {
      console.log('hehe')
      this.numAnim = new CountUp(this.$refs.countup, 0, 2017)
      this.numAnim.start()
    }
  }
}
</script>
