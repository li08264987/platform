<template>
  <div id="main">
    <!-- <svg id="backgroud" viewBox="0 0 1920 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" v-html="html" /> -->
    <img src="@/assets/main/运营看板bg.png" style="positon:absolute">
    <img src="@/assets/main/顶部xh.png" alt="">
    <img src="@/assets/main/运行时间xh.png" alt="" style="top: 8.5%;left: 36%;">
    <div id="left-container">
      <duty-arrangement />
      <energy-status />
      <operation-watch />
    </div>

    <div id="middle-container">
      <div class="project-name">木林森建筑能源系统运管平台驾驶舱</div>
      <div class="safe-day">安全运行<span>234</span>天</div>
      <gua-pai />
    </div>

    <div id="right-container">
      <fault-warning />
      <electric-rank />
    </div>
  </div>
</template>

<script>
import backgroud from './backgroud.js'
import DutyArrangement from './dutyArrangement'
import EnergyStatus from './energyStatus'
import OperationWatch from './operationWatch'
import FaultWarning from './faultWarning'
import ElectricRank from './electricRank'
import GuaPai from './guaPai'
export default {
  name: 'Main',
  components: {
    DutyArrangement,
    EnergyStatus,
    OperationWatch,
    FaultWarning,
    ElectricRank,
    GuaPai
  },
  data() {
    return {
      html: backgroud
    }
  },
  mounted() {
  },
  methods: {
    handleClick(tab, event) {

    }
  }
}
</script>

<style lang='scss' scoped>
#main{
  transform: translateY(-81px) scale(1,0.84);
  min-width: 1024px;
  position: relative;
  display: flex;
  flex-direction: row;
  height: 1020px;
}
img{
  position: absolute;
}
#left-container{
  position: relative;
  color: white;
  width: 24%;
  display: flex;
  flex-direction: column;
}
#right-container{
  position: relative;
  color: white;
  width: 24%;
}
#middle-container{
  position: relative;
  width:52%;
}
#middle-container {
    .project-name{
    font-size: 26px;
    color: #ADC6FF;
    letter-spacing: 3.92px;
    text-align: center;
    line-height: 62px;
  }
  .safe-day{
    font-family: MicrosoftYaHeiUI;
    font-size: 24px;
    color: #7F7DFE;
    letter-spacing: 1.04px;
    text-align: center;
    line-height: 26px;
        position: relative;
    top: 33px;
  }
  }

</style>
