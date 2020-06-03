<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key" ref="routerView" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppMain',
  components: {
  },
  mounted() {

  },
  destroyed() {
    if (!this.$refs.routerView &&
      this.$children.length > 0 &&
      this.$children[0].$children.length > 0 &&
      this.$children[0].$children[0].$children.length > 2 &&
      typeof this.$children[0].$children[0].$children[2].cancelAxios === 'function'
    ) {
      this.$children[0].$children[0].$children[2].cancelAxios()
    }
  },
  computed: {
    key() {
      return this.$route.path
    },
    ...mapGetters(['sidebar', 'energySidebar'])
  },
  methods: {
    cancelAxios: function() {
      if (typeof this.$refs.routerView.$children[0].cancelAxios === 'function') {
        this.$refs.routerView.$children[0].cancelAxios()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 70px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 70 = navbar + tags-view = 70 + 0 */
    height: calc(100vh - 70px);
  }

  .fixed-header+.app-main {
    padding-top: 70px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
