<template>
  <div class="operation-watch">
    <el-radio-group v-model="operationDefult" class="operation-group">
      <el-radio-button label="空压">空压</el-radio-button>
      <el-radio-button label="氮气">氮气</el-radio-button>
      <el-radio-button label="真空">真空</el-radio-button>
      <el-radio-button label="电">电</el-radio-button>
      <el-radio-button label="冷">冷</el-radio-button>
      <el-radio-button label="热">热</el-radio-button>
    </el-radio-group>

    <el-table :show-header="showHeader" :data="operation.tableData" height="145" border>
      <el-table-column prop="type" label="" align="center" />
      <el-table-column prop="value" label="" align="center" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'OperationWatch',
  components: {},
  data() {
    return {
      operationDefult: '空压',
      showHeader: false,
      operation: {
        tableData: [{
          type: '总流量（m³/h）',
          value: '39'
        },
        {
          type: '总压力（bar）',
          value: '3.4'
        },
        {
          type: '平均温度（℃）',
          value: '36'
        },
        {
          type: '冷却水温度（℃）',
          value: '39'
        }]
      }
    }
  },

  computed: {},

  mounted() {
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
#left-container .operation-watch{
    display: flex;
    flex-direction: column;
    position: relative;
    top: 630px;
    left: 40px;
}
</style>
