<template>
  <div class="EnergyKY-main">
    <ul class="tabBar">
      <li v-for="(item,index) in tabList" :key="index" :class="{active:index == tabIndex}" @click="tabChange(index)">
        <div v-if="index>0">{{ item }}</div>
        <div v-else class="tabItemWithDropdown">
          {{ item[tabIndex1] }}
          <i v-show="index==0" class="el-icon-caret-bottom" />
          <div v-show="showDownPanel" class="tabDownPanel" @click="dropdownClick()">{{ item[1-tabIndex1] }}</div>
        </div>
      </li>
    </ul>
    <div class="tabCon">
      <div v-for="(itemCon,index) in tabContents" v-show="index == tabIndex" :key="index">
        <div v-if="index>0">{{ itemCon }}</div>
        <div v-else>
          {{ itemCon[tabIndex1] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnergyKY',
  components: {

  },
  data() {
    return {
      tabList: [['能耗统计/能源树状图', '能耗统计/多维统计'], '能耗排序', '能耗指标', '能耗对比'],
      tabContents: [['能耗统计/能源树状图内容页', '能耗统计/多维统计内容页'], '能耗排序内容页', '能耗指标内容页', '能耗对比内容页'],
      tabIndex: 0,
      tabIndex1: 0,
      showDownPanel: false
    }
  },
  methods: {
    tabChange(index) {
      if (this.tabIndex !== index) {
        this.tabIndex = index
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
    dropdownClick() {
      this.tabIndex1 = 1 - this.tabIndex1
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
  bottom: -52px;
}
</style>
