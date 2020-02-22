<template>
  <div class="table-demo">
    <el-table
      :data="tableData"
      :header-cell-style="{background:'#DCDFE6'}"
      border
      style="width: 100%"
    >
      <el-table-column prop="rank" label="排名" width="60" align="center" />
      <el-table-column prop="floor" label="楼层" width="60" align="center" />
      <el-table-column prop="progress" label="能耗评分" width="142" align="center">
        <template slot-scope="scope">
          <el-progress
            type="line"
            stroke-linecap="round"
            :text-inside="false"
            :percentage="scope.row.progress"
            :color="scope.row.color"
            :format="progressFormat"
          />
        </template>
      </el-table-column>
      <el-table-column prop="value" label="能耗值(kwh)" width="117" align="center" />
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
  mounted() {},
  methods: {
    handleCurrentChange(val) {
    },
    progressFormat(percentage) {
      return percentage + '分'
    }
  }
}
</script>

<style lang="scss">
#right-container{
    .table-demo{
       width: 380px;
        .el-table{
            background-color:transparent;
            border-color: #243B9E;
        }
        .el-table--border::after, .el-table--group::after, .el-table::before{
            background-color:unset;
        }
        .el-table td,.el-table th{
            padding: 6px 0;
            height: 25px;
            border-color: #243B9E;

        }
        .el-table th{
            background-color: rgba(47,84,235,0.16) !important;
        }

        .el-table tr{
            border-color: #243B9E;
            background-color:transparent;
            color:  #9FA8DA;
            font-size: 16px;
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
