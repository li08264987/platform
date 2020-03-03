<template>
  <div class="table-demo">
    <el-table
      :data="tableData"
      :header-cell-style="headerStyle"
      border
      style="width: 100%"
      tooltip-effect="dark"
    >
      <el-table-column prop="rank" label="排名" min-width="30" align="center" />
      <el-table-column prop="floor" label="楼层" min-width="30" align="center" />
      <el-table-column prop="progress" label="能耗评分" min-width="82" align="center" show-overflow-tooltip>
        <template slot="header">
          <el-tooltip class="item" content="注：与历史同期能耗情况对比" placement="bottom-start" popper-class="test">
            <span>能耗评分</span>
          </el-tooltip>
        </template>
        <template slot-scope="scope">
          <el-progress
            type="line"
            stroke-linecap="square"
            :text-inside="false"
            :percentage="scope.row.progress"
            :color="scope.row.color"
            :format="progressFormat"
          />
        </template>
      </el-table-column>
      <el-table-column prop="value" label="能耗值(kwh)" min-width="58" align="center" />
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'DianLiTable',
  data() {
    return {
      page: 1,
      tableData: [
        {
          rank: '一',
          floor: '4F',
          value: 2000,
          progress: 50,
          color: '#11BEBE'
        },
        {
          rank: '二',
          floor: '1F',
          value: 2000,
          progress: 60,
          color: '#11BEBE'
        },
        {
          rank: '三',
          floor: '2F',
          value: 3000,
          progress: 70,
          color: '#DAD128'
        },
        {
          rank: '四',
          floor: '3F',
          value: 4000,
          progress: 80,
          color: '#EB2E95'
        }
      ]
    }
  },
  created() {
  },
  mounted() {},
  methods: {
    handleCurrentChange(val) {
    },
    progressFormat(percentage) {
      return percentage + '分'
    },
    headerStyle({ row, column, rowIndex, columnIndex }) {
      let str = 'background:#DCDFE6;'
      if (columnIndex === 2) {
        str += 'color: #fff'
      }
      return str
    }
  }
}
</script>

<style lang="scss">

#right-container{
    .table-demo{
       width: 19.8vw;
        .el-table{
            background-color:transparent;
            border-color: #243B9E;
        }
        .el-table--border::after, .el-table--group::after, .el-table::before{
            background-color:unset;
        }
        .el-table td,.el-table th{
            padding: 0.3vw 0;
            height: 2.2vw;
            border-color: #243B9E;

        }
        .el-table th{
            background-color: rgba(47,84,235,0.16) !important;
        }

        .el-table tr{
            border-color: #243B9E;
            background-color:transparent;
            color:  #9FA8DA;
            font-size: 0.8vw;
        }

        .el-table__body tr:hover > td {
            background-color:unset !important;
        }
        .el-table--scrollable-x .el-table__body-wrapper{
            overflow-x: hidden;
        }
        .el-progress-bar__outer{
          background-color: transparent;
          height: 16px !important;
          position: relative;
        }
    }
}
</style>
<style  lang="scss" scoped>

</style>
