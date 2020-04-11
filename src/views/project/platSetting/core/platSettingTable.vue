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
            :perms="permsedit"
            @click="handleEdit(scope.$index, scope.row)"
          />
          <platSettingButton
            icon="el-icon-delete"
            label="删除"
            :size="size"
            :perms="permsdelete"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>

    <!--分页栏-->
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
    // eslint-disable-next-line vue/require-default-prop
    columns: Array,
    // eslint-disable-next-line vue/require-default-prop
    data: Object,
    // eslint-disable-next-line vue/require-default-prop
    permsedit: String, // 编辑权限标识
    // eslint-disable-next-line vue/require-default-prop
    permsdelete: String, // 删除权限标识
    size: { // 尺寸样式
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
      // 分页信息
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
    // 换页刷新
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
    // 选择切换
    selectionChange: function(selections) {
      this.selections = selections
      this.$emit('selectionChange', { selections: selections })
    },
    handleCurrentChange: function(val) {
      this.$emit('handleCurrentChange', { val: val })
    },
    // 编辑
    handleEdit: function(index, row) {
      this.$emit('handleEdit', { index: index, row: row })
    },
    // 删除
    handleDelete: function(index, row) {
      this.delete({ index, row })
    },
    delete: function(params) {
      this.$confirm('确认删除所选内容？', '提示', {
        type: 'warning'
      }).then(() => {
        const callback = res => {
          // eslint-disable-next-line eqeqeq
          if (res.state == 1) {
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
