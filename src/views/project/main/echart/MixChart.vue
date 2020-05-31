<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import { formatTimeToStr } from '@/utils/index'
import echarts from 'echarts'
require('echarts/theme/roma')
import resize from '../mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      option: null,
      timeType: 'day'
    }
  },
  computed: {
    mainTimeType() {
      return this.$store.state.settings.mainTimeType
    }
  },
  watch: {
    /* currentSystem: {
      handler(param) {
        var currentView = this.$store.state.settings.currentView.value
        var titleText = '实时'
        switch (currentView) {
          case 'ky':
            titleText += '产量：'
            break
          case 'qd':
            titleText += '产量：'
            break
          case 'zk':
            titleText += '产量：'
            break
          case 'dianli':
          case 'dl':
            titleText += '功率：'
            break
          default:
        }
        this.option.title.text = titleText
        this.chart.setOption(this.option)
      },
      deep: true
    }, */
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
      var timeList = []
      var dataList = []
      if (this.chartData.data !== null) {
        for (let i = 0; i < this.chartData.data.length; i++) {
          timeList.push(this.chartData.data[i].TIME)
          dataList.push(this.chartData.data[i].VALUE)
        }
      }
      var currentView = this.$store.state.settings.currentView.value
      var unit = ''
      switch (currentView) {
        case 'ky':
        case 'qd':
          unit = 'm³/h'
          break
        case 'zk':
        case 'dianli':
        case 'dl':
          unit = 'kWh'
          break
        default:
      }
      var realTimeData = dataList[dataList.length - 1]
      this.option = {
        backgroundColor: 'transparent',
        title: {
          text: '实时产量：' + realTimeData + unit,
          textStyle: {
            color: '#9FA8DA',
            fontSize: '18'
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: '16'
          },
          right: '5%',
          top: '5%'
        },
        tooltip: {
          trigger: 'item',
          formatter: function(param) {
            var html = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#2F54EB;"></span>' + param.name + '：' + param.value
            return html
          }
          /* axisPointer: {
            label: {
              show: true
            },
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          } */
        },
        grid: {
          left: '13%',
          top: '20%',
          right: '10%',
          bottom: '10%'
        },
        /* toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        }, */
        xAxis: [
          {
            type: 'category',
            data: timeList,
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              textStyle: {
                color: '#9FA8DA',
                fontSize: 14
              },
              formatter: (value) => {
                if (this.timeType === 'day') {
                  return formatTimeToStr(value, 'h:mm')
                } else {
                  return formatTimeToStr(value, 'yyyy-MM-dd')
                }
              }
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#2642BB'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: unit,
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              textStyle: {
                color: '#9FA8DA',
                fontSize: 14,
                fontFamily: 'Bebas'
              }
            },
            nameTextStyle: {
              color: '#9FA8DA',
              fontSize: 14
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#2642BB'
              }
            }
          }
        ],
        series: [
          {
            type: 'bar',
            data: dataList,
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
            label: {
              show: true,
              position: 'top',
              color: '#B7B6FF',
              fontSize: 14
            }
          },
          {
            type: 'line',
            data: dataList,
            lineStyle: {
              color: '#EB2E95'
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
          }
        ]
      }
      this.chart.setOption(this.option)
    }
  }
}
</script>
