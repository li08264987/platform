<template>
  <div class="operation-watch">
    <div class="first-row" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>运行监测</span>
      </div>
    </div>

    <div class="radio-container">
      <el-radio-group v-model="operationDefult" class="operation-group" @change="radioChange">
        <el-radio-button label="kongya">空压</el-radio-button>
        <el-radio-button label="danqi">氮气</el-radio-button>
        <el-radio-button label="zhenkong">真空</el-radio-button>
        <el-radio-button label="dian">电</el-radio-button>
        <el-radio-button label="leng">冷</el-radio-button>
        <el-radio-button label="re">热</el-radio-button>
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
export default {
  name: 'OperationWatch',
  components: {},
  data() {
    return {
      operationDefult: 'kongya',
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
      }
    }
  },

  computed: {},

  mounted() {
  },

  methods: {
    radioChange: function(value) {
      switch (value) {
        case 'kongya':
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
        case 'danqi':
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
        case 'zhenkong':
          this.operation.tableData = [{
            type: '真空度',
            value: '39kPa'
          },
          {
            type: '温度',
            value: '39℃'
          }]
          break
        case 'dian':
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
        case 'leng':
          break
        case 're':
          break
        default:
      }
    }
  }
}
</script>

<style lang='scss'>
.operation-watch {
  .first-row{
    .title{
      display: flex;
      flex-direction: row;
      .logo{
          width: 4px;
          height: 18px;
          background-image: linear-gradient(180deg, #4928D4 0%, #3418AB 100%);
          margin-left: 21px;
          margin-top: 13px;
          margin-right: 10px;
      }
      span {
        margin-top: 13px;
        font-family: MicrosoftYaHeiUISemibold;
        font-size: 18px;
        color: #C8D6FE;
        letter-spacing: 0;
        line-height: 16px;
      }
    }
  }

  .operation-group{
    margin-top: 23px;
    margin-left: 22px;
    position: relative;
    border: unset;
    .el-radio-button__inner{
      background-color: rgba(0,0,0,0);
      border-top: 1px solid #243B9E;
      border-bottom: 1px solid #243B9E;
      border-right:1px solid #243B9E;
      height: 32px;
      width: 64px;
      line-height: 10px;
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
    margin-left: 22px;
    .el-table{
        background-color:transparent;
        width: 385px;
        border-color: #243B9E;
        margin-top: 20px;
      }
      .el-table--border::after, .el-table--group::after, .el-table::before{
        background-color:unset;
      }
      .el-table tr{
          border-color: #243B9E;
      }
      .el-table td{
        padding: 6px 0;
        height: 35px;
        border-color: #243B9E;
      }

      .el-table tr, .el-table .el-table_1_column_1{
        background-color:rgba(47,84,235,0.16);
        color:  #9FA8DA;
        font-size: 16px;
      }
      .el-table tbody tr td:last-child{
        border-color: #243B9E;
        background-color:transparent;
        color:  #fff;
        font-size: 24px;
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
    width: 422px;
    height: 270px;
    margin-top: 20px;
    margin-left: 19px;
}
</style>
