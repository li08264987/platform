<template>
  <el-container class="compare-container">
    <el-main class="compare-main">
      <el-row type="flex" class="compare-top-container" align="center">
        <el-col :span="9">
          <div class="compare-chart-container part1">
            <bar-chart :chart-data="chartData" />
          </div>
        </el-col>
        <el-col :span="15">
          <div class="compare-chart-container" style="padding: 15px;">
            <div class="title-bar">
              <span>能耗对比图</span>
              <el-button class="btn">添加时间段</el-button>
            </div>
            <div class="chart-grid">
              <line-chart :chart-data="lineChartData" />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="compare-bottom-container" align="center">
        <el-col :span="24">
          <div class="compare-chart-container energy-copare">
            <el-table
              :data="tableData"
              header-row-class-name="table-header"
              style="width: 100%; overflow-y: auto;"
            >
              <el-table-column
                prop="time"
                label="选择期时间"
              />
              <el-table-column
                prop="elec"
                label="耗电量（KW·H）"
              />
              <el-table-column
                prop="time1"
                label="对比期一时间"
              />
              <el-table-column
                prop="elec1"
                label="耗电量（KW·H）"
              />
              <el-table-column
                prop="time2"
                label="对比期二时间"
              />
              <el-table-column
                prop="elec2"
                label="耗电量（KW·H）"
              />
            </el-table>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import BarChart from './BarChart'
import LineChart from './LineChart'
export default {
  components: {
    BarChart,
    LineChart
  },
  data() {
    return {
      chartData: {
        title: '能耗对比概览',
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
        time: '2019-08-01',
        elec: 500,
        time1: '2019-05-01',
        elec1: 400,
        time2: '2019-03-01',
        elec2: 300
      }, {
        time: '2019-08-01',
        elec: 500,
        time1: '2019-05-01',
        elec1: 400,
        time2: '2019-03-01',
        elec2: 300
      }, {
        time: '2019-08-01',
        elec: 500,
        time1: '2019-05-01',
        elec1: 400,
        time2: '2019-03-01',
        elec2: 300
      }, {
        time: '2019-08-01',
        elec: 500,
        time1: '2019-05-01',
        elec1: 400,
        time2: '2019-03-01',
        elec2: 300
      }, {
        time: '2019-08-01',
        elec: 500,
        time1: '2019-05-01',
        elec1: 400,
        time2: '2019-03-01',
        elec2: 300
      }, {
        time: '2019-08-01',
        elec: 500,
        time1: '2019-05-01',
        elec1: 400,
        time2: '2019-03-01',
        elec2: 300
      }, {
        time: '2019-08-01',
        elec: 500,
        time1: '2019-05-01',
        elec1: 400,
        time2: '2019-03-01',
        elec2: 300
      }, {
        time: '2019-08-01',
        elec: 500,
        time1: '2019-05-01',
        elec1: 400,
        time2: '2019-03-01',
        elec2: 300
      }, {
        time: '2019-08-01',
        elec: 500,
        time1: '2019-05-01',
        elec1: 400,
        time2: '2019-03-01',
        elec2: 300
      }, {
        time: '2019-08-01',
        elec: 500,
        time1: '2019-05-01',
        elec1: 400,
        time2: '2019-03-01',
        elec2: 300
      }, {
        time: '2019-08-01',
        elec: 500,
        time1: '2019-05-01',
        elec1: 400,
        time2: '2019-03-01',
        elec2: 300
      }],
      lineChartData: [{
        name: '选择时间段',
        data: [{ name: '1:00', value: 15 }, { name: '2:00', value: 10 }, { name: '3:00', value: 13 }, { name: '4:00', value: 18 }, { name: '5:00', value: 15 }, { name: '6:00', value: 16 }, { name: '7:00', value: 12 }, { name: '8:00', value: 11 }, { name: '9:00', value: 6 }, { name: '10:00', value: 8 }, { name: '11:00', value: 8 }, { name: '12:00', value: 12 }, { name: '13:00', value: 14 }, { name: '14:00', value: 15 }, { name: '15:00', value: 12 }, { name: '16:00', value: 10 }, { name: '17:00', value: 9 }, { name: '18:00', value: 11 }, { name: '19:00', value: 13 }, { name: '20:00', value: 14 }, { name: '21:00', value: 14 }, { name: '22:00', value: 12 }, { name: '23:00', value: 10 }]
      }, {
        name: '对比时间段',
        data: [{ name: '1:00', value: Math.round(Math.random() * 15) + 5 }, { name: '2:00', value: Math.round(Math.random() * 15) + 5 }, { name: '3:00', value: Math.round(Math.random() * 15) + 5 }, { name: '4:00', value: Math.round(Math.random() * 15) + 5 }, { name: '5:00', value: Math.round(Math.random() * 15) + 5 }, { name: '6:00', value: Math.round(Math.random() * 15) + 5 }, { name: '7:00', value: Math.round(Math.random() * 15) + 5 }, { name: '8:00', value: 11 }, { name: '9:00', value: Math.round(Math.random() * 15) + 5 }, { name: '10:00', value: Math.round(Math.random() * 15) + 5 }, { name: '11:00', value: Math.round(Math.random() * 15) + 5 }, { name: '12:00', value: 12 }, { name: '13:00', value: Math.round(Math.random() * 15) + 5 }, { name: '14:00', value: Math.round(Math.random() * 15) + 5 }, { name: '15:00', value: 12 }, { name: '16:00', value: Math.round(Math.random() * 15) + 5 }, { name: '17:00', value: Math.round(Math.random() * 15) + 5 }, { name: '18:00', value: Math.round(Math.random() * 15) + 5 }, { name: '19:00', value: Math.round(Math.random() * 15) + 5 }, { name: '20:00', value: Math.round(Math.random() * 15) + 5 }, { name: '21:00', value: Math.round(Math.random() * 15) + 5 }, { name: '22:00', value: Math.round(Math.random() * 15) + 5 }, { name: '23:00', value: Math.round(Math.random() * 15) + 5 }]
      }]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .compare-container,
  .compare-main {
    width: 100%;
    height: 100%;
  }
  .compare-main {
    padding: 15px;
  }
  .compare-top-container {
    width: 100%;
    height: 40%;
  }
  .compare-bottom-container {
    width: 100%;
    height: calc(60% - 15px);
    margin-top: 15px;
  }
  .compare-chart-container {
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .compare-chart-container.part1 {
    width: calc(100% - 15px);
    margin-right: 15px;
  }
  .title-bar span {
    font-size: 16px;
    color: rgba(65,71,93,1);
    font-weight: bold;
  }
  .title-bar .btn {
    background-color: #586CB4;
    border-radius:4px;
    color: white;
    padding: 6px;
    float: right;
  }
  .title-bar {
    height: 28px;
  }
  .chart-grid {
    height: calc(100% - 28px);
  }
</style>
<style lang="scss">
  .compare-chart-container.energy-copare .el-table {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .compare-chart-container.energy-copare .el-table .el-table__header-wrapper {
    flex-grow: 0;
    flex-shrink: 0;
  }
  .compare-chart-container.energy-copare .el-table .el-table__body-wrapper {
    overflow-y: auto;
  }
</style>
