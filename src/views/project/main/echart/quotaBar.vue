<template>
  <div :id="id" :class="className" :cursor="cursor" :style="{height:height,width:width}" />
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
    id: {
      type: String,
      default: 'chart'
    },
    chartData: {
      type: Object,
      required: true
    },
    cursor: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      chart: null,
      option: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions()
      }
    },
    mainTimeType: {
      handler(val) {
        this.timeType = val
        this.setOptions()
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
      this.setOptions()
    },
    setOptions() {
      var option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function(param) {
            var html = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#2F54EB;"></span>' + param.name + '：' + param.value
            return html
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
          data: ['运行能费', '耗电量', '产气量', '系统能效'],
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
          data: [30, 40, 50, 60],
          barWidth: 30,
          label: {
            show: true,
            position: 'right',
            color: '#fff',
            fontSize: 16,
            formatter: function(value) {
              return value.data + '%'
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = [
                  ['#2F54EB', 'rgba(61,59,234,0.00)']
                ]
                /* var index = params.dataIndex
                if (params.dataIndex >= colorList.length) {
                  index = params.dataIndex - colorList.length
                } */
                return new echarts.graphic.LinearGradient(0, 0, 1, 0,
                  [{
                    offset: 1,
                    color: colorList[0][0]
                  },
                  {
                    offset: 0,
                    color: colorList[0][1]
                  }
                  ])
              }
            }
          }
        }]
      }
      this.chart.setOption(option)
    }
  }
}

</script>
