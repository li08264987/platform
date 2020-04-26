<template>
  <div class="table-demo">
    <el-table
      :data="dataList"
      :header-cell-style="headerStyle"
      :span-method="arraySpanMethod"
      border
      style="width: 100%"
      tooltip-effect="dark"
    >
      <el-table-column prop="rank" label="排名" min-width="30" align="center" />
      <el-table-column prop="cheJianName" label="车间名称" min-width="50" align="center" />
      <!-- <el-table-column prop="progress" label="能耗评分" min-width="82" align="center" show-overflow-tooltip>
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
      </el-table-column> -->
      <el-table-column prop="consumer" label="消耗量" min-width="30" align="center" />
      <el-table-column prop="level" label="总能效值" min-width="50" align="center">
        <template slot-scope="scope">
          <div v-html="scope.row.levelValue" />
          <div v-html="scope.row.levelName" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'DianLiTable',
  // eslint-disable-next-line vue/require-prop-types
  props: ['tableData'],
  data() {
    return {
      page: 1,
      dataList: null
    }
  },
  watch: {
    tableData: function(newVal, oldValue) {
      this.dataList = this.tableData
    }
  },
  created() {
  },
  mounted() {
  },
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
      console.log(this.tableData)
      return str
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 3) {
        if (rowIndex === 0) {
          return {
            rowspan: this.tableData.length,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">

#right-container{
    .table-demo{
       width: 99.6%;
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
        .el-progress__text{
          color: #fff;
        }
    }
}
</style>
<style  lang="scss" scoped>

</style>
