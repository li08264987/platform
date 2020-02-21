<template>
  <div class="EnergyKY-main">
    <ul class="tabBar">
      <li v-for="(item,index) in tabItems" :key="index" :class="{active:index == tabIndex}" @click="tabChange(index)">
        <div v-if="index>0">{{ item.title }}</div>
        <div v-else class="tabItemWithDropdown">
          {{ item.title }}/{{ item.children[tabIndex1].title }}
          <i v-show="index==0" class="el-icon-caret-bottom" />
          <div v-show="showDownPanel" class="tabDownPanel">
            <div
              v-for="(childItem,cIndex) in item.children"
              v-show="cIndex!=tabIndex1"
              :key="cIndex"
              class="tabDownPanelItem"
              @click="dropdownClick(cIndex, childItem.name)"
            >
              {{ childItem.title }}
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="tabCon">
      <component :is="currentView" />
    </div>
  </div>
</template>

<script>
import energyTree from './components/EnergyTree'
import energyDimensions from './components/EnergyDimensions'
import energySort from './components/EnergySort'
import energyStandard from './components/EnergyStandard'
import energyCompare from './components/EnergyCompare'
import energyRealtime from './components/EnergyRealtime'
import energyOrigin from './components/EnergyOrigin'

export default {
  name: 'EnergyKY',
  components: {
    energyTree,
    energyDimensions,
    energySort,
    energyStandard,
    energyCompare,
    energyRealtime,
    energyOrigin
  },
  data() {
    return {
      tabItems: [{
        name: 'energyStatis',
        title: '能耗统计',
        children: [{
          name: 'energyTree',
          title: '能源树状图'
        }, {
          name: 'energyDimensions',
          title: '多维统计'
        }, {
          name: 'energyRealtime',
          title: '逐时报表'
        }, {
          name: 'energyOrigin',
          title: '能源报表'
        }]
      }, {
        name: 'energySort',
        title: '能耗排序'
      }, {
        name: 'energyStandard',
        title: '能耗指标'
      }, {
        name: 'energyCompare',
        title: '能耗对比'
      }],
      tabIndex: 0,
      tabIndex1: 0,
      showDownPanel: false,
      currentView: 'energyTree'
    }
  },
  methods: {
    tabChange(index) {
      if (this.tabIndex !== index) {
        this.tabIndex = index
        if (index === 0) {
          this.currentView = this.tabItems[index].children[this.tabIndex1].name
        } else {
          this.currentView = this.tabItems[index].name
        }
        if (this.showDownPanel) this.showDownPanel = false
      } else {
        if (index === 0) {
          if (this.showDownPanel) this.showDownPanel = false
          else this.showDownPanel = true
        } else {
          this.showDownPanel = false
        }
      }
    },
    dropdownClick(cIndex, cname) {
      this.tabIndex1 = cIndex
      this.currentView = cname
    }
  }
}
</script>

<style lang="scss" scoped>
.EnergyKY-main {
  padding: 0;
  background-color: rgb(240, 242, 245);
  position: relative;
}
ul.tabBar li{
  list-style: none;
  display: inline-block;
  border-right: 1px solid #F0F2F5;
  height: 50px;
  line-height: 50px;
  width: 260px;
  text-align: center;
  cursor: pointer;
}
ul.tabBar li.active {
    background-color: #F0F2F5;
}
ul.tabBar {
    padding: 0;
    margin: 0;
    background: #FFFFFF;
    box-shadow: 0 1px 8px 0 rgba(197,202,213,0.40);
}
.tabItemWithDropdown{
  position: relative;
}
.tabDownPanel {
  position: absolute;
  width: 100%;
  background-color: white;
  box-shadow: 3px 3px 8px 0 rgba(197,202,213,0.4);
  top: 52px;
}
</style>
