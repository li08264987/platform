<template>
  <div class="pertime-output">
    <div class="first-rows" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>逐时{{ title }}趋势</span>
      </div>
    </div>

    <div id="warningPie" :style="{width: '100%', height: '88%'}">
      <!-- <MixChart id="warningPie-System" :chart-data="pieChartData" :cursor="cursor" :sum="dealStatus.sum" /> -->
      <MixChart
        id="mixChart-container"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.5)"
        class="mixChart-container"
        height="100%"
        width="100%"
        :chart-data="mixChartData"
      />
    </div>
  </div>
</template>

<script>
import MixChart from './echart/MixChart'
import { getPertimeOutputData } from '@/api/main/pertimeOutput'
export default {
  name: 'PertimeOutput',
  components: {
    MixChart
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
      activeName: 'system',
      mixChartData: {
        data: null
      },
      loading: false
    }
  },
  computed: {
    title() {
      var title = ''
      var currentView = this.$store.state.settings.currentView.value
      switch (currentView) {
        case 'ky':
          title = '空压产量'
          break
        case 'qd':
          title = '氢氮产量'
          break
        case 'zk':
          title = '真空耗电量'
          break
        case 'dl':
        case 'dianli':
          title = '电耗'
          break
        default:
      }
      return title
    },
    currentView() {
      return this.$store.state.settings.currentView.value
    },
    mainTimeType() {
      return this.$store.state.settings.mainTimeType
    }
  },
  watch: {
    currentView: function(values) {
      var timetype = this.$store.state.settings.mainTimeType
      var param = { sysCode: values, timeType: timetype }
      this.getPertimeOutputData(param)
    },
    mainTimeType: function(params) {
      var system = this.$store.state.settings.currentView.value
      var param = { sysCode: system, timeType: params }
      this.getPertimeOutputData(param)
    }
  },
  mounted() {
    this.initPertimeOutputData()
  },
  methods: {
    initPertimeOutputData() {
      var param = { sysCode: 'ky', label: '空压系统', timeType: 'day' }
      this.getPertimeOutputData(param)
    },
    getPertimeOutputData(param) {
      this.loading = true
      getPertimeOutputData(param).then((res) => {
        this.mixChartData.data = res.data
        this.loading = false
      }).catch(err => {
        console.log(err)
        this.loading = false
      })
    },
    tabClick(tab, event) {
    }
  }
}
</script>

<style lang="scss">
.pertime-output{
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
.pertime-output{
  display: flex;
  flex-direction: column;
  position: relative;
  background: rgba(52,24,171,0.20);
  border: 1px solid #3418AB;
  box-shadow: inset 0 1px 33px 0 rgba(52,24,171,0.50);
  border-radius: 4px;
  flex-shrink: 0;
  flex-grow: 0;
  height: 16vw;
  font-family: Bebas;
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
        background-image: linear-gradient(180deg, #4928D4 0%, #3418AB 100%);
        margin-left: 1vw;
        margin-top: 0.8vw;
        margin-right: 0.5vw;
    }
    span {
      margin-top: 0.9vw;
      font-family: MicrosoftYaHeiUISemibold;
      font-size: 0.98vw;
      color: #C8D6FE;
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
        color: #D6E4FF;
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
        color: #D6E4FF;
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
