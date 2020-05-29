<template>
  <div class="table-page">
    <div class="table-toobar">
      <el-button type="primary" class="blue-btn add-strd" @click="onStrdAdd()">添加</el-button>
      <el-form ref="form" :model="searchForm" label-width="120px" class="search-form">
        <el-form-item label="" :class="'noMargin'">
          <el-input v-model="searchForm.searchFormText" placeholder="输入搜索内容" />
          <el-button class="blue-btn" type="primary" @click="onSearch()">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-container">
      <el-table
        v-loading="tableLoading"
        :data="tableData"
        height="calc(100% - 35px)"
        header-row-class-name="table-header"
        style="width: 100%; overflow-y: auto;"
        cell-class-name="strd-table-full-cell"
      >
        <el-table-column
          prop="type"
          label="标准类型"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-select v-if="row.edit" v-model="row.type" class="edit-cell" placeholder="请选择标准类型">
              <el-option
                v-for="item in strdTypes"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              />
            </el-select>
            <span v-if="!row.edit">{{ getTypeName(row.type) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格（元）"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.price" class="edit-cell" type="number" />
            <span v-if="!row.edit">{{ row.price }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="level"
          label="级别"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.level" class="edit-cell" type="number" :disabled="row.type===1" />
            <span v-if="!row.edit">{{ row.level }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="facType"
          label="设备类型"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-select v-if="row.edit" v-model="row.facType" class="edit-cell" placeholder="请选择设备类型">
              <el-option
                v-for="item in facs"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              />
            </el-select>
            <span v-if="!row.edit">{{ getFacName(row.facType) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="startTime"
          label="时间段"
          width="380"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-time-select
              v-if="row.edit"
              v-model="row.startTime"
              size="mini"
              placeholder="起始时间"
              class="priceStrd-time-select"
              :value-format="'HH:mm:ss'"
              :disabled="row.type===0"
              :picker-options="{
                format: 'HH:mm:ss',
                start: '00:00:00',
                step: '01:00:00',
                end: '23:00:00'
              }"
              @change="handleTimeChange(row.startTime,row,'startTime')"
            />
            <span v-if="row.edit">-</span>
            <el-time-select
              v-if="row.edit"
              v-model="row.endTime"
              size="mini"
              class="priceStrd-time-select"
              placeholder="结束时间"
              :value-format="'HH:mm:ss'"
              :disabled="row.type===0"
              :picker-options="{
                format: 'HH:mm:ss',
                start: '00:00:00',
                step: '01:00:00',
                end: '24:00:00',
                minTime: row.startTime
              }"
              @change="handleTimeChange(row.endTime,row,'endTime')"
            />
            <span v-if="!row.edit">{{ (row.startTime!==''&&row.endTime!=='') ? (row.startTime+' - '+row.endTime) : '' }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="max"
          label="临界最大值"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.max" class="edit-cell" type="number" :disabled="row.type===1" />
            <span v-if="!row.edit">{{ row.max }}</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="remarks"
          label="备注"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.remarks" class="edit-cell" type="text" />
            <span v-if="!row.edit">{{ row.remarks }}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
          header-align="center"
        >
          <template slot-scope="{row}">
            <el-button
              v-show="row.edit"
              type="text"
              size="small"
              style="margin-left: 10px;"
              class="control-btn"
              @click="handleUpdate(row)"
            >
              更新
            </el-button>
            <el-button
              v-show="row.edit"
              type="text"
              size="small"
              class="control-btn"
              @click="handleCancel(row)"
            >
              取消
            </el-button>
            <el-button
              v-show="!row.edit"
              type="text"
              size="small"
              class="control-btn"
              @click="handleEdit(row)"
            >
              编辑
            </el-button>
            <el-button
              v-show="!row.edit"
              type="text"
              size="small"
              class="control-btn red-word-btn"
              @click="handleDelete(row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
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
    <el-dialog
      v-dialogDrag="true"
      title="添加价格标准"
      :center="false"
      :visible.sync="dialogVisible"
      width="500px"
      :before-close="handleClose"
      class="energy-price-strd-add-dialog"
    >
      <el-form ref="addEnergyForm" :model="addData" :inline="false" label-width="90px">
        <el-form-item label="标准类型">
          <el-select v-model="addData.type" placeholder="请选择标准类型">
            <el-option
              v-for="item in strdTypes"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="addData.price" type="number" />
        </el-form-item>
        <el-form-item label="级别">
          <el-input v-model="addData.level" type="number" :disabled="addData.type===1" />
        </el-form-item>
        <el-form-item label="设备类型">
          <el-select v-model="addData.facType" placeholder="请选择设备类型">
            <el-option
              v-for="item in facs"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="时间片段">
          <el-time-select
            v-model="addData.startTime"
            size="mini"
            class="priceStrd-time-select"
            placeholder="起始时间"
            :disabled="addData.type===0"
            :picker-options="{format: 'HH:mm:ss', start: '00:00:00',step: '01:00:00',end: '23:00:00'}"
          />
          <span>-</span>
          <el-time-select
            v-model="addData.endTime"
            size="mini"
            class="priceStrd-time-select"
            placeholder="结束时间"
            :disabled="addData.type===0"
            :picker-options="{
              format: 'HH:mm:ss',
              start: '00:00:00',
              step: '01:00:00',
              end: '24:00:00',
              minTime: addData.startTime
            }"
          />
        </el-form-item>
        <el-form-item label="临界最大值">
          <el-input v-model="addData.max" type="number" placeholder="请输入临界最大值" :disabled="addData.type===1" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="addData.remarks" type="text" placeholder="请输入备注" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleAdd">添 加</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getPriceStrdList,
  insertPriceStrd,
  deletePriceStrdByCode,
  updatePriceStrd
} from '@/api/platSetting/priceStrd'
export default {
  data() {
    return {
      dialogVisible: false,
      tableLoading: true,
      searchForm: {
        searchText: '',
        searchFormText: ''
      },
      currentPage: 1,
      pageSize: 15,
      count: 0,
      facs: [],
      strdTypes: [],
      addData: {
        code: '',
        price: '',
        level: '',
        facType: '',
        max: '',
        remarks: '',
        type: '',
        startTime: '',
        endTime: '',
        times: [],
        edit: false,
        editData: {}
      },
      tableData: []
    }
  },
  watch: {
    'addData.type': function(newVal, oldValue) {
      if (newVal === 0) {
        this.addData.startTime = ''
        this.addData.endTime = ''
        this.addData.times = ['', '']
      } else if (newVal === 1) {
        this.addData.level = ''
        this.addData.max = ''
      }
    },
    'addData.startTime': function(newVal, oldValue) {
      if (newVal && newVal.split(':').length === 2) {
        this.addData.startTime += ':00'
      }
    },
    'addData.endTime': function(newVal, oldValue) {
      if (newVal && newVal.split(':').length === 2) {
        this.addData.endTime += ':00'
        if (this.addData.endTime === '24:00:00') this.addData.endTime = '23:59:59'
      }
    }
  },
  mounted() {
    this.searchForm.searchText = ''
    this.initPriceTable()
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val
      this.initPriceTable()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.initPriceTable()
    },
    handleTimeChange(time, row, key) {
      if (time && time.split(':').length === 2) {
        time += ':00'
        if (time === '24:00:00') time = '23:59:59'
        row[key] = time
      }
    },
    onStrdAdd() {
      this.dialogVisible = true
    },
    handleClose() {
      this.$confirm('确认取消添加价格标准？')
        .then(_ => {
          this.exitAddDialog()
        })
        .catch(err => {
          console.log(err)
        })
    },
    exitAddDialog() {
      this.addData = {
        price: '',
        level: '',
        facType: '',
        max: '',
        remarks: '',
        edit: false,
        editData: {}
      }
      this.dialogVisible = false
    },
    checkAddData(data) {
      var flag = true
      var msg = '验证成功'
      if (data.type === '') {
        flag = false
        msg = '请选择标准类型'
      } else {
        if (data.type === 0) {
          if (data.price === '') {
            flag = false
            msg = '请输入价格'
          } else if (data.level === '') {
            flag = false
            msg = '请输入级别'
          } else if (data.facType === '') {
            flag = false
            msg = '请选择设备类型'
          } else if (data.max === '') {
            flag = false
            msg = '请输入临界最大值'
          }
        } else {
          if (data.price === '') {
            flag = false
            msg = '请输入价格'
          } else if (data.startTime === '' || data.endTime === '') {
            flag = false
            msg = '请选择时间段'
          } else if (data.facType === '') {
            flag = false
            msg = '请选择设备类型'
          }
        }
      }
      return { flag: flag, msg: msg }
    },
    checkUpdateData(data) {
      var flag = true
      var msg = '数据未更改'
      if (data.type === '') {
        flag = false
        msg = '请选择标准类型'
      } else {
        if (data.editData) {
          if (data.price !== data.editData.price) {
            flag = false
            msg = '数据已更改'
          } else if (data.level !== data.editData.level) {
            flag = false
            msg = '数据已更改'
          } else if (data.facType !== data.editData.facType) {
            flag = false
            msg = '数据已更改'
          } else if (data.max !== data.editData.max) {
            flag = false
            msg = '数据已更改'
          } else if (data.remarks !== data.editData.remarks) {
            flag = false
            msg = '数据已更改'
          } else if (data.type !== data.editData.type) {
            flag = false
            msg = '数据已更改'
          } else if (data.startTime !== data.editData.startTime) {
            flag = false
            msg = '数据已更改'
          } else if (data.endTime !== data.editData.endTime) {
            flag = false
            msg = '数据已更改'
          }
        }
      }
      return { flag: flag, msg: msg }
    },
    handleAdd() {
      if (this.checkAddData(this.addData).flag) {
        this.$confirm('确认添加？')
          .then(_ => {
            this.addPriceStrdData(this.addData)
            this.exitAddDialog()
          })
          .catch(err => {
            if (err !== 'cancel') {
              this.$message({
                type: 'error',
                duration: 2000,
                message: err
              })
            }
          })
      } else {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: this.checkAddData(this.addData).msg
        })
      }
    },
    onSearch() {
      this.searchForm.searchText = this.searchForm.searchFormText
      this.initPriceTable()
    },
    handleEdit(row) {
      row.times = [row.startTime || '', row.endTime || '']
      row.edit = true
      row.editData = JSON.parse(JSON.stringify(row))
    },
    handleCancel(row) {
      var raw = JSON.parse(JSON.stringify(row.editData))
      for (var key in raw) {
        row[key] = raw[key]
      }
      row.edit = false
    },
    handleUpdate(row) {
      if (this.checkAddData(row).flag) {
        if (this.checkUpdateData(row).flag) {
          this.$message({
            type: 'warning',
            duration: 2000,
            message: this.checkUpdateData(row).msg
          })
        } else {
          this.$confirm('确认更新？')
            .then(_ => {
              this.updatePriceStrdData(row)
            })
            .catch(err => {
              if (err !== 'cancel') {
                this.$message({
                  type: 'error',
                  duration: 2000,
                  message: err
                })
                this.handleCancel(row)
              }
            })
        }
      } else {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: this.checkAddData(row).msg
        })
      }
    },
    handleDelete(row) {
      this.$confirm('确认删除？')
        .then(_ => {
          this.deletePriceData({ code: row.code })
        })
        .catch(err => {
          if (err !== 'cancel') {
            this.$message({
              type: 'error',
              duration: 2000,
              message: err
            })
          }
        })
    },
    getFacName(code) {
      var name = ''
      for (var i = 0; i < this.facs.length; i++) {
        if (this.facs[i].code + '' === code + '') {
          name = this.facs[i].name
          break
        }
      }
      return name
    },
    getTypeName(code) {
      var name = ''
      for (var i = 0; i < this.strdTypes.length; i++) {
        if (this.strdTypes[i].code + '' === code + '') {
          name = this.strdTypes[i].name
          break
        }
      }
      return name
    },
    setPriceStrdData(params) {
      this.tableLoading = true
      getPriceStrdList(params).then(response => {
        var data = response.data
        for (var i = 0; i < data.data.length; i++) {
          data.data[i].times = [data.data[i].startTime, data.data[i].endTime]
          data.data[i].edit = false
          data.data[i].editData = {}
        }
        this.count = data.count
        this.tableData = data.data
        this.facs = data.facList
        this.strdTypes = data.strdTypes
        this.tableLoading = false
      }).catch(err => {
        this.tableLoading = false
        this.$message({
          type: 'error',
          duration: 2000,
          message: err
        })
      })
    },
    initPriceTable() {
      this.setPriceStrdData({
        size: this.pageSize,
        page: this.currentPage,
        searchText: this.searchForm.searchText
      })
    },
    addPriceStrdData(params) {
      insertPriceStrd(params).then(response => {
        this.$message({
          type: 'success',
          duration: 2000,
          message: response.msg
        })
        this.initPriceTable()
      }).catch(err => {
        this.$message({
          type: 'error',
          duration: 2000,
          message: err
        })
      })
    },
    deletePriceData(params) {
      deletePriceStrdByCode(params).then(response => {
        this.$message({
          type: 'success',
          duration: 2000,
          message: response.msg
        })
        this.initPriceTable()
      }).catch(err => {
        this.$message({
          type: 'error',
          duration: 2000,
          message: err
        })
      })
    },
    updatePriceStrdData(params) {
      updatePriceStrd(params).then(response => {
        this.$message({
          type: 'success',
          duration: 2000,
          message: response.msg
        })
        params.editData = {}
        params.edit = false
        this.initPriceTable()
      }).catch(err => {
        params.editData = {}
        params.edit = false
        this.initPriceTable()
        this.$message({
          type: 'error',
          duration: 2000,
          message: err
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .table-page {
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .table-container{
    width: 100%;
    height: 0;
    flex-grow: 1;
    shrink: 1;
    padding: 15px 20px;
    background-color: white;
  }
  .table-toobar {
    width: 100%;
    height: 50px;
    background-color: white;
    position: relative;
  }
  form.el-form.search-form {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 20px;
    justify-content: center;
    align-items: center;
  }
  .add-strd{
    position: absolute;
    bottom: 0;
    margin-left:20px;
  }
  form.el-form.search-form .el-form-item {
    margin-bottom: 0;
  }
  form.el-form.search-form .el-input {
    width: 260px;
  }
  .treeCheck-container {
    max-height: 450px;
    overflow: auto;
  }
  .blue-btn {
    color: white;
    height: 32px;
    padding: 0 20px;
    background:rgba(40,87,255,1);
    border-radius:4px;
  }
  .edit-cell {
    width: 100%;
    height:100%;
    font-size: 14px;
    color: #333333;
    text-align: center;
    border: none;
    background: #f9f9f9;
    padding: 0 10px;
  }
  .red-word-btn {
    color: #F5222D;
  }
  .control-btn:hover {
    text-decoration: underline;
  }
  .energy-price-strd-add-dialog .el-input,
  .energy-price-strd-add-dialog .el-select{
    width: 350px;
  }
  .priceStrd-time-select {
    width: 120px;
  }
  .energy-price-strd-add-dialog .el-input.priceStrd-time-select {
    width: 168px;
  }
</style>
<style lang="scss">
  .table-header,
  .table-header th {
    background-color: #F1F4FD !important;
  }
  form.el-form.search-form .el-date-editor--daterange.el-input__inner {
    width: 260px;
  }
  .noMargin .el-form-item__content {
    margin: 0 !important;
  }
  .strd-table-full-cell {
    padding: 0 !important;
  }
  .strd-table-full-cell>.cell {
    height: 38px;
    line-height:38px;
    padding: 0;
  }
  .strd-table-full-cell>.cell>span {
    padding: 10px;
    cursor: default;
  }
  .energy-price-strd-add-dialog .el-dialog__header {
    padding: 15px 20px;
    background-color: #2857ff;
    color: white;
  }
  .energy-price-strd-add-dialog .el-dialog__title {
    color: white;
  }
  .energy-price-strd-add-dialog .el-dialog__headerbtn {
    top: 15px;
    font-size: 20px;
  }
  .energy-price-strd-add-dialog .el-dialog__headerbtn .el-dialog__close {
    color: white;
  }
  .energy-price-strd-add-dialog .el-dialog__headerbtn:focus .el-dialog__close,
  .energy-price-strd-add-dialog .el-dialog__headerbtn:hover .el-dialog__close {
    color: white;
    text-shadow: 0 0 0;
  }
</style>
