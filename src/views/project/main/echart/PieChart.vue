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
    },
    sum: {
      type: Number,
      default: 0
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
      this.chart = echarts.init(this.$el, 'roma')
      this.setOptions(this.chartData)
    },
    setOptions({ data } = {}) {
      this.chart.setOption({
        title: {
          text: this.sum,
          left: '43%',
          top: '37%',
          subtext: '故障报警总数\n（件）',
          textAlign: 'center',
          textStyle: {
            color: '#D6E4FF',
            fontStyle: 'normal',
            fontSize: 36,
            fontFamily: 'Bebas'
          },
          subtextStyle: {
            color: '#D6E4FF',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
            lineHieght: 18,
            align: 'center',
            letterSpacing: 0
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
          center: ['45%', '50%'],
          data: data,
          avoidLabelOverlap: false,
          hoverAnimation: false,
          labelLine: {
            show: false
          },
          label: {
            show: false
          }
        }
      })
    }
  }
}
</script>
