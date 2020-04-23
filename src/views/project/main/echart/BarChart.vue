<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/roma')
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
        var xAxis = []
        for (let i = 0; i < val.systems.length; i++) {
          xAxis.push(val.systems[i].systemName)
        }
        const param = { dealedData: val.dealedList, dealingData: val.dealingList, xAxis: xAxis }
        this.setOptions(param)
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
      this.chart = echarts.init(this.$el, 'roma')
      var xAxis = []
      if (this.chartData.systems !== undefined) {
        for (let i = 0; i < this.chartData.systems.length; i++) {
          xAxis.push(this.chartData.systems[i].systemName)
        }
        const param = { dealedData: this.chartData.dealedList, dealingData: this.chartData.dealingList, xAxis: xAxis }
        this.setOptions(param)
      }
    },
    setOptions({ dealedData, dealingData, xAxis } = {}) {
      var option = {
        grid: {
          top: '15%',
          bottom: '7%',
          left: '15%',
          right: '2%'
        },
        legend: {
          right: '1%',
          top: '5%',
          textStyle: {
            color: '#9FA8DA'
          },
          itemWidth: 10,
          itemHeight: 15
        },
        tooltip: {
          trigger: 'axis',
          padding: [5, 10]
        },
        xAxis: {
          type: 'category',
          data: xAxis,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#2642BB'
            }
          },
          axisLabel: {
            textStyle: {
              color: ' #9FA8DA',
              fontSize: 16
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '(件)',
          splitLine: {
            show: false
          },
          nameTextStyle: {
            color: '#9FA8DA'
          },
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
          }
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
      }
      this.chart.setOption(option)
    }
  }
}
</script>
