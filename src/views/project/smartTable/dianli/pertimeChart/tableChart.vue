<template>
  <div id="history-table">
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
      background="true"
      class="historyTable"
    >
      <el-table-column
        v-if="false"
        prop="VARIABLE_NAME"
        label="点变量名称"
        min-width="50"
        header-align="center"
        align="center"
      />

      <el-table-column
        v-if="true"
        prop="number"
        label="序号"
        width="150"
        min-width="50"
        header-align="center"
        align="center"
      />

      <el-table-column
        v-if="true"
        prop="time"
        label="日期"
        min-width="50"
        header-align="center"
        align="center"
      />

      <el-table-column
        v-if="true"
        prop="leijiValue"
        label="累计读数"
        min-width="50"
        header-align="center"
        align="center"
      />

      <el-table-column
        v-if="true"
        prop="shunshiValue"
        label="瞬时读数"
        min-width="50"
        header-align="center"
        align="center"
      />

      <el-table-column
        v-if="true"
        prop="remark"
        label="备注"
        min-width="50"
        header-align="center"
        align="center"
      />

      <el-table-column
        v-if="showOperation"
        label="历史分析"
        header-align="center"
        align="center"
        fixed="right"
      >
        <template slot-scope="scope">
          <Button
            icon="el-icon-edit"
            label="查看"
            :size="size"
            @click="handleEdit(scope.$index, scope.row)"
          />
          <Button
            icon="el-icon-time"
            label="逐时"
            :size="size"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>

    <div class="toolbar" style="text-align: center;">
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
import Button from '@/views/project/smartTable/core/Button'
export default {
  name: 'HistoryTable',
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
    filterData: {
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
      type: String,
      default: '100%'
    },
    showOperation: {
      type: Boolean,
      default: false
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
      loading: false
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
    handleEdit: function(index, row) {
      this.$emit('handleEdit', { index: index, row: row })
    },
    handleDelete: function(index, row) {
      this.$emit('handleDelete', { index: index, row: row })
    }
  }
}
</script>

<style lang="scss">
#history-table{

}

</style>

<style lang="scss" scope>
#history-table{
    width: 100%;
    height: 100%;
    .historyTable{
    }
}

</style>
