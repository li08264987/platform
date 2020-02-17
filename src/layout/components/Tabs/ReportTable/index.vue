<!--  -->
<template>
  <div class="report-contaiter">
    <sidebar class="sidebar-container" />
    <app-main />
  </div>
</template>

<script>
import { AppMain, Sidebar } from '../../../components'

export default {
  components: { AppMain, Sidebar },
  data() {
    return {}
  },

  computed: {

  },

  mounted: {},

  methods: {}
}
</script>
<style lang='scss' scoped>
.report-contaiter {
  widows: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>
