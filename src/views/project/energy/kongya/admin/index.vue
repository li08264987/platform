<template>
  <div class="EnergyKY-main">
    <el-tabs v-model="currentView" type="card" class="tabBar" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in tabItems" :key="index" :label="item.title" :name="item.name" />
    </el-tabs>
    <el-form ref="form" :model="searchingData" label-width="120px" class="energy-search-form">
      <el-form-item label="">
        <el-date-picker v-model="searchingData.date" type="datetimerange" value-format="yyyy-MM-dd HH:00:00" placeholder="选择时间" />
        <el-input v-show="currentView==='energyDetail'" v-model="searchingData.text" placeholder="输入搜索内容" style="width: 280px;margin-left:5px;" />
        <el-button class="blue-btn" type="primary" @click="onSearch()">查询</el-button>
        <el-button class="white-btn" @click="onExport()">导出</el-button>
      </el-form-item>
    </el-form>
    <div class="tabCon">
      <component :is="currentView" :search-data="searchData" />
    </div>
  </div>
</template>

<script>
import energyStatis from './components/EnergyStatis'
import energyDetail from './components/EnergyDetail'

export default {
  name: 'EnergyKY',
  components: {
    energyStatis,
    energyDetail
  },
  data() {
    return {
      tabItems: [{
        name: 'energyStatis',
        title: '能耗总览'
      }, {
        name: 'energyDetail',
        title: '能耗详情'
      }],
      tabIndex: 0,
      currentView: 'energyStatis',
      searchingData: {
        date: ['', ''],
        text: ''
      },
      searchData: {
        date: ['', ''],
        text: ''
      }
    }
  },
  methods: {
    tabChange(index) {
      if (this.tabIndex !== index) {
        this.tabIndex = index
        this.currentView = this.tabItems[index].name
        this.searchingData = {
          date: ['', ''],
          text: ''
        }
        this.searchData = {
          date: ['', ''],
          text: ''
        }
      }
    },
    handleClick(tab, event) {
    },
    onSearch() {
      if (this.currentView !== 'energyDetail') {
        this.searchingData.text = ''
      }
      if (!this.searchingData.date) this.searchingData.date = ['', '']
      this.searchData.date = JSON.parse(JSON.stringify(this.searchingData.date))
    },
    onExport() {

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
.blue-btn {
  color: white;
  height: 32px;
  padding: 0 20px;
  background:rgba(40,87,255,1);
  border-radius:4px;
  margin-left: 5px;
}
.white-btn {
  height: 32px;
  padding: 0 20px;
  margin-left: 5px;
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
  .energy-search-form {
    position: absolute;
    z-index: 99999;
    right: 15px;
    top: 8px;
  }
  .energy-search-form .el-form-item__content {
    display: flex;
    align-items: center;
  }
  .energy-search-form .el-form-item {
    margin-bottom: 0;
  }
</style>
