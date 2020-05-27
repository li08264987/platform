<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
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
    }
  },
  data() {
    return {
      chart: null,
      option: null
    }
  },
  computed: {
    currentSystem() {
      return this.$store.state.settings.currentView.value
    }
  },
  watch: {
    currentSystem: {
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
    }
  },
  mounted() {
    this.initChart()
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
      this.chart = echarts.init(document.getElementById(this.id))
      this.option = {
        backgroundColor: 'transparent',
        title: {
          text: '实时产量：',
          textStyle: {
            color: '#9FA8DA',
            fontSize: '18'
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: '16'
          },
          left: 'center',
          top: '5%'
        },
        tooltip: {
          trigger: 'axis'
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
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              textStyle: {
                color: '#9FA8DA',
                fontSize: 14
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
            name: '实时产量:m³/h',
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
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
          },
          {
            type: 'line',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            lineStyle: {
              color: '#fff'
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
