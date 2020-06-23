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
            区域属性
            <el-popover
              ref="regionPopover"
              placement="bottom-start"
              width="280"
              trigger="click"
              popper-class="region-popover"
              @hide="() => { return popoverHide(scope) }"
            >
              <div class="filter-title">
                <span>区域筛选</span>
                <i class="el-icon-close filter-close" @click="closeFilter(scope.column)" />
              </div>
              <div class="filter-line" />
              <div class="filter-checkbox">
                <el-checkbox v-model="checkAllObject.region.checkAll" :indeterminate="checkAllObject.region.isIndeterminate" style="margin-bottom:23px;" @change="(value) => { return handleCheckAllChange(value, scope) }">全选</el-checkbox>
                <el-checkbox-group v-model="checkObject.regionCheckList" class="filter-checkbox-group" @change="(newValue) => { return handleCheckedChange(newValue, scope) }">
                  <el-checkbox
                    v-for="(item, index) in filterData.region"
                    :key="index"
                    :label="item"
                    class="region-check"
                  />
                </el-checkbox-group>
              </div>
              <div class="filter-botton">
                <el-button type="primary" @click="popoverOK(scope.column)">确定</el-button>
                <el-button @click="popoverReset(scope.column)">重置</el-button>
              </div>
              <i slot="reference" :class="icon.region" @click="(e) => { return showFilterDialog(e, scope) }" />
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
        min-width="50"
        header-align="center"
        align="center"
      >
        <template slot="header" slot-scope="scope">
          <span>
            机群属性
            <el-popover
              ref="groupPopover"
              placement="bottom-start"
              width="280"
              trigger="click"
              popper-class="group-popover"
              @hide="() => { return popoverHide(scope) }"
            >
              <div class="filter-title">
                <span>机群筛选</span>
                <i class="el-icon-close filter-close" @click="closeFilter(scope.column)" />
              </div>
              <div class="filter-line" />
              <div class="filter-checkbox">
                <el-checkbox v-model="checkAllObject.group.checkAll" :indeterminate="checkAllObject.group.isIndeterminate" style="margin-bottom:23px;" @change="(value) => { return handleCheckAllChange(value, scope) }">全选</el-checkbox>
                <el-checkbox-group v-model="checkObject.groupCheckList" class="filter-checkbox-group" @change="(newValue) => { return handleCheckedChange(newValue, scope) }">
                  <el-checkbox
                    v-for="(item, index) in filterData.group"
                    :key="index"
                    :label="item"
                    class="group-check"
                  />
                </el-checkbox-group>
              </div>
              <div class="filter-botton">
                <el-button type="primary" @click="popoverOK(scope.column)">确定</el-button>
                <el-button @click="popoverReset(scope.column)">重置</el-button>
              </div>
              <i slot="reference" :class="icon.group" @click="(e) => { return showFilterDialog(e, scope) }" />
            </el-popover>
          </span>
        </template>
      </el-table-column>
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
        min-width="50"
        header-align="center"
        align="center"
      >
        <template slot="header" slot-scope="scope">
          <span>
            设备属性
            <el-popover
              ref="devicePopover"
              placement="bottom-start"
              width="280"
              trigger="click"
              popper-class="device-popover"
              @hide="() => { return popoverHide(scope) }"
            >
              <div class="filter-title">
                <span>机群筛选</span>
                <i class="el-icon-close filter-close" @click="closeFilter(scope.column)" />
              </div>
              <div class="filter-line" />
              <div class="filter-checkbox">
                <el-checkbox v-model="checkAllObject.device.checkAll" :indeterminate="checkAllObject.device.isIndeterminate" style="margin-bottom:23px;" @change="(value) => { return handleCheckAllChange(value, scope) }">全选</el-checkbox>
                <el-checkbox-group v-model="checkObject.deviceCheckList" class="filter-checkbox-group" @change="(newValue) => { return handleCheckedChange(newValue, scope) }">
                  <el-checkbox
                    v-for="(item, index) in filterData.device"
                    :key="index"
                    :label="item"
                    class="device-check"
                  />
                </el-checkbox-group>
              </div>
              <div class="filter-botton">
                <el-button type="primary" @click="popoverOK(scope.column)">确定</el-button>
                <el-button @click="popoverReset(scope.column)">重置</el-button>
              </div>
              <i slot="reference" :class="icon.device" @click="(e) => { return showFilterDialog(e, scope) }" />
            </el-popover>
          </span>
        </template>
      </el-table-column>
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
        min-width="50"
        header-align="center"
        align="center"
      >
        <template slot="header" slot-scope="scope">
          <span>
            数据属性
            <el-popover
              ref="pointPopover"
              placement="bottom-start"
              width="280"
              trigger="click"
              popper-class="point-popover"
              @hide="() => { return popoverHide(scope) }"
            >
              <div class="filter-title">
                <span>数据筛选</span>
                <i class="el-icon-close filter-close" @click="closeFilter(scope.column)" />
              </div>
              <div class="filter-line" />
              <div class="filter-checkbox">
                <el-checkbox v-model="checkAllObject.point.checkAll" :indeterminate="checkAllObject.point.isIndeterminate" style="margin-bottom:23px;" @change="(value) => { return handleCheckAllChange(value, scope) }">全选</el-checkbox>
                <el-checkbox-group v-model="checkObject.pointCheckList" class="filter-checkbox-group" @change="(newValue) => { return handleCheckedChange(newValue, scope) }">
                  <el-checkbox
                    v-for="(item, index) in filterData.point"
                    :key="index"
                    :label="item"
                    class="device-check"
                  />
                </el-checkbox-group>
              </div>
              <div class="filter-botton">
                <el-button type="primary" @click="popoverOK(scope.column)">确定</el-button>
                <el-button @click="popoverReset(scope.column)">重置</el-button>
              </div>
              <i slot="reference" :class="icon.point" @click="(e) => { return showFilterDialog(e, scope) }" />
            </el-popover>
          </span>
        </template>
      </el-table-column>
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
            type="primary"
            @click="handleDelete(scope.$index, scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>

    <div class="toolbar" style="text-align: center;">
      <el-pagination
        background="true"
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
        pageSize: 15,
        system: 'dl'
      },
      loading: false,
      selections: [],
      icon: {
        region: 'icon-filter',
        group: 'icon-filter',
        device: 'icon-filter',
        point: 'icon-filter'
      },
      checkObject: {
        regionCheckList: [],
        groupCheckList: [],
        deviceCheckList: [],
        pointCheckList: []
      },
      checkAllObject: {
        region: {
          checkAll: false,
          isIndeterminate: true
        },
        group: {
          checkAll: false,
          isIndeterminate: true
        },
        device: {
          checkAll: false,
          isIndeterminate: true
        },
        point: {
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
#main-table{
  .el-table{
    width: 100%;
    height: 100%;
  }
}

</style>

<style lang="scss" scope>
#main-table{
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
.region-popover,
.group-popover,
.device-popover,
.point-popover{
  padding: unset;
    .filter-title{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        padding: 12px 12px;
        margin-bottom: 10px;
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
        padding: 24px 20px;
        height: 300px;
        overflow-y: auto;
        .filter-checkbox-group{
            display: flex;
            flex-direction: column;
        }
    }
    .filter-botton{
      text-align: center;
      margin-bottom: 10px;
    }
    .region-check,
    .group-check,
    .device-check,
    .point-check{
      margin-bottom: 10px;
    }
}
</style>
