<template>
  <div class="table-page">
    <div class="table-toobar">
      <el-form ref="form" :model="searchForm" label-width="120px">
        <el-form-item label="" :class="'noMargin'">
          <el-date-picker v-model="searchForm.date" :type="searchForm.dateType" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择时间" />
          <el-input v-model="searchForm.searchText" placeholder="输入搜索内容" />
          <el-button class="blue-btn" type="primary" @click="onSearch()">查询</el-button>
          <el-button class="white-btn" @click="onExport">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-container">
      <el-table
        v-loading="loading"
        :data="tableData"
        row-key="id"
        :default-expand-all="true"
        height="calc(100% - 10px)"
        header-row-class-name="table-header"
        style="width: 100%; overflow-y: auto;"
      >
        <el-table-column
          prop="name"
          label="名称"
        />
        <el-table-column
          prop="nodeData.elec"
          label="电耗"
        />
        <el-table-column
          prop="nodeData.zeroElec"
          label="电表起始读数"
        />
        <el-table-column
          prop="nodeData.currElec"
          label="电表截止读数"
        />
        <el-table-column
          prop="nodeData.gas"
          label="产气量"
        />
        <el-table-column
          prop="nodeData.zeroGas"
          label="气表起始读数"
        />
        <el-table-column
          prop="nodeData.currGas"
          label="气表截止读数"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
import { getEnergyTreeData } from '@/api/common'
export default {
  data() {
    return {
      type: 'table',
      searchForm: {
        type: 'daterange',
        date: '',
        dateType: 'daterange',
        searchText: ''
      },
      tableData: [],
      loading: true
    }
  },
  mounted() {
    this.setEnergyTreeTableData({
      sys: this.$router.currentRoute.name,
      type: this.type
    })
  },
  methods: {
    onSearch() {
      this.setEnergyTreeTableData({
        sys: this.$router.currentRoute.name,
        type: this.type,
        search: this.searchForm.searchText,
        startTime: this.searchForm.date && this.searchForm.date[0],
        endTime: this.searchForm.date && this.searchForm.date[1]
      })
    },
    onExport() {
      console.log(this.searchForm)
    },
    setEnergyTreeTableData(params) {
      this.loading = true
      var axios = getEnergyTreeData(params)
      axios.axiosObj.then(response => {
        var data = response.data
        this.tableData = [data]
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
  .el-table .cell {
    white-space: nowrap;
  }
</style>
