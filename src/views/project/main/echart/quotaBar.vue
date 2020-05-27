<template>
  <div :class="className" :cursor="cursor" :style="{height:height,width:width}" />
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
    /* chartData: {
      type: Object,
      required: true
    }, */
    cursor: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    /* chartData: {
      deep: true,
      handler(val) {
        var xAxis = []
        for (let i = 0; i < val.systems.length; i++) {
          xAxis.push(val.systems[i].systemName)
        }
        const param = { dealedData: val.dealedList, dealingData: val.dealingList, xAxis: xAxis }
        this.setOptions(param)
      }
    } */
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
      this.setOptions()
    },
    setOptions() {
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '7%',
          left: '3%',
          right: '7%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: {
          show: false,
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLabel: {
            color: '#fff',
            fontSize: 16
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['系统能效', '产气量', '耗电量', '运行电费'],
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            color: '#fff',
            textStyle: {
              fontSize: 16
            }
          }
        },
        series: [{
          type: 'bar',
          data: [18203, 23489, 29034, 104970],
          barWidth: 30,
          label: {
            show: true,
            position: 'right',
            color: '#fff',
            fontSize: 16
          },
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
          }
        }]
      }
      this.chart.setOption(option)
    }
  }
}

</script>
