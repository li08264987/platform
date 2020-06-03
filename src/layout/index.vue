<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <div :class="{'fixed-header':fixedHeader}">
      <navbar ref="refNavbar" :on-update="getTabId" />
    </div>
    <div :class="{hasTagsView:needTagsView,'sidebar-hide':sidebarHide}" class="main-container">
      <!--:is实现多个组件实现同一个挂载点-->
      <keep-alive>
        <component :is="currentView" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import {
  Navbar,
  TagsView,
  Main,
  Monitor,
  Energy,
  ReportTable,
  DataEntry,
  Diagnosis,
  Device,
  Smart,
  PlatSetting
} from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Navbar,
    TagsView,
    Main,
    Monitor,
    DataEntry,
    Energy,
    ReportTable,
    Diagnosis,
    Device,
    Smart,
    PlatSetting
  },
  mixins: [ResizeMixin],
  data() {
    return {
      currentView: 'Main',
      sidebarHide: true,
      needTagsView: false
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  mounted() {
    this.currentView = window.sessionStorage.getItem('currentView')
    if (this.currentView === null) {
      this.currentView = 'Main'
      this.needTagsView = false
      this.sidebarHide = true
    } else if (this.currentView === 'Main') {
      this.needTagsView = false
      this.sidebarHide = true
    } else {
      this.needTagsView = false
      this.sidebarHide = false
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    getTabId(data) {
      switch (data) {
        case 'Main':
          this.currentView = 'Main'
          this.needTagsView = false
          this.sidebarHide = true
          break
        case 'Monitor':
          this.currentView = 'Monitor'
          this.needTagsView = false
          this.sidebarHide = false
          break
        case 'Energy':
          this.currentView = 'Energy'
          this.needTagsView = false
          this.sidebarHide = false
          break
        case 'ReportTable':
          this.currentView = 'ReportTable'
          this.needTagsView = false
          this.sidebarHide = false
          break
        case 'Diagnosis':
          this.currentView = 'Diagnosis'
          this.needTagsView = false
          this.sidebarHide = false
          break
        case 'Device':
          this.currentView = 'Device'
          this.needTagsView = false
          this.sidebarHide = false
          break
        case 'Smart':
          this.currentView = 'Smart'
          this.needTagsView = false
          this.sidebarHide = false
          break
        case 'DataEntry':
          this.currentView = 'DataEntry'
          this.needTagsView = false
          this.sidebarHide = false
          break
        case 'PlatSetting':
          this.currentView = 'PlatSetting'
          this.needTagsView = false
          this.sidebarHide = false
          break
        default:
          this.currentView = 'Main'
          this.needTagsView = false
          this.sidebarHide = true
          break
      }
      window.sessionStorage.setItem('currentView', this.currentView)
    }
  }
}
</script>

<style>
#app .sidebar-hide {
  margin-left: 0 !important;
}
</style>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
.main-container{
  height: calc(100% - 104px) !important;
}
</style>
