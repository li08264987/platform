<!--  -->
<template>
  <div class="warningData-container">
    <div class="search-container">
      <div class="search-condition">
        <el-date-picker v-model="searchForm.date" :type="searchForm.dateType" range-separator="至" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" start-placeholder="开始日期" end-placeholder="结束日期" style="display: inline-block;" placeholder="选择时间" suffix-icon="el-icon-search" />
        <el-button class="btn-query" type="primary" style="margin-right:10px" @click="dateSearch">查询</el-button>
        <el-input v-model="searchForm.searchText" placeholder="请输入值班人员姓名搜索" style="width:212px;" suffix-icon="el-icon-search" />
        <el-button class="btn-search" type="primary" @click="nameSearch">搜索</el-button>
        <el-button class="btn-export" @click="onExport">导出</el-button>
      </div>
    </div>
    <div class="table-container">
      <Table
        ref="warningDataTable"
        :height="750"
        :border="border"
        :show-operation="showOperation"
        :data="pageResult"
        :columns="columns"
        @findPage="findPage"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
      />
    </div>
  </div>
</template>

<script>
import Table from '@/views/project/diagnosis/core/table'
import { getWarningDataList } from '@/api/diagnose/warningData'
export default {
  components: {
    Table
  },
  data() {
    return {
      searchForm: {
        date: '',
        dateType: 'datetimerange',
        searchText: ''
      },
      showOperation: true,
      border: true,
      columns: [],
      pageRequest: { pageNum: 1, pageSize: 10 },
      pageResult: {}
    }
  },

  computed: {},

  mounted() {
    this.initColumns()
  },

  methods: {
    initColumns: function() {
      this.columns = [
        { prop: 'sheBeiVaribleName', label: '设备变量名称', minWidth: 50, show: true },
        { prop: 'alarmValue', label: '设定报警值', minWidth: 50, show: true },
        { prop: 'state', label: '处理状态', minWidth: 50, show: true },
        { prop: 'alarmTime', label: '报警时间', minWidth: 50, show: true },
        { prop: 'sheBeiName', label: '设备名称', minWidth: 50, show: true },
        { prop: 'alarmLevel', label: '报警级别', minWidth: 50, show: true },
        { prop: 'currentValue', label: '实际值', minWidth: 50, show: true },
        { prop: 'alarmUnit', label: '数据单位', minWidth: 50, show: true },
        { prop: 'code', label: '唯一标识码', minWidth: 50, show: false }
      ]
    },
    findPage: function(data) {
      if (data !== null) {
        this.pageRequest = data.pageRequest
      }
      this.pageRequest['filterUserName'] = this.searchForm.searchText
      this.pageRequest['startTime'] = this.searchForm.date === null ? null : this.searchForm.date[0]
      this.pageRequest['endTime'] = this.searchForm.date === null ? null : this.searchForm.date[1]
      getWarningDataList(this.pageRequest).then(res => {
        this.pageResult.content = res.warningDataList
        this.pageResult.totalSize = res.warningDataListNumber
      }).then(data != null ? data.callback : '')
    },
    dateSearch: function() {
      this.$refs.dutyTable.refreshPageRequest(this.pageRequest.pageNum)
    },
    nameSearch: function() {
      this.$refs.dutyTable.refreshPageRequest(this.pageRequest.pageNum)
    },
    onExport: function() {

    },
    handleDelete: function(params) {

    },
    handleEdit: function(params) {

    }
  }
}

</script>

<style lang='scss'>
.warningData-container{
  display: flex;
  flex-direction: column;
  .search-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 6vh;
    padding: 8px 30px 8px 15px;
    box-shadow: 0 2px 2px #e4e4e4;
    .search-condition{
      display: flex;
      flex-direction: row;
      .el-date-editor--daterange.el-input__inner {
        width: 242px;
        height: 36px;
      }
      .btn-export{
          color: #666C83;
          font-size: 14px;
          border:1px solid rgba(197,200,213,1);
          background-color: #fff;
          width:96px;
          height:32px;
      }
      .btn-search,.btn-query{
        width:96px;
        height:32px;
        background-color: rgba(45,73,255,1);
        color: #FFF;
        border: unset;
        font-size: 14px;
        cursor: pointer;
        margin-left: 10px;
        }
        .el-input__inner{
            background: #FFF;
            border: 1px solid #E2E4EA;
            border-radius: 4px;
            height: 36px;
        }
    }
  }
  .table-container{
      width: 100%;
      height: 100%;
      padding: 20px 29px;
      background: rgba(244,245,248,1);
    }
}
</style>
<style lang='scss' scoped>
</style>
