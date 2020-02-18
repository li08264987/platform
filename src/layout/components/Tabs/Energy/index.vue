<!--  -->
<template>
  <div>
    <sidebar class="sidebar-container" />
    <app-main />
  </div>
</template>

<script>
import AppMain from '@/layout/components/AppMain'
import Sidebar from '@/layout/components/EnergySidebar/index'
export default {
  components: { AppMain, Sidebar },
  data() {
    return {
    }
  },

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
