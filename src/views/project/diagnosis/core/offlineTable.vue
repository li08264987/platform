<template>
  <div id="table-container">
    <el-table
      v-loading="loading"
      style="width:100%;font-size: 14px"
      :data="data.content"
      :highlight-current-row="highlightCurrentRow"
      :border="border"
      :stripe="stripe"
      :show-overflow-tooltip="showOverflowTooltip"
      :max-height="maxHeight"
      :height="height"
      :size="size"
      :align="align"
      :header-cell-style="{background:'#F1F4FD'}"
      @selection-change="selectionChange"
      @current-change="handleCurrentChange"
    >
      <el-table-column
        v-if="true"
        prop="faultSystem"
        label="故障系统"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="sheBeiName"
        label="设备名称"
        min-width="90"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="pointAttribute"
        label="参数点位"
        min-width="50"
        header-align="center"
        align="center"
      />
      <!-- <el-table-column
        v-if="true"
        prop="alarmLevel"
        label="报警级别"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="alarmValue"
        label="报警设定值"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="currentValue"
        label="报警触发值"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="alarmUnit"
        label="数据单位"
        min-width="50"
        header-align="center"
        align="center"
      /> -->
      <el-table-column
        v-if="true"
        prop="alarmTime"
        label="报警时间"
        min-width="60"
        :sortable="true"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="state"
        label="处理状态"
        min-width="50"
        header-align="center"
        align="center"
      >
        <template slot-scope="{row}">
          <span :style="row.stateCode ===0 ?'color:#F5222D;':'color:#606266;'">{{ row.state }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="false"
        prop="stateCode"
        label="处理状态码"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="false"
        prop="code"
        label="唯一标识码"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="showOperation"
        label="报警操作"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <Button
            :label="scope.row.stateCode === 1?'已处理':'消除'"
            :size="size"
            :type="buttonType.success"
            :disabled="scope.row.stateCode === 1?true:false"
            @click="handleDealing(scope.$index, scope.row)"
          />
          <Button
            label="删除"
            :size="size"
            :type="buttonType.warning"
            @click="handleDelete(scope.$index, scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>

    <div class="toolbar">
      <el-pagination
        layout="total, prev, pager, next, jumper"
        :current-page="pageRequest.pageNum"
        :page-size="pageRequest.pageSize"
        :total.sync="data.totalSize"
        @current-change="refreshPageRequest"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/views/project/diagnosis/core/button'
export default {
  name: 'Table',
  components: {
    Button
  },
  props: {
    columns: {
      type: Array,
      default: null
    },
    data: {
      type: Object,
      default: null
    },
    size: {
      type: String,
      default: 'mini'
    },
    align: {
      type: String,
      default: 'left'
    },
    maxHeight: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 250
    },
    showOperation: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: true
    },
    highlightCurrentRow: {
      type: Boolean,
      default: true
    },
    showOverflowTooltip: {
      type: Boolean,
      default: true
    },
    showBatchDelete: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      pageRequest: {
        pageNum: 1,
        pageSize: 20
      },
      loading: false,
      selections: [],
      buttonType: {
        success: 'success',
        warning: 'warning'
      }
    }
  },
  mounted() {
    this.refreshPageRequest(1)
  },
  methods: {
    refreshPageRequest: function(pageNum) {
      this.pageRequest.pageNum = pageNum
      this.findPage()
      this.findDealingPage()
    },
    findPage: function() {
      this.loading = true
      const callback = res => {
        this.loading = false
      }
      this.$emit('findPage', { pageRequest: this.pageRequest, callback: callback })
    },
    findDealingPage: function() {
      this.loading = true
      const callback = res => {
        this.loading = false
      }
      this.$emit('findDealingPage', { pageRequest: this.pageRequest, callback: callback })
    },
    selectionChange: function(selections) {
      this.selections = selections
      this.$emit('selectionChange', { selections: selections })
    },
    handleCurrentChange: function(val) {
      this.$emit('handleCurrentChange', { val: val })
    },
    handleDealing: function(index, row) {
      this.$emit('handleEdit', { index: index, row: row })
    },
    handleDelete: function(index, row) {
      this.delete({ index, row })
    },
    delete: function(params) {
      this.$confirm('确认屏蔽所选内容？', '提示', {
        type: 'warning'
      }).then(() => {
        const callback = res => {
          if (res.state === 1) {
            this.$message({ message: '删除成功', type: 'success' })
            this.findPage()
          } else {
            this.$message({ message: '删除失败', type: 'error' })
          }
          this.loading = false
        }
        this.$emit('handleDelete', { rowInfor: params, callback: callback })
        this.loading = false
      }).catch(() => {})
    }
  }
}
</script>

<style lang="scss">
#table-container{
  width: 100%;
  height: 100%;
  .el-table{
    width: 100%;
    height: 100%;
  }
}
</style>
