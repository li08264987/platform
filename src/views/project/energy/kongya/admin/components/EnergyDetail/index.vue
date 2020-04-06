<template>
  <div class="detail-container">
    <el-button class="toggle-btn" @click="dataViewToggle">{{ currentText }}</el-button>
    <component :is="currentView" />
  </div>
</template>

<script>
import Tree from './Tree'
import Table from './Table'
export default {
  name: 'Energy',
  components: { Tree, Table },
  data() {
    return {
      currentView: 'Tree',
      currentText: '数据视图'
    }
  },
  methods: {
    dataViewToggle: function(evt) {
      if (this.currentView === 'Tree') {
        this.currentView = 'Table'
        this.currentText = '路由视图'
      } else {
        this.currentView = 'Tree'
        this.currentText = '数据视图'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail-container {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
  }
  .toggle-btn {
    position: absolute;
    top: 18px;
    right: 20px;
    color: white;
    height: 32px;
    padding: 0 20px;
    background:rgba(40,87,255,1);
    border-radius:4px;
    z-index: 99999;
  }
</style>
