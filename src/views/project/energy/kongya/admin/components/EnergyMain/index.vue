<template>
  <div class="table-page">
    <div class="table-toobar">
      <div class="toolbar-title">全运行主机</div>
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
      <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        height="calc(100% - 32px)"
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
          label="累计读数（kW·h）"
          width="180"
        />
        <el-table-column
          prop="onceValue"
          label="瞬时读数（kW·h）"
          width="180"
        />
        <el-table-column
          prop="remarks"
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
      count: 20,
      tableData: [{
        code: 1,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: 'Ant Design是一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的解决方案，让设计者专注于更好的用户体验。'
      }, {
        code: 2,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 3,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 4,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 5,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 6,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 7,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 8,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 9,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 10,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 11,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: 'Ant Design是一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的解决方案，让设计者专注于更好的用户体验。'
      }, {
        code: 12,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 13,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 14,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 15,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 16,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 17,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 18,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 19,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }, {
        code: 20,
        date: '2020-02-25',
        sumValue: 6540,
        onceValue: 75.0,
        remarks: '这是一个备注'
      }]
    }
  },
  methods: {
    // 每页多少条
    handleSizeChange(val) {
      this.pageSize = val
    },
    // 当前页
    handleCurrentChange(val) {
      this.currentPage = val
    },
    onSearch(type) {
      console.log(type)
      console.log(this.searchForm)
    },
    onExport() {
      console.log(this.searchForm)
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
    position: relative;
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
    display: flex;
    align-items: flex-end;
  }
  form.el-form {
    display: flex;
    position: absolute;
    top: 10px;
    right: 20px;
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
  .toolbar-title {
    padding: 3px 8px;
    margin-left: 20px;
    border-left: solid 2px #4a62f5;
  }
</style>
