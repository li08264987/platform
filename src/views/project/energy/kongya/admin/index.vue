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
      <el-form ref="form" :model="searchForm" label-width="120px">
        <el-form-item label="">
          <el-select v-model="searchForm.type" placeholder="选择类型" class="searchSelect">
            <el-option label="自定义" value="daterange" />
            <el-option label="按排班" value="1" />
            <el-option label="按年" value="year" />
            <el-option label="按月" value="month" />
            <el-option label="按周" value="week" />
            <el-option label="按日" value="date" />
          </el-select>
          <el-date-picker v-model="searchForm.date" :type="searchForm.dateType" placeholder="选择时间" />
          <el-input v-model="searchForm.searchText" placeholder="输入搜索内容" />
          <el-button type="primary" @click="onSearch">搜索</el-button>
          <el-button @click="onExport">导出</el-button>
        </el-form-item>
      </el-form>
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
      currentView: 'energyTree',
      searchForm: {
        type: 'daterange',
        date: '',
        dateType: 'daterange',
        searchText: ''
      }
    }
  },
  computed: {
    selectType() {
      return this.searchForm.type
    }
  },
  watch: {
    selectType(val) {
      if (val !== '1') {
        this.searchForm.dateType = val
      }
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
    },
    onSearch() {
      console.log(this.searchForm)
    },
    onExport() {
      console.log(this.searchForm)
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
  height: calc(100vh - 84px);
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
.tabDownPanelItem:hover {
    background-color: #eee;
}
form.el-form {
  display: flex;
  position: absolute;
  top: 0;
  right: 20px;
  height: 50px;
  justify-content: center;
  align-items: center;
}
.el-form-item {
  margin-bottom: 0;
}
.el-input {
  width: 160px;
}
.el-button+.el-button {
  margin-left: 0;
}
</style>

<style lang="scss">
  .searchSelect.el-select>.el-input {
    width: 90px;
  }
  .el-date-editor--daterange.el-input__inner {
    width: 260px;
  }
</style>
