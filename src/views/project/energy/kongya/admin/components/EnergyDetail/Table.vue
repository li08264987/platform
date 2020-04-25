<template>
  <div class="table-page">
    <div class="table-toobar">
      <el-form ref="form" :model="searchForm" label-width="120px">
        <el-form-item label="" :class="'noMargin'">
          <el-date-picker v-model="searchForm.date" :type="searchForm.dateType" placeholder="选择时间" />
          <el-button type="primary" class="blue-btn" @click="onSearch('date')">查询</el-button>
          <el-input v-model="searchForm.searchText" placeholder="输入搜索内容" />
          <el-button class="blue-btn" type="primary" @click="onSearch('text')">搜索</el-button>
          <el-button class="white-btn" @click="onExport">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-container">
      <div class="table-title">空压系统分级统计概览</div>
      <el-table
        v-loading="loading"
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        height="calc(100% - 75px)"
        header-row-class-name="table-header"
        style="width: 100%; overflow-y: auto;"
      >
        <el-table-column
          prop="code"
          label="序号"
          width="180"
        />
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        />
        <el-table-column
          prop="sumValue"
          label="当前值"
          width="180"
        />
        <el-table-column
          prop="remark"
          label="备注"
        />
      </el-table>

      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 15, 20, 25, 30]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { getEnergyTreeTableData } from '@/api/energy/statis'
export default {
  data() {
    return {
      searchForm: {
        type: 'daterange',
        date: '',
        dateType: 'daterange',
        searchText: ''
      },
      // 当前页
      currentPage: 1,
      // 每页多少条
      pageSize: 15,
      // 总数
      count: 0,
      tableData: [],
      loading: true
    }
  },
  mounted() {
    this.setEnergyTreeTableData({
      sys: this.$router.currentRoute.name,
      page: this.currentPage,
      size: this.pageSize
    })
  },
  methods: {
    // 每页多少条
    handleSizeChange(val) {
      this.pageSize = val
      this.setEnergyTreeTableData({
        sys: this.$router.currentRoute.name,
        page: this.currentPage,
        size: this.pageSize
      })
    },
    // 当前页
    handleCurrentChange(val) {
      this.currentPage = val
      this.setEnergyTreeTableData({
        sys: this.$router.currentRoute.name,
        page: this.currentPage,
        size: this.pageSize
      })
    },
    onSearch(type) {
      console.log(type)
      console.log(this.searchForm)
    },
    onExport() {
      console.log(this.searchForm)
    },
    setEnergyTreeTableData(params) {
      getEnergyTreeTableData(params).then(response => {
        var data = response.data
        this.tableData = data
        this.count = response.count
        this.loading = false
      }).catch(err => {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: err
        })
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .table-page {
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .table-container{
    width: 100%;
    height: 0;
    flex-grow: 1;
    shrink: 1;
    padding: 15px 20px;
    background-color: white;
  }
  .table-toobar {
    width: 100%;
    height: 50px;
    background-color: white;
  }
  form.el-form {
    display: flex;
    position: absolute;
    top: 10px;
    left: 20px;
    height: 50px;
    justify-content: center;
    align-items: center;
  }
  .el-form-item {
    margin-bottom: 0;
  }
  .el-input {
    width: 160px;
  }
  .el-button+.el-button {
    margin-left: 0;
  }
  .treeCheck-container {
    max-height: 450px;
    overflow: auto;
  }
  .blue-btn {
    color: white;
    height: 32px;
    padding: 0 20px;
    background:rgba(40,87,255,1);
    border-radius:4px;
  }
  .white-btn {
    height: 32px;
    padding: 0 20px;
  }
  .table-title {
    height: 42px;
    background: rgba(249,249,251,1);
    border: 1px solid rgba(233,233,235,1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
  }
</style>
<style lang="scss">
  .table-header,
  .table-header th {
    background-color: #F1F4FD !important;
  }
  .el-date-editor--daterange.el-input__inner {
    width: 260px;
  }
  .noMargin .el-form-item__content {
    margin: 0 !important;
  }
</style>
