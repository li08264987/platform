<template>
  <el-container class="stard-container">
    <el-main class="stard-main">
      <el-row type="flex" class="stard-top-container" align="center">
        <el-col :span="10">
          <div class="stard-chart-container part1">
            <bar-chart :chart-data="chartData" />
          </div>
        </el-col>
        <el-col :span="14">
          <div class="stard-chart-container stard-table">
            <div class="stard-table-title">指标设置</div>
            <div class="stard-table-main">
              <el-table
                :data="tableData"
                header-row-class-name="table-header"
                style="width: 100%; overflow-y: auto;"
              >
                <el-table-column
                  prop="sys"
                  label="能源系统"
                  width="120"
                />
                <el-table-column
                  label="能耗评分"
                  class="energy-stard-pregress-td"
                >
                  <template slot-scope="scope">
                    <el-progress
                      :percentage="scope.row.score"
                      :show-text="false"
                      :stroke-width="20"
                      :color="computeColor(scope.row.score)"
                      class="energy-stard-pregress"
                    />
                    <span :style="{marginLeft:'5px',color:computeColor(scope.row.score)}">{{ scope.row.score }}分</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="stard"
                  label="指标设置"
                  width="180"
                >
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.stard" type="number" class="input-with-setting">
                      <el-button slot="append" icon="el-icon-setting" />
                    </el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="unit"
                  label="指标单位"
                  width="120"
                />
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="stard-bottom-container" align="center">
        <el-col :span="24">
          <div class="stard-chart-container stard-table">
            <div class="stard-table-title">胶水厂供电系统能耗系统概览</div>
            <div class="stard-table-main">
              <el-table
                :data="jscTableData"
                :span-method="jscSpanMethod"
                header-row-class-name="table-header"
                style="width: 100%; overflow-y: auto;"
              >
                <el-table-column
                  prop="area"
                  label="能耗区域"
                />
                <el-table-column
                  prop="sys"
                  label="耗能系统"
                />
                <el-table-column
                  prop="stard"
                  label="耗量指标（KW·H/m²）"
                />
                <el-table-column
                  prop="real"
                  label="实际耗量（KW·H/m²）"
                />
                <el-table-column
                  prop="change"
                  label="能耗变化"
                >
                  <template slot-scope="scope">
                    <span :style="{ color:scope.row.change.indexOf('-')===-1?'#FF5B60':'#28AA91' }">{{ scope.row.change }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import BarChart from './BarChart'
export default {
  components: {
    BarChart
  },
  data() {
    return {
      chartData: {
        title: '能耗指标系统分布图',
        xAxis: ['电力系统', '冷水系统', '热水系统', '空压系统', '真压系统'],
        data: {
          chart1: [{
            name: '电力系统',
            value: 600
          }, {
            name: '冷水系统',
            value: 500
          }, {
            name: '热水系统',
            value: 480
          }, {
            name: '空压系统',
            value: 390
          }, {
            name: '真压系统',
            value: 310
          }],
          chart2: [{
            name: '电力系统',
            value: 490
          }, {
            name: '冷水系统',
            value: 400
          }, {
            name: '热水系统',
            value: 400
          }, {
            name: '空压系统',
            value: 370
          }, {
            name: '真压系统',
            value: 300
          }]
        }
      },
      tableData: [{
        sys: '电力系统',
        score: 70,
        stard: 70,
        unit: 'KW·H/㎡'
      }, {
        sys: '冷水系统',
        score: 48,
        stard: 70,
        unit: 'KW·H/㎡'
      }, {
        sys: '热水系统',
        score: 89,
        stard: 70,
        unit: 'KW·H/㎡'
      }, {
        sys: '空压系统',
        score: 74,
        stard: 70,
        unit: 'KW·H/㎡'
      }, {
        sys: '真压系统',
        score: 60,
        stard: 70,
        unit: 'KW·H/㎡'
      }],
      jscTableData: [{
        area: 'A厂区',
        sys: '厂区小计',
        stard: 600,
        real: 720,
        change: '+20%'
      }, {
        area: 'A厂区',
        sys: '冷水系统',
        stard: 600,
        real: 480,
        change: '-20%'
      }, {
        area: 'A厂区',
        sys: '热水系统',
        stard: 600,
        real: 480,
        change: '-20%'
      }, {
        area: 'A厂区',
        sys: '空压系统',
        stard: 600,
        real: 720,
        change: '+20%'
      }, {
        area: 'A厂区',
        sys: '氮气系统',
        stard: 600,
        real: 720,
        change: '+20%'
      }, {
        area: 'A厂区',
        sys: '氢气系统',
        stard: 600,
        real: 720,
        change: '+20%'
      }, {
        area: 'A厂区',
        sys: '其他',
        stard: 600,
        real: 720,
        change: '+20%'
      }, {
        area: 'B厂区',
        sys: '厂区小计',
        stard: 600,
        real: 720,
        change: '+20%'
      }, {
        area: 'B厂区',
        sys: '冷水系统',
        stard: 600,
        real: 480,
        change: '-20%'
      }, {
        area: 'B厂区',
        sys: '热水系统',
        stard: 600,
        real: 480,
        change: '-20%'
      }, {
        area: 'B厂区',
        sys: '空压系统',
        stard: 600,
        real: 720,
        change: '+20%'
      }, {
        area: 'B厂区',
        sys: '氮气系统',
        stard: 600,
        real: 720,
        change: '+20%'
      }, {
        area: 'B厂区',
        sys: '氢气系统',
        stard: 600,
        real: 720,
        change: '+20%'
      }, {
        area: 'B厂区',
        sys: '其他',
        stard: 600,
        real: 720,
        change: '+20%'
      }]
    }
  },
  computed: {
    spanData: function() {
      var resultNames = []
      var index = -1
      for (var i = 0; i < this.jscTableData.length; i++) {
        if (i === 0) {
          resultNames.push({
            name: this.jscTableData[i].area,
            indexs: [i],
            first: i
          })
          index++
        } else {
          if (this.jscTableData[i].area === this.jscTableData[i - 1].area) {
            resultNames[index].indexs.push(i)
          } else {
            resultNames.push({
              name: this.jscTableData[i].area,
              indexs: [i],
              first: i
            })
            index++
          }
        }
      }
      return resultNames
    }
  },
  watch: {
    tableData: {
      handler: function(val, oldval) {
        val.stard = parseInt(val.stard)
      },
      deep: true// 对象内部的属性监听，也叫深度监听
    }
  },
  methods: {
    computeColor: function(value) {
      var color = '#5878B4'
      if (value > 85) color = '#28AA91'
      if (value < 60) color = '#FF5B60'
      return color
    },
    jscSpanMethod: function({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        var rowspan = 0
        for (var i = 0; i < this.spanData.length; i++) {
          if (this.spanData[i].indexs.indexOf(rowIndex) !== -1 && this.spanData[i].first === rowIndex) {
            rowspan = this.spanData[i].indexs.length
          }
        }
        return {
          rowspan: rowspan,
          colspan: 1
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .stard-container,
  .stard-main {
    width: 100%;
    height: 100%;
  }
  .stard-main {
    padding: 15px;
  }
  .stard-top-container {
    width: 100%;
    height: 40%;
  }
  .stard-bottom-container {
    width: 100%;
    height: calc(60% - 15px);
    margin-top: 15px;
  }
  .stard-chart-container {
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .stard-chart-container.part1 {
    width: calc(100% - 15px);
    margin-right: 15px;
  }
  .stard-chart-container.stard-table {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .stard-table-title {
    padding-bottom: 20px;
    font-size: 16px;
    font-family:MicrosoftYaHeiUISemibold;
    color:rgba(65,71,93,1);
    font-weight: bold;
  }
  .stard-table-main {
    height: 0;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: auto;
  }
  .energy-stard-pregress {
    flex-grow: 1;
    flex-shrink: 1;
}
</style>
<style lang="scss">
  .energy-stard-pregress .el-progress-bar__outer {
    border-radius: 0;
  }
  .energy-stard-pregress .el-progress-bar__inner {
    border-radius: 0;
  }
  .stard-table-main .el-table .cell {
    display: flex;
    align-items: center;
  }
</style>
