<template>
  <div class="dimensions-container">
    <div class="dimensions-right-container">
      <div class="dimensions-righttop-container">
        <div class="dimensions-righttop-container-chart1">
          <bar-chart :chart-data="barChartData" />
        </div>
        <div class="dimensions-righttop-container-chart2">
          <pie-chart :chart-data="pieChartData" />
        </div>
      </div>
      <div class="dimensions-rightbootom-container">
        <line-chart :chart-data="lineChartData" />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from './BarChart'
import PieChart from './PieChart'
import LineChart from './LineChart'
export default {
  components: {
    BarChart,
    PieChart,
    LineChart
  },
  data() {
    return {
      barChartData: {
        data: [{
          name: '空压站系统',
          value: 290
        }, {
          name: '冷却塔系统',
          value: 460
        }, {
          name: '3#冷却塔',
          value: 80
        }, {
          name: '5#冷却塔',
          value: 70
        }, {
          name: '热干机组',
          value: 220
        }, {
          name: '热回收机组',
          value: 360
        }, {
          name: '冷却泵组',
          value: 190
        }],
        xAxis: ['空压站系统', '冷却塔系统', '3#冷却塔', '5#冷却塔', '热干机组', '热回收机组', '冷却泵组']
      },
      pieChartData: {
        data: [{
          name: '1#冷却塔',
          value: 40
        }, {
          name: '2#冷却塔',
          value: 60
        }, {
          name: '3#冷却塔',
          value: 50
        }, {
          name: '4#冷却塔',
          value: 30
        }, {
          name: '5#冷却塔',
          value: 60
        }, {
          name: '6#冷却塔',
          value: 50
        }, {
          name: '7#冷却塔',
          value: 30
        }, {
          name: '8#冷却塔',
          value: 40
        }, {
          name: '9#冷却塔',
          value: 30
        }]
      },
      lineChartData: [{
        name: '空压机组',
        data: [{ name: '1:00', value: 15 }, { name: '2:00', value: 10 }, { name: '3:00', value: 13 }, { name: '4:00', value: 18 }, { name: '5:00', value: 15 }, { name: '6:00', value: 16 }, { name: '7:00', value: 12 }, { name: '8:00', value: 11 }, { name: '9:00', value: 6 }, { name: '10:00', value: 8 }, { name: '11:00', value: 8 }, { name: '12:00', value: 12 }, { name: '13:00', value: 14 }, { name: '14:00', value: 15 }, { name: '15:00', value: 12 }, { name: '16:00', value: 10 }, { name: '17:00', value: 9 }, { name: '18:00', value: 11 }, { name: '19:00', value: 13 }, { name: '20:00', value: 14 }, { name: '21:00', value: 14 }, { name: '22:00', value: 12 }, { name: '23:00', value: 10 }]
      }, {
        name: '冷却塔组',
        data: [{ name: '1:00', value: Math.round(Math.random() * 15) + 5 }, { name: '2:00', value: Math.round(Math.random() * 15) + 5 }, { name: '3:00', value: Math.round(Math.random() * 15) + 5 }, { name: '4:00', value: Math.round(Math.random() * 15) + 5 }, { name: '5:00', value: Math.round(Math.random() * 15) + 5 }, { name: '6:00', value: Math.round(Math.random() * 15) + 5 }, { name: '7:00', value: Math.round(Math.random() * 15) + 5 }, { name: '8:00', value: 11 }, { name: '9:00', value: Math.round(Math.random() * 15) + 5 }, { name: '10:00', value: Math.round(Math.random() * 15) + 5 }, { name: '11:00', value: Math.round(Math.random() * 15) + 5 }, { name: '12:00', value: 12 }, { name: '13:00', value: Math.round(Math.random() * 15) + 5 }, { name: '14:00', value: Math.round(Math.random() * 15) + 5 }, { name: '15:00', value: 12 }, { name: '16:00', value: Math.round(Math.random() * 15) + 5 }, { name: '17:00', value: Math.round(Math.random() * 15) + 5 }, { name: '18:00', value: Math.round(Math.random() * 15) + 5 }, { name: '19:00', value: Math.round(Math.random() * 15) + 5 }, { name: '20:00', value: Math.round(Math.random() * 15) + 5 }, { name: '21:00', value: Math.round(Math.random() * 15) + 5 }, { name: '22:00', value: Math.round(Math.random() * 15) + 5 }, { name: '23:00', value: Math.round(Math.random() * 15) + 5 }]
      }, {
        name: '热干机组',
        data: [{ name: '1:00', value: Math.round(Math.random() * 15) + 5 }, { name: '2:00', value: Math.round(Math.random() * 15) + 5 }, { name: '3:00', value: Math.round(Math.random() * 15) + 5 }, { name: '4:00', value: Math.round(Math.random() * 15) + 5 }, { name: '5:00', value: Math.round(Math.random() * 15) + 5 }, { name: '6:00', value: Math.round(Math.random() * 15) + 5 }, { name: '7:00', value: Math.round(Math.random() * 15) + 5 }, { name: '8:00', value: 11 }, { name: '9:00', value: Math.round(Math.random() * 15) + 5 }, { name: '10:00', value: Math.round(Math.random() * 15) + 5 }, { name: '11:00', value: Math.round(Math.random() * 15) + 5 }, { name: '12:00', value: 12 }, { name: '13:00', value: Math.round(Math.random() * 15) + 5 }, { name: '14:00', value: Math.round(Math.random() * 15) + 5 }, { name: '15:00', value: 12 }, { name: '16:00', value: Math.round(Math.random() * 15) + 5 }, { name: '17:00', value: Math.round(Math.random() * 15) + 5 }, { name: '18:00', value: Math.round(Math.random() * 15) + 5 }, { name: '19:00', value: Math.round(Math.random() * 15) + 5 }, { name: '20:00', value: Math.round(Math.random() * 15) + 5 }, { name: '21:00', value: Math.round(Math.random() * 15) + 5 }, { name: '22:00', value: Math.round(Math.random() * 15) + 5 }, { name: '23:00', value: Math.round(Math.random() * 15) + 5 }]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .dimensions-container {
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
  }

  .dimensions-left-container {
    width: 200px;
    height: 100%;
    margin-right: 15px;
    background: #FFFFFF;
    border: 1px solid #E4E9F0;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
  }

  .dimensions-left-tree-container{
    width: 100%;
    height: 100%;
    overflow: auto;
    flex-grow: 1;
    flex-shrink: 1;
  }

  .tree-title{
    margin: 0 0px 10px 10px;
  }

  .dimensions-left-treeCheck-container{
    padding: 10px 24px;
  }

  .dimensions-right-container {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
  }

  .dimensions-righttop-container {
    width: 100%;
    height: 40%;
    margin-bottom: 15px;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
  }

  .dimensions-rightbootom-container {
    flex-grow: 1;
    flex-shrink: 1;
    background: #FFFFFF;
    border: 1px solid #E4E9F0;
  }

  .dimensions-righttop-container-chart1 {
    width: 60%;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #E4E9F0;
    margin-right: 15px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .dimensions-righttop-container-chart2 {
    flex-grow: 1;
    flex-shrink: 1;
    background: #FFFFFF;
    border: 1px solid #E4E9F0;
  }
</style>
