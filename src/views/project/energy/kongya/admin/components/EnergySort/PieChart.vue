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
    setOptions({ data, title } = {}) {
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
          top: 60,
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
          padding: [5, 10]
        },
        legend: {
          show: true,
          orient: 'vertical',
          right: 50,
          top: 50
        },
        series: [{
          name: title,
          type: 'pie',
          data: data,
          hoverAnimation: false,
          center: ['40%', '55%'],
          radius: ['0', '70%'],
          label: {
            show: false
          }
        }]
      })
    }
  }
}
</script>
