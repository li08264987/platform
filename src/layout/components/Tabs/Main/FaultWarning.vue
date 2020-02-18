<template>
  <div class="failure-warning">
    <div id="warning-pie" :style="{width: '100%', height: '300px'}" />
    <div id="warning-bar" :style="{width: '100%', height: '300px'}" />
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'FaultWarning',
  components: {},
  data() {
    return {
      optionPie: {
        title: {
          text: 529,
          left: '43%',
          top: '43%',
          subtext: '故障报警总数\n（件）',
          textAlign: 'center',
          textStyle: {
            color: '#D6E4FF',
            fontStyle: 'normal',
            fontSize: 36
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: false
        },
        series: {
          color: ['#EB2E95', '#3D3BEA'],
          type: 'pie',
          radius: ['55%', '70%'],
          center: ['45%', '55%'],
          avoidLabelOverlap: false,
          right: '11%',
          top: '15%',
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          data: [{
            value: 24,
            name: '待处理故障'
          },
          {
            value: 529,
            name: '已处理故障'
          }]
        }
      }
    }
  },
  computed: {},
  mounted() {
    this.drawPie()
    this.drawBar()
  },
  methods: {
    drawPie() {
      const chartmainline = echarts.init(document.getElementById('warning-pie'))
      chartmainline.setOption(this.optionPie)
    },
    drawBar() {
      const chartmainline = echarts.init(document.getElementById('warning-bar'))
      const optionBar = {
        grid: {
          top: '12%',
          bottom: '9%',
          left: '15%'
        },
        legend: {
          right: '10%',
          top: '3%',
          textStyle: {
            color: '#9FA8DA'
          },
          itemWidth: 10,
          itemHeight: 15
        },
        tooltip: {

        },
        xAxis: {
          type: 'category',
          data: ['热水', '冷水', '氮气', '氢气', '压缩'],
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
              color: ' #9FA8DA'
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
        series: [
          {
            name: '已处理故障',
            type: 'bar',
            data: [356, 356, 356, 356, 356],
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
            name: '未处理故障',
            type: 'bar',
            data: [87, 87, 87, 87, 87],
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
            }
          }
        ]
      }
      chartmainline.setOption(optionBar)
    }
  }
}
</script>

<style lang="scss" scoped>
#right-container .failure-warning{
  display: flex;
  flex-direction: column;
  position: relative;
  top: 40px;
}
</style>
