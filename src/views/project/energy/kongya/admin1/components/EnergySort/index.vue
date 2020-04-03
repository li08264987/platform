<template>
  <el-container class="sort-container">
    <el-main class="sort-main">
      <el-row type="flex" class="sort-top-container" align="center">
        <el-col :span="16">
          <div class="sort-chart-container part1">
            <bar-chart :chart-data="kyChartData" />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="sort-chart-container">
            <pie-chart :chart-data="facsPercentData" />
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="sort-bottom-container" align="center">
        <el-col :span="12">
          <div class="sort-chart-container part-left">
            <bar-chart :chart-data="lqChartData" />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="sort-chart-container part-right">
            <bar-chart :chart-data="yxbzChartData" />
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import BarChart from './BarChart'
import PieChart from './PieChart'
export default {
  components: {
    BarChart,
    PieChart
  },
  data() {
    return {
      kyChartData: {
        data: [{
          name: '1#螺杆空压机',
          value: 290
        }, {
          name: '2#螺杆空压机',
          value: 280
        }, {
          name: '3#螺杆空压机',
          value: 260
        }, {
          name: '4#螺杆空压机',
          value: 240
        }, {
          name: '5#螺杆空压机',
          value: 230
        }, {
          name: '6#螺杆空压机',
          value: 220
        }, {
          name: '7#螺杆空压机',
          value: 200
        }, {
          name: '8#螺杆空压机',
          value: 180
        }, {
          name: '1#离心空压机',
          value: 170
        }, {
          name: '2#离心空压机',
          value: 160
        }, {
          name: '3#离心空压机',
          value: 150
        }, {
          name: '4#离心空压机',
          value: 120
        }, {
          name: '5#离心空压机',
          value: 100
        }, {
          name: '6#离心空压机',
          value: 60
        }],
        xAxis: ['1#螺杆空压机', '2#螺杆空压机', '3#螺杆空压机', '4#螺杆空压机', '5#螺杆空压机', '6#螺杆空压机', '7#螺杆空压机', '8#螺杆空压机', '1#离心空压机', '2#离心空压机', '3#离心空压机', '4#离心空压机', '5#离心空压机', '6#离心空压机'],
        title: '空压站系统能耗排名（KW·H）'
      },
      lqChartData: {
        data: [{
          name: '1#冷却塔',
          value: 280
        }, {
          name: '2#冷却塔',
          value: 260
        }, {
          name: '3#冷却塔',
          value: 230
        }, {
          name: '4#冷却塔',
          value: 200
        }, {
          name: '5#冷却塔',
          value: 180
        }, {
          name: '6#冷却塔',
          value: 160
        }, {
          name: '7#冷却塔',
          value: 130
        }, {
          name: '8#冷却塔',
          value: 100
        }, {
          name: '9#冷却塔',
          value: 80
        }],
        xAxis: ['1#冷却塔', '2#冷却塔', '3#冷却塔', '4#冷却塔', '5#冷却塔', '6#冷却塔', '7#冷却塔', '8#冷却塔', '9#冷却塔'],
        title: '空压站冷却塔能耗排名（KW·H）'
      },
      yxbzChartData: {
        data: [{
          name: '李组长',
          value: 280
        }, {
          name: '王组长',
          value: 260
        }, {
          name: '宋组长',
          value: 230
        }, {
          name: '张组长',
          value: 200
        }, {
          name: '田组长',
          value: 180
        }, {
          name: '郝组长',
          value: 160
        }, {
          name: '林组长',
          value: 130
        }, {
          name: '马组长',
          value: 100
        }, {
          name: '赵组长',
          value: 80
        }],
        xAxis: ['李组长', '王组长', '宋组长', '张组长', '田组长', '郝组长', '林组长', '马组长', '赵组长'],
        title: '空压站运行班组能耗排名（KW·H）'
      },
      facsPercentData: {
        data: [{
          name: '冷却塔组',
          value: 260
        }, {
          name: '空压站系统',
          value: 180
        }, {
          name: '热干机组',
          value: 280
        }, {
          name: '热回收机组',
          value: 260
        }, {
          name: '冷却泵组',
          value: 380
        }],
        title: '设备种类能耗占比'
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .sort-container,
  .sort-main {
    width: 100%;
    height: 100%;
  }
  .sort-main {
    padding: 15px;
  }
  .sort-top-container {
    width: 100%;
    height: 40%;
  }
  .sort-bottom-container {
    width: 100%;
    height: calc(60% - 15px);
    margin-top: 15px;
  }
  .sort-chart-container {
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .sort-chart-container.part1 {
    width: calc(100% - 15px);
    margin-right: 15px;
  }
  .sort-chart-container.part-left {
    width: calc(100% - 7.5px);
    margin-right: 7.5px;
  }
  .sort-chart-container.part-right {
    width: calc(100% - 7.5px);
    margin-left: 7.5px;
  }
</style>
