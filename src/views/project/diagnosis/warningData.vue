<!--  -->
<template>
  <div class="warningData-container">
    <div class="search-container">
      <div class="search-condition">
        <el-date-picker v-model="searchForm.date" :type="searchForm.dateType" range-separator="至" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" start-placeholder="开始日期" end-placeholder="结束日期" style="display: inline-block;" placeholder="选择时间" suffix-icon="el-icon-search" />
        <el-button class="btn-query" type="primary" style="margin-right:10px" @click="dateSearch">查询</el-button>
        <el-input v-model="searchForm.searchText" placeholder="请输入系统名称搜索" style="width:212px;" suffix-icon="el-icon-search" />
        <el-button class="btn-search" type="primary" @click="nameSearch">搜索</el-button>
        <el-button :loading="downloadLoading" class="btn-export" @click="onExport">导出</el-button>
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
import { getWarningDataList, updateWarningState, deleteWarningData, fetchAllData } from '@/api/diagnose/warningData'
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
      pageResult: {},
      dataForm: {},
      downloadLoading: false,
      allPagesData: null
    }
  },

  computed: {},

  mounted() {

  },

  methods: {
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
    handleDelete: function(params) {
      deleteWarningData(params.row).then((res) => {
        this.pageResult.content.splice(params.index, 1)
        this.pageResult.totalSize -= 1
        params.callback(res)
      }).catch(err => {
        console.log(err)
      })
    },
    handleEdit: function(params) {
      this.dataForm = params.row
      updateWarningState(params.row).then((res) => {
        const index = this.pageResult.content.findIndex(v => v.code === this.dataForm.code)
        this.dataForm.state = '已处理'
        this.dataForm.stateCode = 1
        this.pageResult.content.splice(index, 1, this.dataForm)
        this.$notify({
          title: '成功',
          message: res.msg,
          type: 'success',
          duration: 2000
        })
      }).catch(err => {
        console.log(err)
      })
    },
    dateSearch: function() {
      this.$refs.warningDataTable.refreshPageRequest(this.pageRequest.pageNum)
    },
    nameSearch: function() {
      this.$refs.warningDataTable.refreshPageRequest(this.pageRequest.pageNum)
    },
    onExport: function() {
      const param = {
        filterUserName: this.searchForm.searchText,
        startTime: this.searchForm.date === null ? null : this.searchForm.date[0],
        endTime: this.searchForm.date === null ? null : this.searchForm.date[1]
      }
      fetchAllData(param).then((res) => {
        this.downloadLoading = true
        this.allPagesData = res.warningDataList
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = [
            '设备变量名称',
            '设定报警值',
            '处理状态',
            '报警时间',
            '设备名称',
            '报警级别',
            '实际值',
            '数据单位']
          const filterVal = ['sheBeiVaribleName', 'alarmValue', 'state', 'alarmTime', 'sheBeiName', 'alarmLevel', 'currentValue', 'alarmUnit']
          const data = this.formatJson(filterVal)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: '报警数据表'
          })
          this.downloadLoading = false
        })
      }).catch(err => {
        console.log(err)
      })
    },
    formatJson(filterVal) {
      return this.allPagesData.map(v => filterVal.map(j => {
        return v[j]
      }))
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
