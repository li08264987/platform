<template>
  <div id="main-table">
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
      class="mainTable"
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
        min-width="50"
        header-align="center"
        align="center"
      >
        <template slot="header" slot-scope="scope">
          <span>
            区域
            <el-popover
              v-model="scope.column.visible"
              placement="bottom-start"
              width="280"
              trigger="click"
              popper-class="region-popover"
              @hide="popoverHide"
            >
              <div class="filter-title">
                <span>区域筛选</span>
                <i class="el-icon-close filter-close" @click="closeFilter(scope)" />
              </div>
              <div class="filter-line" />
              <div class="filter-checkbox">
                <el-checkbox v-model="checkAllObject.region.checkAll" :indeterminate="checkAllObject.region.isIndeterminate" @change="(value) => { return handleCheckAllChange(value, scope) }">全选</el-checkbox>
                <el-checkbox-group v-model="checkObject.regionCheckList" class="filter-checkbox-group">
                  <el-checkbox
                    v-for="(item, index) in filterData.region"
                    :key="index"
                    :label="item"
                  />
                </el-checkbox-group>
              </div>
              <i slot="reference" :class="iconfilter" @click="(e) => { return showFilterDialog(e, scope) }" />
            </el-popover>
          </span>
        </template>
      </el-table-column>
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
        prop="GROUP_ATTRIBUTES"
        label="机群属性"
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
        prop="DEVICE_ATTRIBUTES"
        label="设备属性"
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
        prop="POINT_ATTRIBUTE"
        label="数据属性"
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
        label="实时数据"
        min-width="50"
        header-align="center"
        align="center"
      />
      <el-table-column
        v-if="true"
        prop="VARIABLE_TIME"
        label="时间"
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
  name: 'MainTable',
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
      selections: [],
      iconfilter: 'icon-filter',
      visible: {
        region: false
      },
      checkObject: {
        regionCheckList: []
      },
      checkAllObject: {
        region: {
          checkAll: false,
          isIndeterminate: true
        }
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
      this.delete({ index, row })
    },
    closeFilter: function(scope) {
      scope.column.visible = false
      console.log(scope)
      /* const property = scope.column.property
      switch (property) {
        case 'REGIONAL':
          this.visible.region = false
          break
        case 'GROUP_ATTRIBUTES':
          break
        case 'DEVICE_ATTRIBUTES':
          break
        case 'POINT_ATTRIBUTE':
          break
        default:
      } */
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
    },
    showFilterDialog(e, scope) {
      this.iconfilter = 'icon-filter-click'
    },
    popoverHide() {
      this.iconfilter = 'icon-filter'
    },
    handleCheckAllChange(val, scope) {
      const property = scope.column.property
      switch (property) {
        case 'REGIONAL':
          this.checkObject.regionCheckList = val ? this.filterData.region : []
          this.checkAllObject.region.isIndeterminate = false
          break
        case 'GROUP_ATTRIBUTES':
          break
        case 'DEVICE_ATTRIBUTES':
          break
        case 'POINT_ATTRIBUTE':
          break
        default:
      }
    }
  }
}
</script>

<style lang="scss">
#main-table{
  width: 100%;
  height: 100%;
  .el-table{
    width: 100%;
    height: 100%;
    .icon-filter{
        width: 16px;
        height: 16px;
        position: relative;
        top: 3px;
        margin-left: 5px;
        background-size: 100%;
        display: inline-block;
        background-repeat: no-repeat;
        background-image: url('../../../../assets/smartTable/filterGrey.png');
        border:unset;
        cursor: pointer;
    }
    .icon-filter-click{
        width: 16px;
        height: 16px;
        position: relative;
        top: 3px;
        margin-left: 5px;
        background-size: 100%;
        display: inline-block;
        background-repeat: no-repeat;
        background-image: url('../../../../assets/smartTable/filterBlue.png');
        border:unset;
        cursor: pointer;
    }
  }
}
</style>

<style lang="scss">
#main-table{
}
.region-popover{
    .filter-title{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        .filter-close{
            cursor: pointer;
        }
    }
    .filter-line{
        width: 100%;
        height: 1px;
        background-color: #D7DBE0;
    }
    .filter-checkbox{
        width: 100%;
        .filter-checkbox-group{
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
