<!--  -->
<template>
  <div class="smartTable-contaiter">
    <sidebar class="sidebar-container" />
    <app-main />
  </div>
</template>

<script>
import { AppMain } from '../../../components'
import Sidebar from '@/layout/components/Tabs/SmartTable/smartTableSlidebar.vue'
import { mapGetters } from 'vuex'

export default {
  components: { AppMain, Sidebar },
  data() {
    return {}
  },

  computed: {
    ...mapGetters(['sidebar', 'smartTableSlidebar'])
  },

  beforeCreate() {
    this.$router.push({ path: '/smartTable' })
  },

  destroyed() {
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>
<style lang='scss' scoped>
.smartTable-contaiter {
  widows: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: row;
}
</style>
