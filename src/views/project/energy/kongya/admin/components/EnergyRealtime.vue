<template>
  <div style="width:100%; height:100%;">
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      height="calc(100% - 40px)"
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
</template>

<script>
export default {
  data() {
    return {
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
    }
  }
}
</script>
