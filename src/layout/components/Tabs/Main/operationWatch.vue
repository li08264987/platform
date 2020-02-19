<template>
  <div class="operation-watch">
    <el-radio-group v-model="operationDefult" class="operation-group">
      <el-radio-button label="空压">空压</el-radio-button>
      <el-radio-button label="氮气">氮气</el-radio-button>
      <el-radio-button label="真空">真空</el-radio-button>
      <el-radio-button label="电">电</el-radio-button>
      <el-radio-button label="冷">冷</el-radio-button>
      <el-radio-button label="热">热</el-radio-button>
    </el-radio-group>

    <el-table :show-header="showHeader" :data="operation.tableData" height="145" border class="operation-table">
      <el-table-column prop="type" label="" align="center" />
      <el-table-column prop="value" label="" align="center" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'OperationWatch',
  components: {},
  data() {
    return {
      operationDefult: '空压',
      showHeader: false,
      operation: {
        tableData: [{
          type: '总流量（m³/h）',
          value: '39'
        },
        {
          type: '总压力（bar）',
          value: '3.4'
        },
        {
          type: '平均温度（℃）',
          value: '36'
        },
        {
          type: '冷却水温度（℃）',
          value: '39'
        }]
      }
    }
  },

  computed: {},

  mounted() {
  },

  methods: {}
}
</script>

<style lang='scss'>
#left-container {
  .operation-group{
    .el-radio-group{
    position: relative;
    display: flex;
    flex-direction: row;
    /* top: 715px;
    left: 30px;*/
    border: unset;
    }
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
  .el-table tr .el-table_1_column_2{
    border-color: #243B9E;
    background-color:transparent;
    color:  #fff;
    font-size: 24px;
  }

  .el-table__body tr:hover > td {
    background-color:unset !important;
  }
}
</style>
<style lang="scss" scoped>
#left-container .operation-watch{
    display: flex;
    flex-direction: column;
    position: relative;
    top: 640px;
    left: 40px;
}
</style>
