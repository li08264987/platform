<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
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
    setOptions(data) {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        // legend: {
        //   top: 10,
        //   icon: 'rect',
        //   itemWidth: 14,
        //   itemHeight: 5,
        //   itemGap: 13,
        //   data: [data.legendName],
        //   left: '4%',
        //   textStyle: {
        //     fontSize: 12,
        //     color: '#333'
        //   }
        // },
        grid: {
          top: 30,
          left: '4%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
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
          },
          data: data.datatime
        }],
        yAxis: [{
          type: 'value',
          name: data.legendName + '(' + data.unit + ')',
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
        }],
        series: [{
          name: [data.legendName],
          type: 'line',
          smooth: false,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2
              }
            }
          },
          animationDuration: 2800,
          animationEasing: 'quadraticOut',
          data: data.datavalue
        }]
      })
    }
  }
}
</script>
