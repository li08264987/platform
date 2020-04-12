<template>
  <el-container style="height: 100%;">
    <el-main style="height: 100%; padding: 0; background-color: white;">
      <el-row :gutter="0" :type="'flex'" style="height: 100%;">
        <el-col :span="16" class="right-dash-boeder-el-col">
          <div class="left-container">
            <div class="left-container-top">
              <div class="progress-charts-container">
                <div v-for="(item, key) in progressData" :key="key" class="progress-chart-container">
                  <div class="progress-chart-title"><span> {{ progressData[key].title }} </span></div>
                  <div class="progress-chart-bar nenghaojindu">
                    <div class="progress-label">
                      <span class="progress-label-value">{{ progressData[key].used }}</span>
                      <span class="progress-label-text">/</span>
                      <span class="progress-label-total">{{ progressData[key].total }}</span>
                      <span class="progress-label-text">({{ progressData[key].unit }})</span>
                    </div>
                    <el-progress
                      :percentage="(progressData[key].total && progressData[key].total!==0)?Math.round(progressData[key].used/progressData[key].total*100):0"
                      :stroke-width="15"
                      :show-text="false"
                      :class="['energy-statis-nenghao-pragress', key]"
                    />
                  </div>
                </div>
              </div>
              <div class="percent-chart-container">
                <div class="chart-container">
                  <div class="chart-title"><span>机组电耗统计图</span></div>
                  <div class="chart-main">
                    <div class="chart-main-container">
                      <pie-chart :chart-data="compareData" />
                    </div>
                    <div class="chart-main-lengend">
                      <div v-for="(item,index) in compareData.data" :key="index" class="chart-main-lengend-item">
                        <span class="chart-main-lengend-item-color" :style="{backgroundColor:compareData.colors[index]}" />
                        <span class="chart-main-lengend-item-label">{{ item.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="left-container-bottom">
              <div class="chart-container">
                <div class="chart-title"><span>电耗曲线图</span></div>
                <div class="chart-main" style="flex-direction: column; position: relative; width: 100%;">
                  <div class="title-bar">
                    <el-button class="btn" @click="dialogVisible = true">添加时间段</el-button>
                    <el-dialog
                      title="添加时间段"
                      :center="false"
                      :visible.sync="dialogVisible"
                      width="30%"
                      :before-close="handleClose"
                    >
                      <span>这是一段信息</span>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">添 加</el-button>
                      </span>
                    </el-dialog>
                  </div>
                  <div class="chart-grid" style="position: relative;">
                    <line-chart :chart-data="lineChartData" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="right-container">
            <div class="dong-li-zhan-chart">
              <div class="chart-title"><span>机组能耗占比</span></div>
              <div class="chart-main">
                <full-pie-chart :chart-data="dongliStationData" />
              </div>
            </div>
            <div class="neng-hao-charts">
              <div v-for="(item, index) in energyCircleData" :key="index" class="neng-hao-chart">
                <div class="chart-title"><span>{{ item.title }}</span></div>
                <div :id="item.elemId" class="chart-main" />
                <div class="chart-footer">
                  <span :class="['chart-footer-image', item.increase?'up':'down']" />
                  <span class="chart-footer-text">较昨日</span>
                  <span class="chart-footer-text">{{ (item.increase?'+':'-')+item.change }}</span>
                  <span class="chart-footer-text">{{ item.unit }}</span>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import PieChart from './PieChart'
import LineChart from './LineChart'
import radialIndicator from './RadialIndicator'
import FullPieChart from './FullPieChart'
import { getProcessData, getCompareData, getEnergyCircleData } from '@/api/energy/statis'
export default {
  components: {
    PieChart,
    LineChart,
    FullPieChart
  },
  data() {
    return {
      dialogVisible: false,
      progressData: {
        nenghao: {
          title: '电耗进度',
          used: 0,
          total: 0,
          unit: 'kW·h'
        },
        nengxiao: {
          title: '电耗能耗',
          used: 0,
          total: 0,
          unit: 'kW·h/m³▪min'
        },
        nengfei: {
          title: '电耗收费',
          used: 0,
          total: 0,
          unit: '元'
        }
      },
      compareData: {
        data: [{
          name: '空压机组',
          value: 0
        }, {
          name: '冷却塔组',
          value: 0
        }, {
          name: '冷却泵组',
          value: 0
        }, {
          name: '冷干机组',
          value: 0
        }, {
          name: '其他',
          value: 0
        }],
        colors: ['#A26DFD', '#FAC400', '#10D178', '#F0725E', '#2853FF']
      },
      energyCircleData: [{
        title: '今日耗电量',
        elemId: 'elecGradChart',
        value: 0,
        percent: 80,
        change: 0,
        unit: 'kW·h',
        increase: true,
        startColor: '#5779FF',
        endColor: '#90A7FF'
      }, {
        title: '今日产气量',
        elemId: 'gasGradChart',
        value: 0,
        percent: 80,
        change: 0,
        unit: 'm³',
        increase: true,
        startColor: '#4CC5FF',
        endColor: '#8FDBFF'
      }, {
        title: '今日能效值',
        elemId: 'nengxiaoGradChart',
        value: 0,
        percent: 80,
        change: 0,
        unit: 'kW·h/m³▪min',
        increase: true,
        startColor: '#A26DFD',
        endColor: '#BE98FF'
      }, {
        title: '今日电力计费',
        elemId: 'feeGradChart',
        value: 0,
        percent: 80,
        change: 0,
        unit: '万元',
        increase: false,
        startColor: '#FFA733',
        endColor: '#FFC373'
      }],
      dongliStationData: {
        data: [{
          name: '空压机组',
          value: 460
        }, {
          name: '冷却塔组',
          value: 130
        }, {
          name: '冷却泵组',
          value: 120
        }, {
          name: '冷干机组',
          value: 140
        }, {
          name: '其他',
          value: 60
        }],
        colors: ['#A26DFD', '#FAC400', '#10D178', '#F0725E', '#2853FF']
      },
      lineChartData: [{
        name: '选择时间段',
        data: [{ name: '1:00', value: 15 }, { name: '2:00', value: 10 }, { name: '3:00', value: 13 }, { name: '4:00', value: 18 }, { name: '5:00', value: 15 }, { name: '6:00', value: 16 }, { name: '7:00', value: 12 }, { name: '8:00', value: 11 }, { name: '9:00', value: 6 }, { name: '10:00', value: 8 }, { name: '11:00', value: 8 }, { name: '12:00', value: 12 }, { name: '13:00', value: 14 }, { name: '14:00', value: 15 }, { name: '15:00', value: 12 }, { name: '16:00', value: 10 }, { name: '17:00', value: 9 }, { name: '18:00', value: 11 }, { name: '19:00', value: 13 }, { name: '20:00', value: 14 }, { name: '21:00', value: 14 }, { name: '22:00', value: 12 }, { name: '23:00', value: 10 }]
      }, {
        name: '对比时间段',
        data: [{ name: '1:00', value: Math.round(Math.random() * 15) + 5 }, { name: '2:00', value: Math.round(Math.random() * 15) + 5 }, { name: '3:00', value: Math.round(Math.random() * 15) + 5 }, { name: '4:00', value: Math.round(Math.random() * 15) + 5 }, { name: '5:00', value: Math.round(Math.random() * 15) + 5 }, { name: '6:00', value: Math.round(Math.random() * 15) + 5 }, { name: '7:00', value: Math.round(Math.random() * 15) + 5 }, { name: '8:00', value: 11 }, { name: '9:00', value: Math.round(Math.random() * 15) + 5 }, { name: '10:00', value: Math.round(Math.random() * 15) + 5 }, { name: '11:00', value: Math.round(Math.random() * 15) + 5 }, { name: '12:00', value: 12 }, { name: '13:00', value: Math.round(Math.random() * 15) + 5 }, { name: '14:00', value: Math.round(Math.random() * 15) + 5 }, { name: '15:00', value: 12 }, { name: '16:00', value: Math.round(Math.random() * 15) + 5 }, { name: '17:00', value: Math.round(Math.random() * 15) + 5 }, { name: '18:00', value: Math.round(Math.random() * 15) + 5 }, { name: '19:00', value: Math.round(Math.random() * 15) + 5 }, { name: '20:00', value: Math.round(Math.random() * 15) + 5 }, { name: '21:00', value: Math.round(Math.random() * 15) + 5 }, { name: '22:00', value: Math.round(Math.random() * 15) + 5 }, { name: '23:00', value: Math.round(Math.random() * 15) + 5 }]
      }]
    }
  },
  mounted() {
    this.setProgressData({ sys: this.$router.currentRoute.name })
    this.setCompareData({ sys: this.$router.currentRoute.name })
    this.setEnergyCircleData({ sys: this.$router.currentRoute.name })
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    setProgressData(params) {
      getProcessData(params).then(response => {
        var data = response.data
        for (var key in this.progressData) {
          if (data[key]) {
            this.progressData[key].used = data[key].used
            this.progressData[key].total = data[key].total
          }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    setCompareData(params) {
      getCompareData(params).then(response => {
        var data = response.data
        this.compareData.data = data
      }).catch(err => {
        console.log(err)
      })
    },
    initEnergyCircle() {
      for (var i = 0; i < this.energyCircleData.length; i++) {
        var item = this.energyCircleData[i]
        radialIndicator('#' + item.elemId, {
          gradBarColor: {
            0: item.startColor,
            1: item.endColor
          },
          barBgColor: '#E4E9F0',
          hasStartPoint: true,
          displayNumber: true,
          displayTitle: item.value,
          displayNumberLineText: item.unit,
          displayLetter: true,
          displayNumberLine: true,
          fontColor: '#40474d',
          fontFamily: 'Bebas',
          fontWeight: 'bold',
          fontSize: 28,
          autoRadius: true,
          barWidth: 10,
          initValue: item.percent,
          roundCorner: true
        })
      }
    },
    setEnergyCircleData(params) {
      getEnergyCircleData(params).then(response => {
        var data = response.data
        for (var i = 0; i < this.energyCircleData.length; i++) {
          for (var j = 0; j < data.length; j++) {
            if (this.energyCircleData[i].elemId === data[j].elemId) {
              this.energyCircleData[i].value = data[j].value
              this.energyCircleData[i].change = data[j].change
              this.energyCircleData[i].percent = data[j].percent
              this.energyCircleData[i].increase = data[j].increase
              break
            }
          }
        }
        this.initEnergyCircle()
      }).catch(err => {
        console.log(err)
        this.initEnergyCircle()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .dash-boeder-el-col {
    border: dashed 1px #888;
  }
  .dash-boeder-el-col:last-child {
    border-left: none;
  }
  .right-dash-boeder-el-col {
    border-right: dashed 1px #888;
  }
  .left-container,
  .right-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .left-container-top {
    height: 45%;
    width: 100%;
    border-bottom: solid 1px #E4E9F0;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
  }
  .left-container-bottom {
    height: 55%;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .progress-charts-container {
    width: 55%;
    height: 100%;
    border-right: solid 1px #E4E9F0;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
  }
  .progress-chart-container,
  .chart-container {
    width: 100%;
    height: calc(100% / 3);
    border-bottom: solid 1px #E4E9F0;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    justify-content: center;
  }
  .chart-container {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
  }
  .progress-chart-container:last-child,
  .chart-container:last-child {
    border-bottom: none;
  }
  .percent-chart-container {
    width: 45%;
    height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .progress-chart-title,
  .chart-title {
    font-size: 16px;
    color: rgba(51,51,51,1);
    font-weight: bold;
    margin-bottom: 30px;
    padding: 0px 10px;
    display: flex;
    border-left: solid 2px rgba(74,98,245,1);
  }
  .chart-title {
    margin-bottom: 10px;
  }

  .progress-label {
    text-align: right;
    font-weight: bold;
    font-size: 14px;
    position: absolute;
    color: #333;
    right: 0;
    top: calc(-100% - 5px);
  }

  .progress-chart-bar {
    position: relative;
  }

  .progress-chart-bar.nenghaojindu span.progress-label-value {
    color: #FF5439;
  }
  .progress-chart-bar.nengxiaojindu span.progress-label-value {
    color: #587AFF;
  }
  .progress-chart-bar.nengfeijindu span.progress-label-value {
    color: #FD9B1A;
  }
  .chart-main {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
  }

  .chart-main-container {
    width: 60%;
  }

  .chart-main-lengend {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
  }

  .chart-main-lengend-item {
    background-color: #f9f9fb;
    width: 100%;
    height: 30px;
    margin: 5px 0;
    display: flex;
    align-items: center;
  }

  span.chart-main-lengend-item-color {
    height: 100%;
    width: 6px;
    border-radius: 3px;
    display: inline-block;
  }
  span.chart-main-lengend-item-label {
    font-size: 14px;
    text-shadow: 0 0 0;
    padding: 0 15px;
  }
  .title-bar .btn {
    background-color: #586CB4;
    border-radius:4px;
    color: white;
    padding: 6px;
    float: right;
  }
  .title-bar {
    height: 28px;
  }
  .chart-grid {
    height: calc(100% - 28px);
  }
  .neng-hao-charts {
    width: 100%;
    height: 55%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: solid 1px #E4E9F0;
  }

  .dong-li-zhan-chart {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    border-bottom: solid 1px #E4E9F0;
  }

  .neng-hao-chart {
    width: 50%;
    height: 50%;
    display: inline-block;
    padding: 15px 30px;
    border: solid 1px #E4E9F0;
    display: flex;
    flex-direction: column;
  }

  .chart-footer {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span.chart-footer-image {
    width: 9px;
    height: 14px;
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 4px;
  }

  span.chart-footer-text {
    font-size: 14px;
    color: #333;
    text-shadow: 0 0 0;
  }
  span.chart-footer-image.up {
    background-image: url("../../../../../../../assets/energy/arrow_up.png");
  }
  span.chart-footer-image.down {
    background-image: url("../../../../../../../assets/energy/arrow_down.png");
  }
</style>
<style lang="scss">
  .energy-statis-nenghao-pragress {
    width: 100%;
  }
  .energy-statis-nenghao-pragress.nenghao .el-progress-bar__inner {
    background-image: linear-gradient(90deg,rgba(255,161,146,1) 0%,rgba(240,114,94,1) 100%);
  }
  .energy-statis-nenghao-pragress.nengxiao .el-progress-bar__inner {
    background-image: linear-gradient(90deg,rgba(144,167,255,1) 0%,rgba(87,121,255,1) 100%);
  }
  .energy-statis-nenghao-pragress.nengfei .el-progress-bar__inner {
    background-image: linear-gradient(90deg,rgba(255,195,115,1) 0%,rgba(255,167,51,1) 100%);
  }
  .energy-statis-nenghao-pragress .el-progress-bar__outer {
    background-color: rgba(234,234,234,1);
  }
  .energy-statis-dianping-table-header,
  .energy-statis-dianping-table-header th {
    background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(244,246,252,1) 100%) !important;
  }
  .energy-statis-dianping-table-header th {
    border-top: 1px solid rgba(228,233,240,1);
  }
  .energy-statis-dianping-table-header th:first-child {
    border-left: 1px solid rgba(228,233,240,1);
  }
  .energy-statis-dianping-table-header th:nth-last-child(2) {
    border-right: 1px solid rgba(228,233,240,1);
  }
  .energy-statis-dianping-table-cell {
    padding: 4px 0 !important;
    border-bottom: 1px solid rgba(228,233,240,1);
  }
  .energy-statis-dianping-table-cell:first-child {
    border-left: 1px solid rgba(228,233,240,1);
  }
  .energy-statis-dianping-table-cell:last-child {
    border-right: 1px solid rgba(228,233,240,1);
  }
</style>
