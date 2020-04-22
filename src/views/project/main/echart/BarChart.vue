<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './../mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      var xAxis = []
      for (let i = 0; i < this.chartData.data.systems.length; i++) {
        xAxis.push(this.chartData.data.systems[i].systemName)
      }
      const param = { dealedData: this.chartData.data.dealedList, dealingData: this.chartData.data.dealingList, xAxis: xAxis }
      this.setOptions(param)
    },
    setOptions({ dealedData, dealingData, xAxis } = {}) {
      this.chart.setOption({
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 60,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          padding: [5, 10]
        },
        xAxis: {
          data: xAxis,
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#858B9C'
          },
          axisLine: {
            lineStyle: {
              color: '#E2E4EA'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '(件)',
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#2642BB'
            }
          },
          axisLabel: {
            textStyle: {
              color: ' #9FA8DA'
            }
          },
          splitLine: {
            show: false
          },
          nameTextStyle: {
            color: '#9FA8DA'
          }
        },
        legend: {
          show: false
        },
        series: [{
          name: '已处理故障',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0.18,
                color: '#2F54EB'
              },
              {
                offset: 1.0,
                color: 'rgba(61,59,234,0.00)'
              }
              ])
            }
          },
          type: 'bar',
          data: dealedData
        }, {
          name: '未处理故障',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0.18,
                color: '#EB2E95'
              },
              {
                offset: 1.0,
                color: 'rgba(235,46,149,0.00)'
              }
              ])
            }
          },
          type: 'bar',
          data: dealingData
        }]
      })
    }
  }
}
</script>
