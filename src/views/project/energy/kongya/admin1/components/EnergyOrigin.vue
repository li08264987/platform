<template>
  <div style="width:100%; height:100%;">
    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      height="calc(100% - 40px)"
      header-row-class-name="table-header"
      style="width: 100%; overflow-y: auto;"
    >
      <el-table-column
        prop="system"
        label="能源系统"
        width="180"
      />
      <el-table-column
        prop="fac"
        label="耗能项目"
        width="180"
      />
      <el-table-column
        prop="startValue"
        label="开始累计读数（kW·h）"
        width="180"
      />
      <el-table-column
        prop="sumValue"
        label="截止累计读数（kW·h）"
        width="180"
      />
      <el-table-column
        prop="useValue"
        label="耗能量（kW·h）"
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
        system: '冷却塔组',
        fac: '1#号冷却塔',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '冷却塔组',
        fac: '2#号冷却塔',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '冷却塔组',
        fac: '3#号冷却塔',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '冷却塔组',
        fac: '4#号冷却塔',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '冷却塔组',
        fac: '5#号冷却塔',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '冷却塔组',
        fac: '6#号冷却塔',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '冷却塔组',
        fac: '7#号冷却塔',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '冷却塔组',
        fac: '8#号冷却塔',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '冷却塔组',
        fac: '9#号冷却塔',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '1#螺杆空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '2#螺杆空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '3#螺杆空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '4#螺杆空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '5#螺杆空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '6#螺杆空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '7#螺杆空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '8#螺杆空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '1#离心空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '2#离心空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '3#离心空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '4#离心空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '5#离心空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
      }, {
        system: '空压机组',
        fac: '6#离心空压机',
        startValue: 6400,
        sumValue: 6540,
        useValue: 50,
        remarks: '备注'
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
