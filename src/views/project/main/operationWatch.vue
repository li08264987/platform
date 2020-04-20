<template>
  <div class="operation-watch">
    <div class="first-row" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>运行监测</span>
      </div>
    </div>

    <div class="radio-container">
      <el-radio-group v-model="systems.defaultSystemName" class="operation-group" @change="radioChange">
        <el-radio-button
          v-for="item in systems.systemsRadio"
          :key="item.systemCode"
          :label="item.systemName"
          :value="item.systemCode"
        />
      </el-radio-group>
    </div>

    <div class="operation-table">
      <el-table :show-header="showHeader" :data="operation.tableData" border>
        <el-table-column prop="type" label="" align="center" />
        <el-table-column prop="value" label="" align="center" />
      </el-table>
    </div>

  </div>
</template>

<script>
import { fetchSystem } from '@/api/main/operationWatch'
export default {
  name: 'OperationWatch',
  components: {},
  data() {
    return {
      showHeader: false,
      operation: {
        tableData: [{
          type: '总流量',
          value: '39m³/h'
        },
        {
          type: '总压力',
          value: '3.4bar'
        },
        {
          type: '平均温度',
          value: '36℃'
        },
        {
          type: '冷却水温度',
          value: '39℃'
        }]
      },
      systems: {
        systemsRadio: [],
        defaultSystemCode: '',
        defaultSystemName: ''
      }
    }
  },

  computed: {},

  mounted() {
    this.initOperationWatchData()
  },

  methods: {
    initOperationWatchData: function() {
      this.getSystem()
    },
    getSystem: function() {
      fetchSystem().then((res) => {
        this.systems.systemsRadio = res.data
        if (res.data.length > 0) {
          this.systems.defaultSystemCode = res.data[0].systemCode
          this.systems.defaultSystemName = res.data[0].systemName
        }
      }).catch(err => {
        console.log(err)
      })
    },
    radioChange: function(params) {
      switch (params) {
        case '空压系统':
          this.operation.tableData = [{
            type: '总流量',
            value: '39m³/h'
          },
          {
            type: '总压力',
            value: '3.4bar'
          },
          {
            type: '平均温度',
            value: '36℃'
          },
          {
            type: '冷却水温度',
            value: '39℃'
          }]
          break
        case '氢氮系统':
          this.operation.tableData = [{
            type: '总流量',
            value: '39m³/h'
          },
          {
            type: '总压力',
            value: '39bar'
          },
          {
            type: '平均温度',
            value: '39℃'
          },
          {
            type: '冷却水温度',
            value: '39℃'
          }]
          break
        case '真空系统':
          this.operation.tableData = [{
            type: '真空度',
            value: '39kPa'
          },
          {
            type: '温度',
            value: '39℃'
          }]
          break
        case '电力系统':
          this.operation.tableData = [{
            type: '总瞬时功率',
            value: '39kWh'
          },
          {
            type: '有功功率',
            value: '39kWh'
          },
          {
            type: '无功功率',
            value: '39kWh'
          }]
          break
      }
    }
  }
}
</script>

<style lang='scss'>
.operation-watch {
  .first-row{
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    height: 1.9vw;
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
  }

  .radio-container{
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
    height: 2.9vw;
  }
  .operation-group{
    margin-top: 1vw;
    margin-left: 1vw;
    position: relative;
    border: unset;
    .el-radio-button__inner{
      color: #B5BFF6;
      background-color: rgba(0,0,0,0);
      border-top: 1px solid #243B9E;
      border-bottom: 1px solid #243B9E;
      border-right:1px solid #243B9E;
      height: 1.9vw;
      /* width: 5vw; */
      line-height: 0.9vw;
    }
    .el-radio-button:first-child .el-radio-button__inner{
      border-left:1px solid #243B9E;
    }
    .el-radio-button__orig-radio:checked+.el-radio-button__inner{
      background-image: linear-gradient(132deg, #602FE9, #2F54EB);
      background-color: transparent;
    }
  }

  .operation-table{
    margin-left: 1vw;
    flex-shrink: 1;
    flex-grow: 1;
    width: 100%;
    height: 0;
    padding-right: 1.63vw;
    .el-table{
        background-color:transparent;
        width: 100%;
        border-color: #243B9E;
      }
      .el-table--border::after, .el-table--group::after, .el-table::before{
        background-color:unset;
      }
      .el-table tr{
          border-color: #243B9E;
      }
      .el-table td{
        padding: 0.4vw 0;
        height: 2.5vw;
        border-color: #243B9E;
      }

      .el-table tr, .el-table .el-table_1_column_1{
        background-color:rgba(47,84,235,0.16);
        color:  #9FA8DA;
        font-size: 0.85vw;
      }
      .el-table tbody tr td:last-child{
        border-color: #243B9E;
        background-color:transparent;
        color:  #fff;
        font-size: 1.2vw;
      }

      .el-table__body tr:hover > td {
        background-color:unset !important;
      }
    }
}
</style>
<style lang="scss" scoped>
#left-container .operation-watch{
    display: flex;
    flex-direction: column;
    position: relative;
    background: rgba(52,24,171,0.20);
    border: 1px solid #3418AB;
    box-shadow: inset 0 1px 33px 0 rgba(52,24,171,0.50);
    border-radius: 4px;
    width: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    height: 0;
    margin-top: 1vw;
}
</style>
