<template>
  <div class="failure-warning">
    <div class="first-rows" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>{{ title }}报警信息</span>
      </div>
    </div>

    <div class="second-rows">
      <div id="warningPie" :style="{width: '16vw', height: '15vw', paddingLeft: '2.5vw'}">
        <pie-chart id="warningPie-System" :chart-data="pieChartData" :cursor="cursor" :sum="dealStatus.sum" />
      </div>
      <div class="legend-container">
        <div class="dealing">
          <div class="text">待处理故障</div>
          <div class="number">{{ dealStatus.dealing }}</div>
        </div>
        <div class="dealed">
          <div class="dealing">
            <div class="text">已处理故障</div>
            <div class="number">{{ dealStatus.dealed }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from './echart/PieChart'
import { getFaultWarningData } from '@/api/main/faultWarning'
export default {
  name: 'FaultWarning',
  components: {
    PieChart
  },
  props: {
    cursor: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      pieChartData: {
        data: null
      },
      barChartData: {},
      dealStatus: {
        dealing: null,
        dealed: null,
        sum: null
      },
      activeName: 'system'
    }
  },
  computed: {
    title() {
      var title = ''
      var currentView = this.$store.state.settings.currentView.value
      switch (currentView) {
        case 'ky':
          title = '空压'
          break
        case 'qd':
          title = '氢氮'
          break
        case 'zk':
          title = '真空'
          break
        case 'dl':
        case 'dianli':
          title = '电力'
          break
        default:
      }
      return title
    },
    currentSystem() {
      return this.$store.state.settings.currentView
    },
    mainTimeType() {
      return this.$store.state.settings.mainTimeType
    }
  },
  watch: {
    currentSystem: function(values) {
      var param = { value: values.value, timeType: this.$store.state.settings.mainTimeType }
      this.getFaultWarningDataSystem(param)
    },
    mainTimeType: function(params) {
      var param = { value: this.$store.state.settings.currentView.value, timeType: params }
      this.getFaultWarningDataSystem(param)
    }
  },
  mounted() {
    this.initFaultWarningData()
  },
  methods: {
    initFaultWarningData() {
      var param = { value: 'ky', timeType: 'day' }
      this.getFaultWarningDataSystem(param)
    },
    getFaultWarningDataSystem(params) {
      getFaultWarningData(params).then((res) => {
        this.pieChartData.data = res.data.pieChartData
        /* this.barChartData = res.data.barChartData */
        this.dealStatus = res.data.dealStatus
      }).catch(err => {
        console.log(err)
      })
    },
    /* drawPie(id, optionPie) {
      const chartmainline = echarts.init(document.getElementById(id))
      chartmainline.setOption(optionPie)
    },
    drawBar(id, optionBar) {
      const chartmainline = echarts.init(document.getElementById(id))
      chartmainline.setOption(optionBar)
    },*/
    /* resizeCharts() {
      var chartsPie = echarts.getInstanceByDom(document.getElementById('warningPie-System'))
      if (chartsPie) {
        chartsPie.resize()
      }
      var chartsBar = echarts.getInstanceByDom(document.getElementById('warningBar-System'))
      if (chartsBar) {
        chartsBar.resize()
      }
    }, */
    tabClick(tab, event) {
    }
  }
}
</script>

<style lang="scss">
.failure-warning{
  .el-tabs{
    flex-shrink: 1;
    flex-grow: 1;
    height: 0;
  }
  .el-tabs__header{
      width: 10vw;
      top: -1.5vw;
      left: 16vw;
      border-bottom: unset;
    }
    .el-tabs__item.is-active{
      color: #5F60FF;
    }
    .el-tabs__item:hover{
      color: #5F60FF;
    }
    .el-tabs__content{
      top: -5vw;
    }
    .el-tabs__item{
      padding: 0 0.5vw !important;
      font-family: MicrosoftYaHeiUI;
      font-size: 0.85vw;
      letter-spacing: 0;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav{
      border: unset;
      .el-tabs__item{
        color: #B5BFF6;
      }
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item{
      border-left: unset;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
      border-bottom-color: transparent;
      color: #5F60FF;
    }
}
</style>
<style lang="scss" scoped>
.failure-warning{
  display: flex;
  flex-direction: column;
  position: relative;
  background: rgba(24,28,171,0.5);
  border: 1px solid rgba(24,25,171,1);
  box-shadow: inset 0 1px 33px 0 rgba(52,24,171,0.50);
  border-radius: 4px;
  flex-shrink: 0;
  flex-grow: 0;
  height: 19vw;
  font-family: Bebas;
  margin: 1vw 0;
  .first-rows{
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    height: 1.9vw;
  }
  .title{
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: 1;
    height: 100%;
    .logo{
        width: 0.2vw;
        height: 1vw;
        //background-image: linear-gradient(180deg, #4928D4 0%, #3418AB 100%);
        background-color: #FFFFFF;
        margin-left: 1vw;
        margin-top: 0.8vw;
        margin-right: 0.5vw;
    }
    span {
      margin-top: 0.9vw;
      font-family: MicrosoftYaHeiUISemibold;
      font-size: 0.98vw;
      color: #FFF;
      letter-spacing: 0;
      line-height:0.8vw;
    }
  }

  .legend-container{
    display: flex;
    flex-direction: column;
    width:4vw;
    position: absolute;
    top: 4.5vw;
    left: 16vw;
    .dealing{
      margin-bottom: 1.7vw;
      .text{
        font-family: MicrosoftYaHeiUI;
        font-size: 0.75vw;
        color: #fff;
        letter-spacing: 0;
        line-height: 0.7vw;
        margin-bottom: 0.7vw;
      }
      .number{
        font-family: Bebas;
        font-size: 1.5vw;
        color: #EB2E95;
        letter-spacing: 0;
        line-height: 1vw;
      }
    }
    .dealed{
      margin-top: 2.1vw;
      .text{
        font-family: MicrosoftYaHeiUI;
        font-size: 0.75vw;
        color: #fff;
        letter-spacing: 0;
        line-height: 0.7vw;
        margin-bottom: 0.7vw;
      }
      .number{
        font-family: Bebas;
        font-size: 1.5vw;
        color: #3D3BEA;
        letter-spacing: 0;
         line-height: 1vw;
      }
    }
  }
}
</style>
