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
      type: Array,
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
      this.setOptions(this.chartData)
    },
    setOptions(chartData) {
      if (chartData) {
        var series = []; var legendData = []; var xAxisData = []
        for (var ii = 0; ii < chartData.length; ii++) {
          var sData = []
          for (var j = 0; j < chartData[ii].data.length; j++) {
            sData.push(chartData[ii].data[j].value)
          }
          series.push({
            name: chartData[ii].name,
            smooth: false,
            type: 'line',
            symbolSize: 6,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2
                }
              }
            },
            data: sData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          })
          legendData.push(chartData[ii].name)
          if (xAxisData.length === 0) {
            for (var i = 0; i < chartData[ii].data.length; i++) {
              xAxisData.push(chartData[ii].data[i].name)
            }
          }
        }
        this.chart.setOption({
          title: {
            show: true,
            text: '逐时用能曲线',
            textStyle: {
              color: '#41475D',
              fontSize: 16,
              fontWeight: 'bold'
            },
            left: 20,
            top: 20
          },
          xAxis: {
            data: xAxisData,
            boundaryGap: false,
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#858B9C'
            },
            axisLine: {
              lineStyle: {
                color: '#E2E4EA'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#E2E4EA'
              }
            }
          },
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
          yAxis: {
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#858B9C'
            },
            splitLine: {
              lineStyle: {
                color: '#E2E4EA'
              }
            },
            splitArea: {
              show: false
            }
          },
          legend: {
            data: legendData,
            top: 20
          },
          series: series
        })
      }
    }
  }
}
</script>
