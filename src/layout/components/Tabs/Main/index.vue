<template>
  <div id="main" ref="main" :style="{transform: transforChange()}">
    <div class="dp-bottom-container">
      <div class="top-pic" />
      <div id="left-container">
        <duty-arrangement />
        <energy-status />
        <operation-watch />
      </div>

      <div id="middle-container">
        <div class="project-name">木林森建筑能源系统运管平台驾驶舱</div>
        <div class="safe-day">
          <div class="line" />
          安全运行<span>{{ safeDays }}</span>天
          <div class="line" />
        </div>

        <gua-pai />
      </div>

      <div id="right-container">
        <fault-warning ref="faultWarning" :cursor="cursor" />
        <electric-rank />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchSafeDays } from '@/api/main/guapai'
import DutyArrangement from '@/views/project/main/dutyArrangement'
import EnergyStatus from '@/views/project/main/energyStatus'
import OperationWatch from '@/views/project/main/operationWatch'
import FaultWarning from '@/views/project/main/faultWarning'
import ElectricRank from '@/views/project/main/electricRank'
import GuaPai from '@/views/project/main/guaPai'
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
      cursor: this.getFontSizeCursor(),
      safeDays: 0
    }
  },
  computed: {

  },
  mounted() {
    this.getSafeDays()
    window.onresize = () => {
      this.fontSizeResize()
      /* this.$refs.faultWarning.resizeCharts() */
    }
  },
  methods: {
    transforChange: function() {
      var totalWidth = document.documentElement.clientWidth
      var totalHeight = document.documentElement.clientHeight

      let navHeight = 0
      if (document.getElementsByClassName('navbar')[0] !== undefined) {
        navHeight = document.getElementsByClassName('navbar')[0].offsetHeight
      } else {
        return
      }

      var newHeight = totalHeight - navHeight
      var newWidth = totalWidth

      var newCursor = newHeight / newWidth

      if (newCursor > 0.5625) {
        const newHeight1 = newWidth * 0.5625
        const translateY = (newHeight - newHeight1) * 0.5
        const scale = newHeight / newHeight1
        return 'translateY(' + translateY + 'px) scale(1,' + scale + ')'
      } else if (newCursor < 0.5625) {
        const newHeight1 = newWidth * 0.5625
        const scale = newHeight / newHeight1
        const translateY = (newHeight1 - newHeight) * (-0.5)
        return 'translateY(' + translateY + 'px) scale(1,' + scale + ')'
      } else {
        return 'scale(1,1) translateX(0) translateY(0)'
      }
    },
    handleClick(tab, event) {

    },
    getFontSizeCursor() {
      return document.documentElement.clientWidth / 1920
    },
    fontSizeResize() {
      var totalWidth = document.documentElement.clientWidth
      var totalHeight = document.documentElement.clientHeight

      let navHeight = 0
      if (document.getElementsByClassName('navbar')[0] !== undefined) {
        navHeight = document.getElementsByClassName('navbar')[0].offsetHeight
      } else {
        return
      }

      var newHeight = totalHeight - navHeight
      var newWidth = totalWidth

      var newCursor = newHeight / newWidth

      if (newCursor > 0.5625) {
        const newHeight1 = newWidth * 0.5625
        const translateY = (newHeight - newHeight1) * 0.5
        const scale = newHeight / newHeight1
        this.$refs.main.style.transform = 'translateY(' + translateY + 'px) scale(1,' + scale + ')'
      } else if (newCursor < 0.5625) {
        const newHeight1 = newWidth * 0.5625
        const scale = newHeight / newHeight1
        const translateY = (newHeight1 - newHeight) * (-0.5)
        this.$refs.main.style.transform = 'translateY(' + translateY + 'px) scale(1,' + scale + ')'
      } else {
        this.$refs.main.style.transform = 'scale(1,1) translateX(0) translateY(0)'
      }
    },
    getSafeDays() {
      fetchSafeDays().then((res) => {
        this.safeDays = res.safeDays
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
#main{
  min-width: 1024px;
  min-height: 576px;
  position: relative;
  height: 56.25vw;
  user-select: none;
  display: flex;
  background-image: url('../../../../assets/main/backgroundPic.png');
  background-color: #020A31;
  background-size: contain;
  background-repeat: no-repeat;
  .dp-bottom-container{
    width: 100%;
    position: relative;
    height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    z-index: 1000;
    .top-pic{
      background-image:url('../../../../assets/main/top.png');
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -1;
    }
    #left-container{
      width: 23vw;
      height: 100%;
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      padding-left: 1vw;
      padding-top: 2.5vw;
      padding-bottom: 1vw;
    }
    #middle-container{
      width: 0;
      height: 100%;
      flex-grow: 1;
      flex-shrink: 1;
      padding-left: 1vw;
      padding-bottom: 1vw;
      padding-right: 0.9vw;
      display: flex;
      flex-direction: column;
      position: relative;
      .line{
        height: 0.05vw;
        width: 22vw;
        position: relative;
        left: 15vw;
        background: linear-gradient(to right, rgba(61,59,234,0),rgba(61,59,234,0.5),rgba(61,59,234,1), rgba(127,126,254,1)
                                  , rgba(78,148,255,1), rgba(93,91,244,1), rgba(61,59,234,1), rgba(61,59,234,0.5), rgba(61,59,234,0));
      }
      .project-name{
        font-size: 1.5vw;
        color: #ADC6FF;
        letter-spacing: 0.1vw;
        text-align: center;
        line-height: 3vw;
        flex-shrink: 0;
        flex-grow: 0;
        height: 3vw;
      }
      .safe-day{
        font-family: MicrosoftYaHeiUI;
        font-size: 1.3vw;
        color: #7F7DFE;
        letter-spacing: 1.04px;
        text-align: center;
        line-height: 3vw;
        position: relative;
        margin-top: 2vw;
        flex-shrink: 0;
        flex-grow: 0;
        height: 3vw;
      }
    }
    #right-container{
      width: 23vw;
      height: 100%;
      padding-right: 1vw;
      padding-top: 2.5vw;
      padding-bottom: 1vw;
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
    }
  }
}
img{
  position: absolute;
}
</style>
