<template>
  <el-container style="height: 100%;">
    <el-main style="height: 100%; padding: 0; background-color: white;">
      <el-row :gutter="0" :type="'flex'" style="height: calc(100% - 50px);">
        <el-col :span="16" class="right-dash-boeder-el-col">
          <div class="left-container">
            <div class="left-container-top">
              <div class="neng-hao-charts">
                <div v-for="(item, index) in energyCircleData" :key="index" class="neng-hao-chart">
                  <div class="chart-title"><span>{{ item.title }}</span></div>
                  <div :id="item.elemId" v-loading="item.loading" class="chart-main" />
                  <div class="chart-footer">
                    <span :class="['chart-footer-image', item.increase?'up':'down']" />
                    <span class="chart-footer-text">同比</span>
                    <span class="chart-footer-text">{{ (item.increase?'+':'-')+Math.round(item.change*100)/100.0 }}</span>
                    <span class="chart-footer-text">{{ item.unit }}</span>
                  </div>
                </div>
              </div>
              <div class="progress-charts-container">
                <div v-for="(item, key) in progressData" :key="key" :class="{'progress-chart-container':true,'chejian':isCheJian}">
                  <div class="progress-chart-title"><span> {{ progressData[key].title }} </span></div>
                  <div v-loading="progressData[key].loading" class="progress-chart-bar nenghaojindu">
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
            </div>
            <div class="left-container-bottom">
              <div class="chart-container ji-zu-energy">
                <div class="chart-title"><span>{{ jiqunCompareTitle }}</span></div>
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
                <div class="chart-title"><span>{{ orderTitle }}</span></div>
                <div class="chart-main">
                  <el-table
                    v-if="isCheJian"
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
                      prop="zk"
                      label="真空量 kW·h"
                      min-width="50"
                      header-align="center"
                      align="center"
                      :show-overflow-tooltip="true"
                    />
                    <el-table-column
                      prop="zkOrder"
                      label="真空排名"
                      min-width="50"
                      header-align="center"
                      align="center"
                      :show-overflow-tooltip="true"
                    />
                    <el-table-column
                      prop="qd"
                      label="氢氮量 m³"
                      min-width="50"
                      header-align="center"
                      align="center"
                      :show-overflow-tooltip="true"
                    />
                    <el-table-column
                      prop="qdOrder"
                      label="氢氮排名"
                      min-width="50"
                      header-align="center"
                      align="center"
                      :show-overflow-tooltip="true"
                    />
                    <el-table-column
                      prop="ky"
                      label="空压量 m³"
                      min-width="50"
                      header-align="center"
                      align="center"
                      :show-overflow-tooltip="true"
                    />
                    <el-table-column
                      prop="kyOrder"
                      label="空压排名"
                      min-width="50"
                      header-align="center"
                      align="center"
                      :show-overflow-tooltip="true"
                    />
                  </el-table>
                  <el-table
                    v-else
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
          </div>
        </el-col>
        <el-col :span="8">
          <div class="right-container">
            <div class="percent-chart-container">
              <div class="dong-li-zhan-chart">
                <div class="chart-title"><span>{{ facCompareTitle }}</span></div>
                <div v-loading="dongliStationDataLoading" class="chart-main">
                  <full-pie-chart :chart-data="dongliStationData" />
                </div>
              </div>
            </div>
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
          </div>
        </el-col>
      </el-row>
      <div class="footer-tooltip">
        <div v-if="progressData.nengxiao">
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
        <div v-if="progressData.nengxiao">
          <div v-if="progressData.nenghao.used>=progressData.nenghao.total">当前电耗已超出限定电耗，预计今日累计电耗将超出限额电耗
            <span class="red-text">
              {{ Math.round((progressData.nenghao.used-progressData.nenghao.total)/(new Date().getHours()==0?1:new Date().getHours())*24*10)/10.0 }}kW·h</span>，
            超标<span class="red-text">{{ Math.round(((progressData.nenghao.used-progressData.nenghao.total)/(new Date().getHours()==0?1:new Date().getHours())*24)/(progressData.nenghao.total==0?1:progressData.nenghao.total)*100) }}%</span>。
          </div>
          <div v-else>
            今日限额电耗已消耗<span class="blue-text">{{ (progressData.nenghao.total && progressData.nenghao.total!==0)?Math.round(progressData.nenghao.used/progressData.nenghao.total*100):0 }}%</span>，
            后续最高小时电耗<span class="blue-text">{{ Math.round((progressData.nenghao.total-progressData.nenghao.used)/(24-new Date().getHours())*10)/10.0 }}kW·h</span>，
            可限额管理要求。
          </div>
        </div>
        <div v-if="progressData.nengxiao">
          <div v-if="progressData.chanqi.used>=progressData.chanqi.total">当前产量已达标，预计今日累计电费将超额产出
            <span class="red-text">
              {{ Math.round((progressData.chanqi.used-progressData.chanqi.total)/(new Date().getHours()==0?1:new Date().getHours())*24*10)/10.0 }}m³</span>，
            超额完成率<span class="red-text">{{ Math.round(((progressData.chanqi.used-progressData.chanqi.total)/(new Date().getHours()==0?1:new Date().getHours())*24)/(progressData.chanqi.total==0?1:progressData.chanqi.total)*100) }}%</span>。
          </div>
          <div v-else>
            今日产出目标完成<span class="blue-text">{{ (progressData.chanqi.total && progressData.chanqi.total!==0)?Math.round(progressData.chanqi.used/progressData.chanqi.total*100):0 }}%</span>，
            后续最低小时产量<span class="blue-text">{{ Math.round((progressData.chanqi.total-progressData.chanqi.used)/(24-new Date().getHours())*10)/10.0 }}m³</span>，
            可产量管理要求。
          </div>
        </div>
        <div v-if="progressData.yasuo">
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
        <div v-if="progressData.yasuo">
          <div v-if="progressData.nenghao.used>=progressData.nenghao.total">当前电耗已超出限定电耗，预计今日累计电耗将超出限额电耗
            <span class="red-text">
              {{ Math.round((progressData.nenghao.used-progressData.nenghao.total)/(new Date().getHours()==0?1:new Date().getHours())*24*10)/10.0 }}kW·h</span>，
            超标<span class="red-text">{{ Math.round(((progressData.nenghao.used-progressData.nenghao.total)/(new Date().getHours()==0?1:new Date().getHours())*24)/(progressData.nenghao.total==0?1:progressData.nenghao.total)*100) }}%</span>。
          </div>
          <div v-else>
            今日限额电耗已消耗<span class="blue-text">{{ (progressData.nenghao.total && progressData.nenghao.total!==0)?Math.round(progressData.nenghao.used/progressData.nenghao.total*100):0 }}%</span>，
            后续最高小时电耗<span class="blue-text">{{ Math.round((progressData.nenghao.total-progressData.nenghao.used)/(24-new Date().getHours())*10)/10.0 }}kW·h</span>，
            可限额管理要求。
          </div>
        </div>
        <div v-if="progressData.yasuo">
          <div v-if="progressData.yasuo.used>=progressData.yasuo.total">当前耗量已超标，预计今日累计消耗将超额
            <span class="red-text">
              {{ Math.round((progressData.yasuo.used-progressData.yasuo.total)/(new Date().getHours()==0?1:new Date().getHours())*24*10)/10.0 }}m³</span>，
            超标<span class="red-text">{{ Math.round(((progressData.yasuo.used-progressData.yasuo.total)/(new Date().getHours()==0?1:new Date().getHours())*24)/(progressData.yasuo.total==0?1:progressData.yasuo.total)*100) }}%</span>。
          </div>
          <div v-else>
            今日限额气量消耗<span class="blue-text">{{ (progressData.yasuo.total && progressData.yasuo.total!==0)?Math.round(progressData.yasuo.used/progressData.yasuo.total*100):0 }}%</span>，
            后续最高小时耗量<span class="blue-text">{{ Math.round((progressData.yasuo.total-progressData.yasuo.used)/(24-new Date().getHours())*10)/10.0 }}m³</span>，
            可满足耗量管理要求。
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
  props: {
    searchData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      lineChartSearchForm: {
        value: ['', '']
      },
      isCheJian: false,
      progressData: {
        nenghao: {
          title: '电耗进度',
          used: 0,
          total: 0,
          unit: 'kW·h',
          loading: true
        },
        nengxiao: {
          title: '能效进度',
          used: 0,
          total: 0,
          unit: 'kW·h/m³',
          loading: true
        },
        chanqi: {
          title: '产量进度',
          used: 0,
          total: 0,
          unit: 'm³',
          loading: true
        },
        nengfei: {
          title: '能费进度',
          used: 0,
          total: 0,
          unit: '元',
          loading: true
        }
      },
      sysProgressData: {
        nenghao: {
          title: '电耗进度',
          used: 0,
          total: 0,
          unit: 'kW·h',
          loading: true
        },
        nengxiao: {
          title: '能效进度',
          used: 0,
          total: 0,
          unit: 'kW·h/m³',
          loading: true
        },
        chanqi: {
          title: '产量进度',
          used: 0,
          total: 0,
          unit: 'm³',
          loading: true
        },
        nengfei: {
          title: '能费进度',
          used: 0,
          total: 0,
          unit: '元',
          loading: true
        }
      },
      cjProgressData: {
        nenghao: {
          title: '电力消耗限额进度',
          used: 0,
          total: 0,
          unit: 'kW·h',
          loading: true
        },
        yasuo: {
          title: '压缩空气限额进度',
          used: 0,
          total: 0,
          unit: 'm³',
          loading: true
        },
        zhenkong: {
          title: '真空电力限额进度',
          used: 0,
          total: 0,
          unit: 'kW·h',
          loading: true
        },
        nengfei: {
          title: '电力费用限额进度',
          used: 0,
          total: 0,
          unit: '元',
          loading: true
        },
        qingdan: {
          title: '氢氮气体限额进度',
          used: 0,
          total: 0,
          unit: 'm³',
          loading: true
        }
      },
      compareDataLoading: true,
      compareData: {
        data: [],
        colors: ['#A26DFD', '#FAC400', '#10D178', '#F0725E', '#2853FF']
      },
      energyCircleData: [{
        title: '耗电量',
        elemId: 'elecGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: 'kW·h',
        increase: true,
        startColor: '#5779FF',
        endColor: '#90A7FF',
        loading: true
      }, {
        title: '产气量',
        elemId: 'gasGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: 'm³',
        increase: true,
        startColor: '#4CC5FF',
        endColor: '#8FDBFF',
        loading: true
      }, {
        title: '能效值',
        elemId: 'nengxiaoGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: 'kW·h/m³',
        increase: true,
        startColor: '#A26DFD',
        endColor: '#BE98FF',
        loading: true
      }, {
        title: '电力计费',
        elemId: 'feeGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: '元',
        increase: false,
        startColor: '#FFA733',
        endColor: '#FFC373',
        loading: true
      }],
      sysEnergyCircleData: [{
        title: '耗电量',
        elemId: 'elecGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: 'kW·h',
        increase: true,
        startColor: '#5779FF',
        endColor: '#90A7FF',
        loading: true
      }, {
        title: '产气量',
        elemId: 'gasGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: 'm³',
        increase: true,
        startColor: '#4CC5FF',
        endColor: '#8FDBFF',
        loading: true
      }, {
        title: '能效值',
        elemId: 'nengxiaoGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: 'kW·h/m³',
        increase: true,
        startColor: '#A26DFD',
        endColor: '#BE98FF',
        loading: true
      }, {
        title: '电力计费',
        elemId: 'feeGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: '元',
        increase: false,
        startColor: '#FFA733',
        endColor: '#FFC373',
        loading: true
      }],
      cjEnergyCircleData: [{
        title: '耗电量',
        elemId: 'elecGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: 'kW·h',
        increase: true,
        startColor: '#5779FF',
        endColor: '#90A7FF',
        loading: true
      }, {
        title: '压缩空气',
        elemId: 'yasuogasGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: 'm³',
        increase: true,
        startColor: '#4CC5FF',
        endColor: '#8FDBFF',
        loading: true
      }, {
        title: '真空电力',
        elemId: 'skyGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: 'kW·h',
        increase: true,
        startColor: '#A26DFD',
        endColor: '#BE98FF',
        loading: true
      }, {
        title: '电力计费',
        elemId: 'feeGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: '元',
        increase: false,
        startColor: '#FFA733',
        endColor: '#FFC373',
        loading: true
      }, {
        title: '氢氮气体',
        elemId: 'qdGradChart',
        value: 0,
        percent: 100,
        change: 0,
        unit: 'm³',
        increase: false,
        startColor: '#FFA733',
        endColor: '#FFC373',
        loading: true
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
      }],
      cancelPrecessAxios: {},
      cancelEnergyCircleAxios: {}
    }
  },
  computed: {
    facCompareTitle: function() {
      var title = '设备能耗占比'
      if (this.$router.currentRoute.name === 'dl') {
        title = '区域能耗占比'
      } else if (
        this.$router.currentRoute.name === 'cj1' ||
        this.$router.currentRoute.name === 'cj2' ||
        this.$router.currentRoute.name === 'cj3' ||
        this.$router.currentRoute.name === 'cj4' ||
        this.$router.currentRoute.name === 'cj5'
      ) {
        title = '能源种类耗量占比'
      }
      return title
    },
    energyCircleDataLoading: function() {
      var flag = false
      for (var i = 0; i < this.energyCircleData.length; i++) {
        if (this.energyCircleData[i].loading) {
          flag = true
          break
        }
      }
      return flag
    },
    progressDataLoading: function() {
      var flag = false
      for (var key in this.progressData) {
        if (this.progressData[key].loading) {
          flag = true
          break
        }
      }
      return flag
    },
    jiqunCompareTitle: function() {
      var title = '机群能耗占比'
      if (this.$router.currentRoute.name === 'dl') {
        title = '系统能耗占比'
      } else if (
        this.$router.currentRoute.name === 'cj1' ||
        this.$router.currentRoute.name === 'cj2' ||
        this.$router.currentRoute.name === 'cj3' ||
        this.$router.currentRoute.name === 'cj4'
      ) {
        title = '楼层电耗占比'
      } else if (
        this.$router.currentRoute.name === 'cj5'
      ) {
        title = '区域电耗占比'
      }
      return title
    },
    orderTitle: function() {
      var title = '机群能效排序'
      if (this.$router.currentRoute.name === 'dl') {
        title = '区域能耗排序'
      } else if (
        this.$router.currentRoute.name === 'cj1' ||
        this.$router.currentRoute.name === 'cj2' ||
        this.$router.currentRoute.name === 'cj3' ||
        this.$router.currentRoute.name === 'cj4' ||
        this.$router.currentRoute.name === 'cj5'
      ) {
        title = '楼层能耗排名'
      }
      return title
    },
    isLoading: function() {
      if (this.progressDataLoading ||
          this.dongliStationDataLoading ||
          this.effectOrderDataLoading ||
          this.lineChartDataLoading ||
          this.energyCircleDataLoading ||
          this.compareDataLoading) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    searchData: {
      deep: true,
      handler(val) {
        if (this.isLoading) {
          this.$message({
            type: 'warning',
            duration: 2000,
            message: '正在查询数据，请等待查询结束后再次查询！'
          })
        } else {
          this.reloadData()
        }
      }
    }
  },
  mounted() {
    this.reloadData()
  },
  methods: {
    reloadData: function() {
      if (
        this.$router.currentRoute.name === 'cj1' ||
        this.$router.currentRoute.name === 'cj2' ||
        this.$router.currentRoute.name === 'cj3' ||
        this.$router.currentRoute.name === 'cj4' ||
        this.$router.currentRoute.name === 'cj5'
      ) {
        if (this.energyCircleData.length === 4) {
          this.energyCircleData = JSON.parse(JSON.stringify(this.cjEnergyCircleData))
          this.progressData = JSON.parse(JSON.stringify(this.cjProgressData))
        }
        this.isCheJian = true
      } else {
        if (this.energyCircleData.length === 5) {
          this.energyCircleData = JSON.parse(JSON.stringify(this.sysEnergyCircleData))
          this.progressData = JSON.parse(JSON.stringify(this.sysProgressData))
        }
        this.isCheJian = false
      }
      for (var key in this.progressData) {
        this.setProgressData({
          type: key,
          sys: this.$router.currentRoute.name,
          startTime: this.searchData.date[0],
          endTime: this.searchData.date[1]
        })
      }
      this.setCompareData({
        sys: this.$router.currentRoute.name,
        startTime: this.searchData.date[0],
        endTime: this.searchData.date[1]
      })
      this.setEffectCompareData({
        sys: this.$router.currentRoute.name,
        startTime: this.searchData.date[0],
        endTime: this.searchData.date[1]
      })
      for (var i = 0; i < this.energyCircleData.length; i++) {
        this.setEnergyCircleData({
          type: this.energyCircleData[i].elemId,
          sys: this.$router.currentRoute.name,
          startTime: this.searchData.date[0],
          endTime: this.searchData.date[1]
        })
      }
      this.setElecLineChartDataData({
        sys: this.$router.currentRoute.name,
        startTime: this.searchData.date[0],
        endTime: this.searchData.date[1]
      })
      this.setEffectOrderData({
        sys: this.$router.currentRoute.name,
        startTime: this.searchData.date[0],
        endTime: this.searchData.date[1]
      })
    },
    setProgressData(params) {
      var type = params.type
      this.cancelPrecessAxios[type] && this.cancelPrecessAxios[type].cancel()
      this.progressData[type].loading = true
      var axios = getProcessData(params)
      axios.axiosObj.then(response => {
        var data = response.data
        for (var key in this.progressData) {
          if (data[key]) {
            if (!data[key].loading) {
              this.progressData[key].used = data[key].used
              this.progressData[key].total = data[key].total
              this.progressData[key].loading = data[key].loading
            }
          }
        }
      }).catch(err => {
        if (err !== 'cancel') {
          this.$message({
            type: 'warning',
            duration: 2000,
            message: err
          })
        } else {
          console.log('cancel')
        }
      })
      if (!this.cancelPrecessAxios[type]) this.cancelPrecessAxios[type] = {}
      this.cancelPrecessAxios[type].cancel = axios.cancel
    },
    setCompareData(params) {
      this.compareDataLoading = true
      this.cancelCompareAxios()
      var axios = getCompareData(params)
      axios.axiosObj.then(response => {
        var data = response.data
        this.compareData.data = data
        this.compareDataLoading = false
      }).catch(err => {
        if (err !== 'cancel') {
          this.$message({
            type: 'warning',
            duration: 2000,
            message: err
          })
        } else {
          console.log('cancel')
        }
        this.compareDataLoading = false
      })
      this.cancelCompareAxios = axios.cancel
    },
    cancelCompareAxios() {

    },
    setEffectCompareData(params) {
      this.dongliStationDataLoading = true
      this.cancelEffectCompareAxios()
      var axios = getEffectCompareData(params)
      axios.axiosObj.then(response => {
        var data = response.data
        this.dongliStationData.data = data
        this.dongliStationDataLoading = false
      }).catch(err => {
        if (err !== 'cancel') {
          this.$message({
            type: 'warning',
            duration: 2000,
            message: err
          })
        } else {
          console.log('cancel')
        }
        this.dongliStationDataLoading = false
      })
      this.cancelEffectCompareAxios = axios.cancel
    },
    cancelEffectCompareAxios() {

    },
    setEffectOrderData(params) {
      this.effectOrderDataLoading = true
      this.cancelEffectOrderAxios()
      var axios = getEffectOrderData(params)
      axios.axiosObj.then(response => {
        var data = response.data
        this.effectOrderData = data
        this.effectOrderDataLoading = false
      }).catch(err => {
        if (err !== 'cancel') {
          this.$message({
            type: 'warning',
            duration: 2000,
            message: err
          })
        } else {
          console.log('cancel')
        }
        this.effectOrderDataLoading = false
      })
      this.cancelEffectOrderAxios = axios.cancel
    },
    cancelEffectOrderAxios() {

    },
    setElecLineChartDataData(params) {
      this.lineChartDataLoading = true
      this.cancelElecLineChartAxios()
      var axios = getElecLineChartDataData(params)
      axios.axiosObj.then(response => {
        var data = response.data
        this.lineChartData[0].data = data
        this.lineChartDataLoading = false
      }).catch(err => {
        if (err !== 'cancel') {
          this.$message({
            type: 'warning',
            duration: 2000,
            message: err
          })
        } else {
          console.log('cancel')
        }
        this.lineChartDataLoading = false
      })
      this.cancelElecLineChartAxios = axios.cancel
    },
    cancelElecLineChartAxios() {

    },
    initEnergyCircle() {
      for (var i = 0; i < this.energyCircleData.length; i++) {
        var item = this.energyCircleData[i]
        if (!item.loading) {
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
      }
    },
    setEnergyCircleData(params) {
      var type = params.type
      this.cancelEnergyCircleAxios[type] && this.cancelEnergyCircleAxios[type].cancel()
      for (var i = 0; i < this.energyCircleData.length; i++) {
        if (this.energyCircleData[i].elemId === type) {
          this.energyCircleData[i].loading = true
          break
        }
      }
      var axios = getEnergyCircleData(params)
      axios.axiosObj.then(response => {
        var data = response.data
        for (var i = 0; i < this.energyCircleData.length; i++) {
          for (var j = 0; j < data.length; j++) {
            if (this.energyCircleData[i].elemId === data[j].elemId) {
              if (!data[j].loading) {
                this.energyCircleData[i].value = data[j].value
                this.energyCircleData[i].change = data[j].change
                this.energyCircleData[i].percent = data[j].percent
                this.energyCircleData[i].increase = data[j].increase
                this.energyCircleData[i].loading = data[j].loading
              }
              break
            }
          }
        }
        setTimeout(this.initEnergyCircle, 200)
      }).catch(err => {
        if (err !== 'cancel') {
          this.$message({
            type: 'warning',
            duration: 2000,
            message: err
          })
        } else {
          console.log('cancel')
        }
        setTimeout(this.initEnergyCircle, 200)
      })
      if (!this.cancelEnergyCircleAxios[type]) this.cancelEnergyCircleAxios[type] = {}
      this.cancelEnergyCircleAxios[type].cancel = axios.cancel
    },
    onSearch() {
      if (!this.lineChartDataLoading) {
        this.setElecLineChartDataData({
          sys: this.$router.currentRoute.name,
          startTime: this.lineChartSearchForm.value[0],
          endTime: this.lineChartSearchForm.value[1]
        })
      }
    },
    buildExcelData() {
      var datas = []

      var energyCircleData_excel = {}
      energyCircleData_excel.sheetName = '能耗数据'
      energyCircleData_excel.header = ['名称', '值', '同比']
      energyCircleData_excel.data = []
      for (var i = 0; i < this.energyCircleData.length; i++) {
        energyCircleData_excel.data.push([this.energyCircleData[i].title, this.energyCircleData[i].value + this.energyCircleData[i].unit, this.energyCircleData[i].change * (this.energyCircleData[i].increase ? 1 : -1) + this.energyCircleData[i].unit])
      }
      datas.push(energyCircleData_excel)

      var progressData_excel = {}
      progressData_excel.sheetName = '进度数据'
      progressData_excel.header = ['名称', '消耗/产量', '限额', '进度']
      progressData_excel.data = []
      for (var key in this.progressData) {
        progressData_excel.data.push([this.progressData[key].title, this.progressData[key].used + this.progressData[key].unit, this.progressData[key].total + this.progressData[key].unit, (this.progressData[key].total === 0 ? 0 : Math.round(this.progressData[key].used / this.progressData[key].total * 100)) + '%'])
      }
      datas.push(progressData_excel)

      var dongliStationData_excel = {}
      dongliStationData_excel.sheetName = this.facCompareTitle
      dongliStationData_excel.header = ['名称', '值', '占比']
      dongliStationData_excel.data = []
      var dongliStationData_total = 0
      for (i = 0; i < this.dongliStationData.data.length; i++) {
        dongliStationData_total += this.dongliStationData.data[i].value
      }
      for (i = 0; i < this.dongliStationData.data.length; i++) {
        dongliStationData_excel.data.push([this.dongliStationData.data[i].name, this.dongliStationData.data[i].value + ' kW·h', (dongliStationData_total === 0 ? '/' : Math.round(this.dongliStationData.data[i].value / dongliStationData_total * 100) + '%')])
      }
      datas.push(dongliStationData_excel)

      var compareData_excel = {}
      compareData_excel.sheetName = this.jiqunCompareTitle
      compareData_excel.header = ['名称', '值', '占比']
      compareData_excel.data = []
      var compareData_total = 0
      for (i = 0; i < this.compareData.data.length; i++) {
        compareData_total += this.compareData.data[i].value
      }
      for (i = 0; i < this.compareData.data.length; i++) {
        compareData_excel.data.push([this.compareData.data[i].name, this.compareData.data[i].value + ' kW·h', (compareData_total === 0 ? '/' : Math.round(this.compareData.data[i].value / compareData_total * 100) + '%')])
      }
      datas.push(compareData_excel)

      var effectOrderData_excel = {}
      var effectOrderData_excel_field = []
      var effectOrderData_excel_unit = []
      effectOrderData_excel.sheetName = this.orderTitle
      if (this.isCheJian) {
        effectOrderData_excel.header = ['名称', '电耗', '电耗排名', '真空量', '真空排名', '氢氮量', '氢氮排名', '空压量', '空压排名']
        effectOrderData_excel_field = ['name', 'elec', 'elecOrder', 'zk', 'zkOrder', 'qd', 'qdOrder', 'ky', 'kyOrder']
        effectOrderData_excel_unit = ['', 'kW·h', '', 'kW·h', '', 'm³', '', 'm³', '']
      } else {
        effectOrderData_excel.header = ['名称', '能效值', '能效排名', '电耗', '电耗排名', '产量', '产量排名']
        effectOrderData_excel_field = ['name', 'effect', 'effectOrder', 'elec', 'elecOrder', 'gas', 'gasOrder']
        effectOrderData_excel_unit = ['', 'kW·h/m³', '', 'kW·h', '', 'm³', '']
      }
      effectOrderData_excel.data = []
      for (i = 0; i < this.effectOrderData.length; i++) {
        var dataItem = []
        for (var j = 0; j < effectOrderData_excel.header.length; j++) {
          dataItem.push(this.effectOrderData[i][effectOrderData_excel_field[j]] + ' ' + effectOrderData_excel_unit[j])
        }
        effectOrderData_excel.data.push(dataItem)
      }
      datas.push(effectOrderData_excel)

      var lineChartData_excel = {}
      lineChartData_excel.sheetName = '电耗曲线图'
      lineChartData_excel.header = ['时间', '功率']
      lineChartData_excel.data = []
      for (i = 0; i < this.lineChartData[0].data.length; i++) {
        lineChartData_excel.data.push([this.lineChartData[0].data[i].name, this.lineChartData[0].data[i].value + ' W'])
      }
      datas.push(lineChartData_excel)

      return datas
    },
    cancelAxios: function() {
      for (var key in this.cancelPrecessAxios) {
        this.cancelPrecessAxios[key].cancel()
      }
      this.cancelCompareAxios()
      this.cancelEffectCompareAxios()
      this.cancelEffectOrderAxios()
      this.cancelElecLineChartAxios()
      for (var k in this.cancelEnergyCircleAxios) {
        this.cancelEnergyCircleAxios[k].cancel()
      }
    }
  }
}
</script>

<style scoped>
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
    height: 55%;
    width: 100%;
    border-bottom: none;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
  }
  .left-container-bottom {
    display: flex;
    height: 45%;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    border-bottom: none;
  }
  .progress-charts-container {
    width: 45%;
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
    height: calc(100% / 4);
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    justify-content: center;
  }
  .progress-chart-container.chejian {
    height: calc(100% / 5);
  }
  .chart-container {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
  }
  .chart-container.ji-zu-energy{
    width: 55%;
    border-top: solid 1px #E4E9F0;
    border-right: solid 1px #E4E9F0;
  }
  .chart-container.left-container{
    width: 100%;
    height: 45%;
    border-right: solid 1px #E4E9F0;
    border-top: solid 1px #E4E9F0;
    border-bottom: none;
  }
  .chart-container.right-container{
    width: 45% !important;
    border-left: none;
    border-right: solid 1px #E4E9F0;
    border-top: solid 1px #E4E9F0;
  }
  .progress-chart-container:last-child,
  .chart-container:last-child {
    border-bottom: none;
  }
  .percent-chart-container {
    width: 100%;
    height: 55%;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .progress-chart-title,
  .chart-title {
    font-size: 16px;
    color: rgba(51,51,51,1);
    font-weight: bold;
    margin-bottom: 10px;
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
    width: 55%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: none;
    overflow: auto;
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
  .neng-hao-chart:first-child {
    border-top: none;
  }
  .neng-hao-chart:nth-child(2) {
    border-top: none;
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
<style>
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
  .energy-statis-nenghao-pragress.chanqi .el-progress-bar__inner {
    background-image: linear-gradient(90deg,#8FDBFF 0%,#2CB6F8 100%);
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
