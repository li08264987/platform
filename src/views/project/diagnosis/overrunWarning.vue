<!--  -->
<template>
  <div class="warningData-container">
    <div class="search-container">
      <div class="tabs-container">
        <div :class="{'active':dealingActive}" class="tab tab-dealing" data-id="dealing" @click="handleTabClick">未处理</div>
        <div :class="{'active':dealedActive}" class="tab tab-dealed" data-id="dealed" @click="handleTabClick">已处理</div>
      </div>
      <div class="search-condition">
        <el-date-picker v-model="searchForm.date" :type="searchForm.dateType" range-separator="至" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" start-placeholder="开始日期" end-placeholder="结束日期" style="display: inline-block;" placeholder="选择时间" suffix-icon="el-icon-search" />
        <el-button class="btn-query" type="primary" style="margin-right:10px" @click="dateSearch">查询</el-button>
        <el-input v-model="searchForm.searchText" placeholder="请输入搜索内容" style="width:212px;" suffix-icon="el-icon-search" />
        <el-button class="btn-search" type="primary" @click="nameSearch">搜索</el-button>
        <el-button :loading="downloadLoading" class="btn-export" @click="onExport">导出</el-button>
      </div>
    </div>
    <div class="table-container">
      <Table
        v-show="dealedTable"
        ref="dealedWarningDataTable"
        :height="750"
        :border="border"
        :show-operation="showOperation"
        :data="pageResult"
        @findPage="findPage"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
      />
      <Table
        v-show="dealingTable"
        ref="dealingWarningDataTable"
        :height="750"
        :border="border"
        :show-operation="showOperation"
        :data="dealingPageResult"
        @findPage="findDealingPage"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
      />
    </div>
  </div>
</template>

<script>
import Table from '@/views/project/diagnosis/core/chaoxianTable'
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
      pageRequest: { pageNum: 1, pageSize: 20 },
      pageResult: {},
      dealingPageRequest: { pageNum: 1, pageSize: 20 },
      dealingPageResult: {},
      dataForm: {},
      downloadLoading: false,
      allPagesData: null,
      dealedActive: false,
      dealingActive: true,
      dealedTable: false,
      dealingTable: true
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
      this.pageRequest['type'] = 1
      this.pageRequest['tableType'] = 0
      getWarningDataList(this.pageRequest).then(res => {
        this.pageResult.content = res.warningDataList
        this.pageResult.totalSize = res.warningDataListNumber
      }).then(data != null ? data.callback : '')
    },
    findDealingPage: function(data) {
      if (data !== null) {
        this.dealingPageRequest = data.pageRequest
      }
      this.dealingPageRequest['filterUserName'] = this.searchForm.searchText
      this.dealingPageRequest['startTime'] = this.searchForm.date === null ? null : this.searchForm.date[0]
      this.dealingPageRequest['endTime'] = this.searchForm.date === null ? null : this.searchForm.date[1]
      this.dealingPageRequest['type'] = 0
      this.dealingPageRequest['tableType'] = 0
      getWarningDataList(this.dealingPageRequest).then(res => {
        this.dealingPageResult.content = res.warningDataList
        this.dealingPageResult.totalSize = res.warningDataListNumber
        // this.$refs.dealingWarningDataTable.refreshPageRequest(this.pageRequest.pageNum)
      }).then(data != null ? data.callback : '')
    },
    handleDelete: function(params) {
      params.row['tableType'] = 0
      deleteWarningData(params.row).then((res) => {
        if (this.dealedTable === true) {
          this.pageResult.content.splice(params.index, 1)
          this.pageResult.totalSize -= 1
        } else {
          this.dealingPageResult.content.splice(params.index, 1)
          this.dealingPageResult.totalSize -= 1
        }
        params.callback(res)
      }).catch(err => {
        console.log(err)
      })
    },
    handleEdit: function(params) {
      this.dataForm = params.row
      params.row['tableType'] = 0
      updateWarningState(params.row).then((res) => {
        if (this.dealedTable === true) {
          const index = this.pageResult.content.findIndex(v => v.code === this.dataForm.code)
          this.pageResult.content.splice(index, 1)
        } else {
          const index = this.dealingPageResult.content.findIndex(v => v.code === this.dataForm.code)
          this.dealingPageResult.content.splice(index, 1)
          this.$refs.dealedWarningDataTable.refreshPageRequest(this.pageRequest.pageNum)
        }
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
      if (this.dealedTable === true) {
        this.$refs.dealedWarningDataTable.refreshPageRequest(this.pageRequest.pageNum)
      } else {
        this.$refs.dealingWarningDataTable.refreshPageRequest(this.dealingPageRequest.pageNum)
      }
    },
    nameSearch: function() {
      if (this.dealedTable === true) {
        this.$refs.dealedWarningDataTable.refreshPageRequest(this.pageRequest.pageNum)
      } else {
        this.$refs.dealingWarningDataTable.refreshPageRequest(this.dealingPageRequest.pageNum)
      }
    },
    onExport: function() {
      // eslint-disable-next-line no-unused-vars
      let type = 0
      if (this.dealedTable === true) {
        type = 1
      } else {
        type = 0
      }
      const param = {
        filterUserName: this.searchForm.searchText,
        startTime: this.searchForm.date === null ? null : this.searchForm.date[0],
        endTime: this.searchForm.date === null ? null : this.searchForm.date[1],
        type: type,
        tableType: 0
      }
      this.downloadLoading = true
      fetchAllData(param).then((res) => {
        this.allPagesData = res.warningDataList
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = [
            '故障系统',
            '设备名称',
            '参数点位',
            '报警级别',
            '报警设定值',
            '报警触发值',
            '数据单位',
            '报警时间',
            '处理状态']
          const filterVal = ['faultSystem', 'sheBeiName', 'pointAttribute', 'alarmLevel', 'alarmValue', 'currentValue', 'alarmUnit', 'alarmTime', 'state']
          const data = this.formatJson(filterVal)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: type === 0 ? '超限报警未处理报警数据表' : '超限报警已处理报警数据表'
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
    },
    handleTabClick(e) {
      var currentId = e.currentTarget.dataset.id
      switch (currentId) {
        case 'dealed':
          this.dealedActive = true
          this.dealingActive = false
          this.dealedTable = true
          this.dealingTable = false
          break
        case 'dealing':
          this.dealedActive = false
          this.dealingActive = true
          this.dealedTable = false
          this.dealingTable = true
          break
        default:
      }
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
    justify-content: space-between;
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

    .tabs-container{
      display: flex;
      flex-direction: row;
      margin-left: 16px;
      .tab{
        width: 100px;
        line-height: 38px;
        text-align: center;
        cursor: pointer;
        color: #666F83;
      }
      .tab.active{
        color:#1890ff ;
        border-bottom: 2px solid #1890ff;
        background-color: #E2E4EA;
      }
    }
  }
  .table-container{
      width: 100%;
      height: 100%;
      padding: 20px 29px;
      background: rgba(244,245,248,1);
      .el-table__body-wrapper.is-scrolling-none{
        height: 702px !important;
      }
    }
}
</style>
<style lang='scss' scoped>
</style>
