<template>
  <div class="failure-warning">
    <div class="first-rows" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>故障报警</span>
      </div>
    </div>

    <el-tabs v-model="activeName" type="card" @tab-click="tabClick">
      <el-tab-pane label="系统" name="first">
        <div id="warning-pie" :style="{width: '21vw', height: '16vw'}" />
        <div class="legend-container">
          <div class="dealing">
            <div class="text">待处理故障</div>
            <div class="number">24</div>
          </div>
          <div class="dealed">
            <div class="dealing">
              <div class="text">已处理故障</div>
              <div class="number">529</div>
            </div>
          </div>
        </div>
        <div id="warning-bar" :style="{width: '21vw', height: '16vw'}" />
      </el-tab-pane>
      <el-tab-pane label="区域" name="second">
        <div id="warning-pie2" :style="{width: '21vw', height: '16vw'}" />
        <div class="legend-container">
          <div class="dealing">
            <div class="text">待处理故障</div>
            <div class="number">42</div>
          </div>
          <div class="dealed">
            <div class="dealing">
              <div class="text">已处理故障</div>
              <div class="number">925</div>
            </div>
          </div>
        </div>
        <div id="warning-bar2" :style="{width: '21vw', height: '16vw'}" />
      </el-tab-pane>
    </el-tabs>
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
          top: '37%',
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
          center: ['45%', '50%'],
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
      },
      optionBar: {
        grid: {
          top: '2%',
          bottom: '9%',
          left: '10%'
        },
        legend: {
          right: '9%',
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
      },
      activeName: 'first'
    }
  },
  computed: {},
  mounted() {
    this.drawPie('warning-pie', this.optionPie)
    this.drawBar('warning-bar', this.optionBar)
  },
  methods: {
    drawPie(id, optionPie) {
      const chartmainline = echarts.init(document.getElementById(id))
      chartmainline.setOption(optionPie)
    },
    drawBar(id, optionBar) {
      const chartmainline = echarts.init(document.getElementById(id))
      chartmainline.setOption(optionBar)
    },
    tabClick(tab, event) {
      if (tab.name === 'first') {
        this.drawPie('warning-pie', this.optionPie)
        this.drawBar('warning-bar', this.optionBar)
      } else {
        /* var temp = this.optionPie
        temp.series.data[0].value = 42
        temp.series.data[1].value = 92 */
        this.drawPie('warning-pie2', this.optionPie)
        this.drawBar('warning-bar2', this.optionBar)
      }
    }
  }
}
</script>

<style lang="scss">
.failure-warning{
  .el-tabs{
    flex-shrink: 1;
    flex-grow: 1;
    height: 0;
  }
  .el-tabs__header{
      width: 10vw;
      top: -1.5vw;
      left: 16vw;
      border-bottom: unset;
    }
    .el-tabs__item.is-active{
      color: #5F60FF;
    }
    .el-tabs__item:hover{
      color: #5F60FF;
    }
    .el-tabs__content{
      top: -5vw;
    }
    .el-tabs__item{
      padding: 0 0.5vw !important;
      font-family: MicrosoftYaHeiUI;
      font-size: 0.85vw;
      letter-spacing: 0;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav{
      border: unset;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item{
      border-left: unset;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
      border-bottom-color: transparent;
    }
}
</style>
<style lang="scss" scoped>
.failure-warning{
  display: flex;
  flex-direction: column;
  position: relative;
  background: rgba(52,24,171,0.20);
  border: 1px solid #3418AB;
  box-shadow: inset 0 1px 33px 0 rgba(52,24,171,0.50);
  border-radius: 4px;
  flex-shrink: 0;
  flex-grow: 0;
  height: 32vw;
  .first-rows{
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    height: 1.9vw;
  }
  .title{
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: 1;
    height: 100%;
    .logo{
        width: 0.2vw;
        height: 1vw;
        background-image: linear-gradient(180deg, #4928D4 0%, #3418AB 100%);
        margin-left: 1vw;
        margin-top: 0.8vw;
        margin-right: 0.5vw;
    }
    span {
      margin-top: 0.9vw;
      font-family: MicrosoftYaHeiUISemibold;
      font-size: 0.98vw;
      color: #C8D6FE;
      letter-spacing: 0;
      line-height:0.8vw;
    }
  }

  .legend-container{
    display: flex;
    flex-direction: column;
    width:4vw;
    position: absolute;
    top: 4.5vw;
    left: 17.2vw;
    .dealing{
      margin-bottom: 1.7vw;
      .text{
        font-family: MicrosoftYaHeiUI;
        font-size: 0.75vw;
        color: #D6E4FF;
        letter-spacing: 0;
        line-height: 0.7vw;
        margin-bottom: 0.5vw;
      }
      .number{
        font-family: Bebas;
        font-size: 1.5vw;
        color: #EB2E95;
        letter-spacing: 0;
        line-height: 1vw;
      }
    }
    .dealed{
      margin-top: 2.1vw;
      .text{
        font-family: MicrosoftYaHeiUI;
        font-size: 0.75vw;
        color: #D6E4FF;
        letter-spacing: 0;
        line-height: 0.7vw;
        margin-bottom: 0.5vw;
      }
      .number{
        font-family: Bebas;
        font-size: 1.5vw;
        color: #3D3BEA;
        letter-spacing: 0;
         line-height: 1vw;
      }
    }
  }
}
</style>
