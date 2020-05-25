<template>
  <el-container style="height: 100%;">
    <el-main style="height: 100%; padding: 0; background-color: white;">
      <el-row :gutter="0" :type="'flex'" style="height: calc(100% - 50px);">
        <el-col :span="16" class="right-dash-boeder-el-col">
          <div class="left-container">
            <div class="left-container-top">
              <div class="progress-charts-container">
                <div v-for="(item, key) in progressData" :key="key" class="progress-chart-container">
                  <div class="progress-chart-title"><span> {{ progressData[key].title }} </span></div>
                  <div class="progress-chart-bar nenghaojindu">
                    <div class="progress-label">
                      <span class="progress-label-value">{{ Math.round(progressData[key].used*100)/100.0 }}</span>
                      <span class="progress-label-text">/</span>
                      <span class="progress-label-total">{{ Math.round(progressData[key].total*100.0)/100.0 }}</span>
                      <span class="progress-label-text">({{ progressData[key].unit }})</span>
                    </div>
                    <el-progress
                      :percentage="((progressData[key].total && progressData[key].total!==0)?Math.round(progressData[key].used/progressData[key].total*100):0)>100?100:((progressData[key].total && progressData[key].total!==0)?Math.round(progressData[key].used/progressData[key].total*100):0)"
                      :stroke-width="15"
                      :show-text="false"
                      :class="['energy-statis-nenghao-pragress', key]"
                    />
                  </div>
                </div>
              </div>
              <div class="percent-chart-container">
                <div class="dong-li-zhan-chart">
                  <div class="chart-title"><span>设备能耗占比</span></div>
                  <div v-loading="dongliStationDataLoading" class="chart-main">
                    <full-pie-chart :chart-data="dongliStationData" />
                  </div>
                </div>
              </div>
            </div>
            <div class="left-container-bottom">
              <div class="chart-container left-container">
                <div class="chart-title"><span>电耗曲线图</span></div>
                <div class="chart-main" style="flex-direction: column; position: relative; width: 100%;">
                  <div class="title-bar">
                    <el-form ref="form" :model="lineChartSearchForm" label-width="0px" class="search-form">
                      <el-form-item label="">
                        <el-date-picker
                          v-model="lineChartSearchForm.value"
                          type="datetimerange"
                          format="yyyy-MM-dd hh:mm:ss"
                          value-format="yyyy-MM-dd hh:mm:ss"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                        />
                        <el-button class="btn blue-btn" type="primary" @click="onSearch()">搜索</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                  <div v-loading="lineChartDataLoading" class="chart-grid" style="position: relative;">
                    <line-chart :chart-data="lineChartData" />
                  </div>
                </div>
              </div>
              <div class="neng-hao-charts">
                <div v-for="(item, index) in energyCircleData" :key="index" class="neng-hao-chart">
                  <div class="chart-title"><span>{{ item.title }}</span></div>
                  <div :id="item.elemId" v-loading="energyCircleDataLoading" class="chart-main" />
                  <div class="chart-footer">
                    <span :class="['chart-footer-image', item.increase?'up':'down']" />
                    <span class="chart-footer-text">较昨日</span>
                    <span class="chart-footer-text">{{ (item.increase?'+':'-')+Math.round(item.change*100)/100.0 }}</span>
                    <span class="chart-footer-text">{{ item.unit }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="right-container">
            <div class="chart-container ji-zu-energy">
              <div class="chart-title"><span>机组电耗统计图</span></div>
              <div class="chart-main">
                <div v-loading="compareDataLoading" class="chart-main-container">
                  <pie-chart :chart-data="compareData" />
                </div>
                <div class="chart-main-lengend">
                  <div style="width: 100%; overflow: auto;">
                    <div v-for="(item,index) in compareData.data" :key="index" class="chart-main-lengend-item">
                      <span class="chart-main-lengend-item-color" :style="{backgroundColor:compareData.colors[index]}" />
                      <span class="chart-main-lengend-item-label">{{ item.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="chart-container right-container">
              <div class="chart-title"><span>机组能耗排名</span></div>
              <div class="chart-main">
                <el-table
                  v-loading="effectOrderDataLoading"
                  :data="effectOrderData"
                  :fit="true"
                  size="medium"
                  class="sort-table"
                  header-row-class-name="sort-table-header-row"
                  row-class-name="sort-table-row"
                  cell-class-name="sort-table-cell"
                  header-cell-class-name="sort-table-header-cell"
                  style="display: flex; flex-direction: column; justify-content: center;"
                >
                  <el-table-column
                    prop="name"
                    label="名称"
                    min-width="50"
                    header-align="center"
                    align="center"
                    :show-overflow-tooltip="true"
                  />
                  <el-table-column
                    prop="effect"
                    label="能效值 kW·h/m³"
                    min-width="50"
                    header-align="center"
                    align="center"
                    :show-overflow-tooltip="true"
                  />
                  <el-table-column
                    prop="effectOrder"
                    label="能效排名"
                    min-width="50"
                    header-align="center"
                    align="center"
                    :show-overflow-tooltip="true"
                  />
                  <el-table-column
                    prop="elec"
                    label="电耗 kW·h"
                    min-width="50"
                    header-align="center"
                    align="center"
                    :show-overflow-tooltip="true"
                  />
                  <el-table-column
                    prop="elecOrder"
                    label="电耗排名"
                    min-width="50"
                    header-align="center"
                    align="center"
                    :show-overflow-tooltip="true"
                  />
                  <el-table-column
                    prop="gas"
                    label="产气量 m³"
                    min-width="50"
                    header-align="center"
                    align="center"
                    :show-overflow-tooltip="true"
                  />
                  <el-table-column
                    prop="gasOrder"
                    label="产气排名"
                    min-width="50"
                    header-align="center"
                    align="center"
                    :show-overflow-tooltip="true"
                  />
                </el-table>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="footer-tooltip">
        <div v-for="count in 3" :key="count">
          <div v-if="progressData.nengfei.used>=progressData.nengfei.total">当前电费已超出限定电费，
            预计今日累计电费将超出限额电费
            <span class="red-text">
              {{ Math.round((progressData.nengfei.used-progressData.nengfei.total)/(new Date().getHours()==0?1:new Date().getHours())*24*10)/10.0 }}元</span>，
            超标<span class="red-text">{{ Math.round(((progressData.nengfei.used-progressData.nengfei.total)/(new Date().getHours()==0?1:new Date().getHours())*24)/(progressData.nengfei.total==0?1:progressData.nengfei.total)*100) }}%</span>。
          </div>
          <div v-else>
            今日限额电费已消耗<span class="blue-text">{{ (progressData.nengfei.total && progressData.nengfei.total!==0)?Math.round(progressData.nengfei.used/progressData.nengfei.total*100):0 }}%</span>，
            后续最高小时耗费<span class="blue-text">{{ Math.round((progressData.nengfei.total-progressData.nengfei.used)/(24-new Date().getHours())*10)/10.0 }}元</span>，
            可限额管理要求。
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import PieChart from './PieChart'
import LineChart from './LineChart'
import radialIndicator from './RadialIndicator'
import FullPieChart from './FullPieChart'
import { getProcessData, getCompareData, getEnergyCircleData, getEffectCompareData, getElecLineChartDataData, getEffectOrderData } from '@/api/energy/statis'
export default {
  components: {
    PieChart,
    LineChart,
    FullPieChart
  },
  data() {
    return {
      lineChartSearchForm: {
        value: ['', '']
      },
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
          unit: 'kW·h/m³'
        },
        nengfei: {
          title: '电耗收费',
          used: 0,
          total: 0,
          unit: '元'
        }
      },
      compareDataLoading: true,
      compareData: {
        data: [],
        colors: ['#A26DFD', '#FAC400', '#10D178', '#F0725E', '#2853FF']
      },
      energyCircleDataLoading: true,
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
        unit: 'kW·h/m³',
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
      dongliStationDataLoading: true,
      dongliStationData: {
        data: [],
        colors: ['#A26DFD', '#FAC400', '#10D178', '#F0725E', '#2853FF']
      },
      effectOrderDataLoading: true,
      effectOrderData: [],
      lineChartDataLoading: true,
      lineChartData: [{
        name: '时间段',
        data: []
      }]
    }
  },
  mounted() {
    this.setProgressData({ sys: this.$router.currentRoute.name })
    this.setCompareData({ sys: this.$router.currentRoute.name })
    this.setEffectCompareData({ sys: this.$router.currentRoute.name })
    this.setEnergyCircleData({ sys: this.$router.currentRoute.name })
    this.setElecLineChartDataData({
      sys: this.$router.currentRoute.name,
      startTime: this.lineChartSearchForm.value[0],
      endTime: this.lineChartSearchForm.value[1]
    })
    this.setEffectOrderData({ sys: this.$router.currentRoute.name })
  },
  methods: {
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
        this.$message({
          type: 'warning',
          duration: 2000,
          message: err
        })
      })
    },
    setCompareData(params) {
      getCompareData(params).then(response => {
        var data = response.data
        this.compareData.data = data
        this.compareDataLoading = false
      }).catch(err => {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: err
        })
      })
    },
    setEffectCompareData(params) {
      getEffectCompareData(params).then(response => {
        var data = response.data
        this.dongliStationData.data = data
        this.dongliStationDataLoading = false
      }).catch(err => {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: err
        })
      })
    },
    setEffectOrderData(params) {
      getEffectOrderData(params).then(response => {
        var data = response.data
        this.effectOrderData = data
        this.effectOrderDataLoading = false
      }).catch(err => {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: err
        })
      })
    },
    setElecLineChartDataData(params) {
      this.lineChartDataLoading = true
      getElecLineChartDataData(params).then(response => {
        var data = response.data
        this.lineChartData[0].data = data
        this.lineChartDataLoading = false
      }).catch(err => {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: err
        })
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
          displayTitle: Math.round(item.value * 100) / 100.0,
          displayNumberLineText: item.unit,
          displayLetter: true,
          displayNumberLine: true,
          fontColor: '#40474d',
          fontFamily: 'Bebas',
          fontWeight: 'bold',
          fontSize: 24,
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
        this.energyCircleDataLoading = false
      }).catch(err => {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: err
        })
        this.initEnergyCircle()
      })
    },
    onSearch() {
      if (!this.lineChartDataLoading) {
        this.setElecLineChartDataData({
          sys: this.$router.currentRoute.name,
          startTime: this.lineChartSearchForm.value[0],
          endTime: this.lineChartSearchForm.value[1]
        })
      }
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
    border-right: none;
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
    border-bottom: none;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
  }
  .left-container-bottom {
    display: flex;
    height: 55%;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    border-bottom: none;
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
  .chart-container.ji-zu-energy{
    height: 45%;
  }
  .chart-container.left-container{
    width: 55%;
    border-right: solid 1px #E4E9F0;
    border-top: solid 1px #E4E9F0;
    border-bottom: none;
  }
  .chart-container.right-container{
    width: 100%;
    height: 55% !important;
    border-left: none;
    border-bottom: solid 1px #E4E9F0;
    border-top: solid 1px #E4E9F0;
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
    height: 0;
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
    overflow: auto;
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
    border-radius: 4px;
    border: none;
    color: white;
    padding: 0 25px;
    float: right;
    height: 36px;
    margin-left: 8px;
  }
  .title-bar {
    height: 38px;
  }
  .chart-grid {
    height: calc(100% - 28px);
  }
  .neng-hao-charts {
    width: 45%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: none;
  }

  .dong-li-zhan-chart {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    border-right: solid 1px #E4E9F0;
  }

  .neng-hao-chart {
    width: 50%;
    height: 50%;
    display: inline-block;
    padding: 15px 30px;
    border-top: solid 1px #E4E9F0;
    border-right: solid 1px #E4E9F0;
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
  .search-form {
    float: right;
  }
  .footer-tooltip {
    height: 50px;
    padding: 5px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 1px #E4E9F0;
    font-size: 14px;
    text-shadow: 0 0 0;
    color: #333;
  }
  .red-text {
    color: red;
  }
  .blue-text {
    color: blue;
  }
  .footer-tooltip>div {
    width: 30%;
    padding: 5px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: solid 1px #E4E9F0;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .footer-tooltip>div:first-child {
    width: 36.67%;
  }

  .footer-tooltip>div:last-child {
    width: 33.33%;
  }

  .footer-tooltip>div>div {
    width: 100%;
    overflow: auto;
    text-align: center;
  }
  .footer-tooltip>div>div::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    background-color: #333;
  }

  .footer-tooltip>div>div::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    background-color: rgba(60, 60, 60, 0.05);
  }
  .footer-tooltip>div>div::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(60, 60, 60, 0.3);
  }
  .footer-tooltip>div>div::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: rgba(60, 60, 60, 0.15);
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
  .sort-table-header-row {
    border: none;
  }
  .sort-table-row {

  }
  .sort-table-cell {
    border-bottom:1px solid rgba(228,233,240,1);
    border-right:1px solid rgba(228,233,240,1);
    border-left:1px solid rgba(228,233,240,1);
    color: rgba(51,51,51,1);
    line-height: 18px;
    font-size: 14px;
  }
  .sort-table-cell .cell{
    padding: 0 5px !important;
  }
  .sort-table-cell+.sort-table-cell{
    border-left:none;
  }
  .sort-table-header-cell {
    background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(244,246,252,1) 100%);
    border:1px solid rgba(228,233,240,1);
    color: rgba(51,51,51,1);
    line-height: 18px;
    font-size: 14px;
    text-shadow: 0 0 0;
  }
  .sort-table-header-cell+.sort-table-header-cell {
    border-left:none;
  }
  .sort-table-header-cell .cell{
    padding: 0 5px !important;
    white-space: normal !important;
    word-break: break-word;
  }
  .el-table.sort-table::before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
  }
</style>
