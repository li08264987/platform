<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <div :class="{'fixed-header':fixedHeader}">
      <navbar ref="refNavbar" :on-update="getTabId" />
      <tags-view v-if="needTagsView" />
    </div>
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <!--:is实现多个组件实现同一个挂载点-->
      <component :is="currentView" />
    </div>
  </div>
</template>

<script>
import {
  Navbar,
  Main,
  Monitor,
  Energy,
  ReportTable,
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
    Main,
    Monitor,
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
      currentView: 'Main'
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
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
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    getTabId(data) {
      console.log('获得了子组件的ID：' + data)
      switch (data) {
        case 'Main':
          this.currentView = 'Main'
          break
        case 'Monitor':
          this.currentView = 'Monitor'
          break
        case 'Energy':
          this.currentView = 'Energy'
          break
        case 'ReportTable':
          this.currentView = 'ReportTable'
          break
        case 'Diagnosis':
          this.currentView = 'Diagnosis'
          break
        case 'Device':
          this.currentView = 'Device'
          break
        case 'Smart':
          this.currentView = 'Smart'
          break
        case 'PlatSetting':
          this.currentView = 'PlatSetting'
          break
        default:
          this.currentView = 'Main'
          break
      }
    }
  }
}
</script>

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
</style>
