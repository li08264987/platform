<template>
  <div class="EnergyKY-main">
    <el-tabs v-model="currentView" type="card" class="tabBar" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in tabItems" :key="index" :label="item.title" :name="item.name" />
    </el-tabs>
    <div class="tabCon">
      <component :is="currentView" />
    </div>
  </div>
</template>

<script>
import energyStatis from './components/EnergyStatis'
import energyDetail from './components/EnergyDetail'
import energyMain from './components/EnergyMain'

export default {
  name: 'EnergyKY',
  components: {
    energyStatis,
    energyDetail,
    energyMain
  },
  data() {
    return {
      tabItems: [{
        name: 'energyStatis',
        title: '能耗总览'
      }, {
        name: 'energyDetail',
        title: '能耗详情'
      }, {
        name: 'energyMain',
        title: '运行主机数据'
      }],
      tabIndex: 0,
      currentView: 'energyStatis'
    }
  },
  methods: {
    tabChange(index) {
      if (this.tabIndex !== index) {
        this.tabIndex = index
        this.currentView = this.tabItems[index].name
      }
    },
    handleClick(tab, event) {
    }
  }
}
</script>

<style lang="scss" scoped>
.EnergyKY-main {
  padding: 0;
  background-color: #f4f5f8;
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
  min-width: 1630px;
  overflow: auto;
}
.tabBar {
  padding: 0;
  margin: 0;
  background: #FFFFFF;
  box-shadow: 0 1px 8px 0 rgba(197,202,213,0.40);
  z-index: 1000;
}
.tabCon {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
    height:0;
}
</style>

<style lang="scss">
  .tabBar .el-tabs__header {
    margin: 0;
  }
  .tabBar.el-tabs--card>.el-tabs__header .el-tabs__item {
    font-size: 16px;
    height: 50px;
    line-height: 48px;
    padding: 0 30px;
  }
  .tabBar.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: #2D49FF;
    border-bottom-width: 2px;
  }
  .tabBar .el-tabs__item:hover,
  .tabBar .el-tabs__item.is-active {
    color: #2D49FF;
    text-shadow: 0 0 0;
  }
</style>
