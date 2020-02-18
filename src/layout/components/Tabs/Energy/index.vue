<!--  -->
<template>
  <div>
    <sidebar class="sidebar-container" />
    <app-main />
  </div>
</template>

<script>
import AppMain from '@/layout/components/AppMain'
import Sidebar from '@/layout/components/EnergySidebar'
import { mapGetters } from 'vuex'
export default {
  components: {
    AppMain,
    Sidebar
  },
  data() {
    return {
    }
  },

  computed: {
    ...mapGetters(['sidebar', 'energySidebar'])
  },

  mounted: {},

  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}

</script>
<style lang='scss' scoped>
.hamburger-container {
  line-height: 50px;
  height: 50px;
  z-index: 1005;
  position: absolute;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>
