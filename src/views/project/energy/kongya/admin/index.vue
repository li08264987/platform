<template>
  <div class="EnergyKY-main">
    <ul class="tabBar">
      <li v-for="(item,index) in tabItems" :key="index" :class="{active:index == tabIndex}" @click="tabChange(index)">
        <div>{{ item.title }}</div>
      </li>
    </ul>
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
ul.tabBar li{
  list-style: none;
  display: inline-block;
  border-right: 1px solid #F0F2F5;
  height: 50px;
  line-height: 50px;
  width: 220px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  color: #111934;
}
ul.tabBar li.active {
    background-color: #E2E4EA;
    text-shadow: 0 0 0;
}
ul.tabBar {
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
