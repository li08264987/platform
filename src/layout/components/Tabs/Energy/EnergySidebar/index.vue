<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <hamburger
        id="hamburger-energy-container"
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :default-openeds="['/energySystem','/energyChejian']"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in energy_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from '@/layout/components/Sidebar/SidebarItem'
import variables from './sidbar.scss'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Hamburger,
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'energy_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebar-container {
    text-shadow: 0 0 0;
  }
  .sidebar-container .is-active>.el-submenu__title {
    color: '#304156';
  }
  .sidebar-container .submenu-title-noDropdown:hover,
  .sidebar-container .el-submenu__title:hover {
    background-color: rgba(40, 87, 255, 0.1) !important;
  }
  .sidebar-container .nest-menu .el-submenu>.el-submenu__title,
  .sidebar-container .el-submenu .el-menu-item {
    background-color: #fff;
  }
  .sidebar-container .submenu-title-noDropdown:hover,
  .sidebar-container .el-submenu__title:hover {
    background-color: rgba(40, 87, 255, 0.1) !important;
  }

  .hamburger-container {
    line-height: 50px;
    height: 50px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
</style>
