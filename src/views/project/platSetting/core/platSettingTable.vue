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
      <template v-for="column in columns">
        <el-table-column
          v-if="column.show"
          :key="column.prop"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :min-width="column.minWidth"
          :sortable="column.sortable==null?false:column.sortable"
          header-align="center"
          align="center"
        />
      </template>
      <el-table-column
        v-if="showOperation"
        label="操作"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <platSettingButton
            icon="el-icon-edit"
            label="编辑"
            :size="size"
            @click="handleEdit(scope.$index, scope.row)"
          />
          <platSettingButton
            icon="el-icon-delete"
            label="删除"
            :size="size"
            type="danger"
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
import platSettingButton from '@/views/project/platSetting/core/platSettingButton'
export default {
  name: 'PlatSettingTable',
  components: {
    platSettingButton
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
        pageSize: 15
      },
      loading: false,
      selections: []
    }
  },
  mounted() {
    this.refreshPageRequest(1)
  },
  methods: {
    refreshPageRequest: function(pageNum) {
      this.pageRequest.pageNum = pageNum
      this.findPage()
    },
    findPage: function() {
      this.loading = true
      const callback = res => {
        this.loading = false
      }
      this.$emit('findPage', { pageRequest: this.pageRequest, callback: callback })
    },
    selectionChange: function(selections) {
      this.selections = selections
      this.$emit('selectionChange', { selections: selections })
    },
    handleCurrentChange: function(val) {
      this.$emit('handleCurrentChange', { val: val })
    },
    handleEdit: function(index, row) {
      this.$emit('handleEdit', { index: index, row: row })
    },
    handleDelete: function(index, row) {
      this.delete({ index, row })
    },
    delete: function(params) {
      this.$confirm('确认删除所选内容？', '提示', {
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
