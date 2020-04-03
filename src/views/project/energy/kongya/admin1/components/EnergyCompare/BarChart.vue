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
      this.setOptions(this.chartData)
    },
    setOptions({ data, xAxis, title } = {}) {
      this.chart.setOption({
        title: {
          show: true,
          text: title,
          textStyle: {
            color: '#41475D',
            fontSize: 16,
            fontWeight: 'bold'
          },
          left: 20,
          top: 20
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 100,
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
          show: true,
          top: 60
        },
        series: [{
          name: '实际值',
          itemStyle: {
            normal: {
              color: '#5878B4'
            }
          },
          type: 'bar',
          barWidth: '25%',
          data: data.chart1,
          label: {
            show: true,
            color: '#5878B4',
            position: 'top',
            shadowBlur: 1,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#5878B4'
          },
          animationDuration: 2000,
          animationEasing: 'cubicInOut'
        }, {
          name: '目标值',
          itemStyle: {
            normal: {
              color: '#28AA91'
            }
          },
          type: 'bar',
          barWidth: '25%',
          data: data.chart2,
          label: {
            show: true,
            color: '#28AA91',
            position: 'top',
            shadowBlur: 1,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#28AA91'
          },
          animationDuration: 2000,
          animationEasing: 'cubicInOut'
        }]
      })
    }
  }
}
</script>
