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
        prop="REGIONAL"
        label="区域属性"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="false"
        prop="REGIONAL_CODE"
        label="区域属性Code"
        min-width="50"
        header-align="center"
        align="center"
      />

      <el-table-column
        v-if="true"
        label="群组属性"
        prop="GROUP_ATTRIBUTES"
        min-width="50"
        header-align="center"
        align="center"
      />

      <el-table-column
        v-if="false"
        prop="GROUP_ATTRIBUTES_CODE"
        label="机群属性Code"
        min-width="50"
        header-align="center"
        align="center"
      />

      <el-table-column
        v-if="true"
        label="设备属性"
        prop="DEVICE_ATTRIBUTES"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="false"
        prop="DEVICE_ATTRIBUTES_CODE"
        label="设备属性Code"
        min-width="50"
        header-align="center"
        align="center"
      />

      <el-table-column
        v-if="true"
        label="数据属性"
        prop="POINT_ATTRIBUTE"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="false"
        prop="POINT_ATTRIBUTE_CODE"
        label="数据属性Code"
        min-width="50"
        header-align="center"
        align="center"
      />

      <el-table-column
        v-if="true"
        prop="VARIABLE_VALUE"
        label="历史起始时刻"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="VARIABLE_VALUE"
        label="历史截止时刻"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="VARIABLE_VALUE"
        label="计算差值"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="VARIABLE_VALUE"
        label="计算平均值"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="VARIABLE_VALUE"
        label="查询最大值"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="VARIABLE_VALUE"
        label="查询最小值"
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
      type: Number,
      default: 250
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
    },
    handleCheckedChange(newValue, scope) {
      const property = scope.column.property
      const checkedCount = newValue.length
      switch (property) {
        case 'REGIONAL':
          this.checkAllObject.region.checkAll = checkedCount === this.filterData.region.length
          this.checkAllObject.region.isIndeterminate = checkedCount > 0 && checkedCount < this.filterData.region.length
          break
        case 'GROUP_ATTRIBUTES':
          this.checkAllObject.group.checkAll = checkedCount === this.filterData.group.length
          this.checkAllObject.group.isIndeterminate = checkedCount > 0 && checkedCount < this.filterData.group.length
          break
        case 'DEVICE_ATTRIBUTES':
          this.checkAllObject.device.checkAll = checkedCount === this.filterData.device.length
          this.checkAllObject.device.isIndeterminate = checkedCount > 0 && checkedCount < this.filterData.device.length
          break
        case 'POINT_ATTRIBUTE':
          this.checkAllObject.point.checkAll = checkedCount === this.filterData.point.length
          this.checkAllObject.point.isIndeterminate = checkedCount > 0 && checkedCount < this.filterData.point.length
          break
        default:
      }
    },
    closeFilter: function(column) {
      const property = column.property
      switch (property) {
        case 'REGIONAL':
          this.$refs.regionPopover.doClose()
          break
        case 'GROUP_ATTRIBUTES':
          this.$refs.groupPopover.doClose()
          break
        case 'DEVICE_ATTRIBUTES':
          this.$refs.devicePopover.doClose()
          break
        case 'POINT_ATTRIBUTE':
          this.$refs.pointPopover.doClose()
          break
        default:
      }
    },
    delete: function(params) {

    },
    showFilterDialog(e, scope) {
      const property = scope.column.property
      switch (property) {
        case 'REGIONAL':
          this.icon.region = 'icon-filter-click'
          break
        case 'GROUP_ATTRIBUTES':
          this.icon.group = 'icon-filter-click'
          break
        case 'DEVICE_ATTRIBUTES':
          this.icon.device = 'icon-filter-click'
          break
        case 'POINT_ATTRIBUTE':
          this.icon.point = 'icon-filter-click'
          break
        default:
      }
    },
    popoverHide(scope) {
      const property = scope.column.property
      switch (property) {
        case 'REGIONAL':
          this.icon.region = 'icon-filter'
          break
        case 'GROUP_ATTRIBUTES':
          this.icon.group = 'icon-filter'
          break
        case 'DEVICE_ATTRIBUTES':
          this.icon.device = 'icon-filter'
          break
        case 'POINT_ATTRIBUTE':
          this.icon.point = 'icon-filter'
          break
        default:
      }
    },
    handleCheckAllChange(val, scope) {
      const property = scope.column.property
      switch (property) {
        case 'REGIONAL':
          this.checkObject.regionCheckList = val ? this.filterData.region : []
          this.checkAllObject.region.isIndeterminate = false
          break
        case 'GROUP_ATTRIBUTES':
          this.checkObject.groupCheckList = val ? this.filterData.group : []
          this.checkAllObject.group.isIndeterminate = false
          break
        case 'DEVICE_ATTRIBUTES':
          this.checkObject.deviceCheckList = val ? this.filterData.device : []
          this.checkAllObject.device.isIndeterminate = false
          break
        case 'POINT_ATTRIBUTE':
          this.checkObject.pointCheckList = val ? this.filterData.point : []
          this.checkAllObject.point.isIndeterminate = false
          break
        default:
      }
    },
    popoverOK(column) {
      const property = column.property
      var checkList = []
      this.loading = true
      const callback = res => {
        this.loading = false
      }
      switch (property) {
        case 'REGIONAL':
          checkList = this.checkObject.regionCheckList
          this.$emit('handleFilter', { checkList: checkList, filterType: property, callback: callback })
          this.$refs.regionPopover.doClose()
          break
        case 'GROUP_ATTRIBUTES':
          checkList = this.checkObject.groupCheckList
          this.$emit('handleFilter', { checkList: checkList, filterType: property, callback: callback })
          this.$refs.groupPopover.doClose()
          break
        case 'DEVICE_ATTRIBUTES':
          checkList = this.checkObject.deviceCheckList
          this.$emit('handleFilter', { checkList: checkList, filterType: property, callback: callback })
          this.$refs.devicePopover.doClose()
          break
        case 'POINT_ATTRIBUTE':
          checkList = this.checkObject.pointCheckList
          this.$emit('handleFilter', { checkList: checkList, filterType: property, callback: callback })
          this.$refs.pointPopover.doClose()
          break
        default:
      }
    },
    popoverReset(column) {
      const property = column.property
      switch (property) {
        case 'REGIONAL':
          this.checkObject.regionCheckList = []
          this.checkAllObject.region.checkAll = false
          this.checkAllObject.region.isIndeterminate = false
          break
        case 'GROUP_ATTRIBUTES':
          this.checkObject.groupCheckList = []
          this.checkAllObject.group.isIndeterminate = false
          break
        case 'DEVICE_ATTRIBUTES':
          this.checkObject.deviceCheckList = []
          this.checkAllObject.device.isIndeterminate = false
          break
        case 'POINT_ATTRIBUTE':
          this.checkObject.pointCheckList = []
          this.checkAllObject.point.isIndeterminate = false
          break
        default:
      }
    }
  }
}
</script>

<style lang="scss">
#history-table{
  .el-table{
    width: 100%;
    height: 100%;
  }
}

</style>

<style lang="scss" scoped>
#history-table{

}

</style>
