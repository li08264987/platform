<!--  -->
<template>
  <div class="report-contaiter">
    <sidebar class="sidebar-container" />
    <app-main />
  </div>
</template>

<script>
import { AppMain } from '../../../components'
import Sidebar from '@/layout/components/Tabs/ReportTable/reportSildebar.vue'
import { mapGetters } from 'vuex'

export default {
  components: { AppMain, Sidebar },
  data() {
    return {}
  },

  computed: {
    ...mapGetters(['sidebar', 'reportSildebar'])
  },

  beforeCreate() {
    this.$router.push({ path: '/reportTable' })
  },

  destroyed() {
    this.$router.push({ path: '/' })
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
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
