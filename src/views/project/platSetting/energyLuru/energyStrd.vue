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
        :data="tableData"
        height="calc(100% - 35px)"
        header-row-class-name="table-header"
        style="width: 100%; overflow-y: auto;"
        cell-class-name="strd-table-full-cell"
      >
        <el-table-column label="序号" width="80" header-align="center">
          <template slot-scope="{$index}">
            <span>{{ $index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="周信息"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-select v-if="row.edit" v-model="row.weekday" class="edit-cell" placeholder="请选择周信息">
              <el-option
                v-for="item in strdTypes"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              />
            </el-select>
            <span v-if="!row.edit">{{ getTypeName(row.weekday) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="company"
          label="所属公司"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-select v-if="row.edit" v-model="row.company" class="edit-cell" placeholder="请选择所属公司">
              <el-option
                v-for="item in companys"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              />
            </el-select>
            <span v-if="!row.edit">{{ getCompanyName(row.company) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="sysName"
          label="系统名称"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-select v-if="row.edit" v-model="row.sysName" class="edit-cell" placeholder="请选择系统名称">
              <el-option
                v-for="item in systems"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              />
            </el-select>
            <span v-if="!row.edit">{{ getSystemName(row.sysName) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="pGas"
          label="产气量指标"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.pGas" :disabled="!checkIsSys(row.sysName)" class="edit-cell" type="number" />
            <span v-if="!row.edit">{{ row.pGas }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="value"
          label="电耗指标"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.value" class="edit-cell" type="number" />
            <span v-if="!row.edit">{{ row.value }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="charge"
          label="收费标准"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.charge" class="edit-cell" type="number" />
            <span v-if="!row.edit">{{ row.charge }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="efficiency"
          label="能效标准"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.efficiency" :disabled="!checkIsSys(row.sysName)" class="edit-cell" type="number" />
            <span v-if="!row.edit">{{ row.efficiency }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="gas"
          label="压缩空气限额"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.gas" :disabled="checkIsSys(row.sysName)" class="edit-cell" type="number" />
            <span v-if="!row.edit">{{ row.gas }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="sky"
          label="真空限额"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.sky" :disabled="checkIsSys(row.sysName)" class="edit-cell" type="number" />
            <span v-if="!row.edit">{{ row.sky }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="hn"
          label="氢氮气体限额"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.hn" :disabled="checkIsSys(row.sysName)" class="edit-cell" type="number" />
            <span v-if="!row.edit">{{ row.hn }}</span>
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
      title="添加能耗标准"
      :center="false"
      :visible.sync="dialogVisible"
      width="360px"
      :before-close="handleClose"
      class="energy-strd-add-dialog"
    >
      <el-form ref="addEnergyForm" :model="addData" :inline="false" label-width="80px">
        <el-form-item label="所属公司">
          <el-select v-model="addData.company" placeholder="请选择所属公司">
            <el-option
              v-for="item in companys"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="周信息">
          <el-select v-model="addData.weekday" placeholder="请选择周信息">
            <el-option
              v-for="item in strdTypes"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="系统名称">
          <el-select v-model="addData.sysName" placeholder="请选择系统名称">
            <el-option
              v-for="item in systems"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-show="addData.sysName && checkIsSys(addData.sysName)" label="产气量指标">
          <el-input v-model="addData.pGas" type="number" placeholder="请输入产气量指标" />
        </el-form-item>
        <el-form-item v-show="addData.sysName" label="电耗指标">
          <el-input v-model="addData.value" type="number" placeholder="请输入电耗指标" />
        </el-form-item>
        <el-form-item v-show="addData.sysName" label="收费标准">
          <el-input v-model="addData.charge" type="number" placeholder="请输入收费标准" />
        </el-form-item>
        <el-form-item v-show="addData.sysName && checkIsSys(addData.sysName)" label="能效标准">
          <el-input v-model="addData.efficiency" type="number" placeholder="请输入能效标准" />
        </el-form-item>
        <el-form-item v-show="addData.sysName && !checkIsSys(addData.sysName)" label="压缩空气限额">
          <el-input v-model="addData.gas" type="number" placeholder="请输入压缩空气限额" />
        </el-form-item>
        <el-form-item v-show="addData.sysName && !checkIsSys(addData.sysName)" label="真空限额">
          <el-input v-model="addData.sky" type="number" placeholder="请输入真空限额" />
        </el-form-item>
        <el-form-item v-show="addData.sysName && !checkIsSys(addData.sysName)" label="氢氮气体限额">
          <el-input v-model="addData.hn" type="number" placeholder="请输入氢氮气体限额" />
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
  getEnergyStrdList,
  insertEnergyStrd,
  deleteEnergyStrdByCode,
  updateEnergyStrd
} from '@/api/platSetting/energyStrd'
export default {
  data() {
    return {
      dialogVisible: false,
      searchForm: {
        searchText: '',
        searchFormText: ''
      },
      currentPage: 1,
      pageSize: 15,
      count: 0,
      strdTypes: [],
      companys: [],
      systems: [],
      addData: {
        code: '',
        company: '',
        sysName: '',
        pGas: '',
        value: '',
        weekday: '',
        efficiency: '',
        charge: '',
        gas: '',
        sky: '',
        hn: '',
        edit: false,
        editData: {}
      },
      tableData: []
    }
  },
  mounted() {
    this.searchForm.searchText = ''
    this.initEnergyTable()
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val
      this.initEnergyTable()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.initEnergyTable()
    },
    onStrdAdd() {
      this.dialogVisible = true
    },
    handleClose() {
      this.$confirm('确认取消添加能耗标准？')
        .then(_ => {
          this.exitAddDialog()
        })
        .catch(err => {
          console.log(err)
        })
    },
    exitAddDialog() {
      this.addData = {
        code: '',
        company: '',
        sysName: '',
        pGas: '',
        value: '',
        weekday: '',
        efficiency: '',
        charge: '',
        gas: '',
        sky: '',
        hn: '',
        edit: false,
        editData: {}
      }
      this.dialogVisible = false
    },
    checkUpdateData(data) {
      var flag = true
      var msg = '数据未更改'
      if (data.editData) {
        if (this.checkIsSys(data.sysName)) {
          if (data.company !== data.editData.company) {
            flag = false
            msg = '数据已更改'
          } else if (data.sysName !== data.editData.sysName) {
            flag = false
            msg = '数据已更改'
          } else if (data.weekday !== data.editData.weekday) {
            flag = false
            msg = '数据已更改'
          } else if (data.value !== data.editData.value) {
            flag = false
            msg = '数据已更改'
          } else if (data.pGas !== data.editData.pGas) {
            flag = false
            msg = '数据已更改'
          } else if (data.efficiency !== data.editData.efficiency) {
            flag = false
            msg = '数据已更改'
          } else if (data.charge !== data.editData.charge) {
            flag = false
            msg = '数据已更改'
          }
        } else {
          if (data.company !== data.editData.company) {
            flag = false
            msg = '数据已更改'
          } else if (data.sysName !== data.editData.sysName) {
            flag = false
            msg = '数据已更改'
          } else if (data.weekday !== data.editData.weekday) {
            flag = false
            msg = '数据已更改'
          } else if (data.value !== data.editData.value) {
            flag = false
            msg = '数据已更改'
          } else if (data.gas !== data.editData.gas) {
            flag = false
            msg = '数据已更改'
          } else if (data.sky !== data.editData.sky) {
            flag = false
            msg = '数据已更改'
          } else if (data.hn !== data.editData.hn) {
            flag = false
            msg = '数据已更改'
          } else if (data.charge !== data.editData.charge) {
            flag = false
            msg = '数据已更改'
          }
        }
      }
      return { flag: flag, msg: msg }
    },
    checkAddData(data) {
      var flag = true
      var msg = '验证成功'
      if (this.checkIsSys(data.sysName)) {
        if (data.company === '') {
          flag = false
          msg = '请选择所属公司'
        } else if (data.sysName === '') {
          flag = false
          msg = '请选择系统名称'
        } else if (data.weekday === '') {
          flag = false
          msg = '请选择周信息'
        } else if (data.value === '') {
          flag = false
          msg = '请输入能耗值'
        } else if (data.efficiency === '') {
          flag = false
          msg = '请输入能效指标'
        } else if (data.charge === '') {
          flag = false
          msg = '请输入能费指标'
        } else if (data.pGas === '') {
          flag = false
          msg = '请输入产气量指标'
        }
      } else {
        if (data.company === '') {
          flag = false
          msg = '请选择所属公司'
        } else if (data.sysName === '') {
          flag = false
          msg = '请选择系统名称'
        } else if (data.weekday === '') {
          flag = false
          msg = '请选择周信息'
        } else if (data.value === '') {
          flag = false
          msg = '请输入能耗值'
        } else if (data.charge === '') {
          flag = false
          msg = '请输入能费指标'
        } else if (data.gas === '') {
          flag = false
          msg = '请输入压缩空气限额'
        } else if (data.sky === '') {
          flag = false
          msg = '请输入真空限额'
        } else if (data.hn === '') {
          flag = false
          msg = '请输入氢氮气体限额'
        }
      }

      return { flag: flag, msg: msg }
    },
    handleAdd() {
      if (this.checkAddData(this.addData).flag) {
        this.$confirm('确认添加？')
          .then(_ => {
            this.addEnergyStrdData(this.addData)
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
      this.initEnergyTable()
    },
    handleEdit(row) {
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
              this.updateEnergyStrdData(row)
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
          this.deleteEnergyData({ code: row.code })
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
    checkIsSys(code) {
      var flag = false
      for (var i = 0; i < this.systems.length; i++) {
        if (this.systems[i].code + '' === code + '') {
          if (this.systems[i].isSys) flag = this.systems[i].isSys
          break
        }
      }
      return flag
    },
    getCompanyName(code) {
      var name = ''
      for (var i = 0; i < this.companys.length; i++) {
        if (this.companys[i].code + '' === code + '') {
          name = this.companys[i].name
          break
        }
      }
      return name
    },
    getSystemName(code) {
      var name = ''
      for (var i = 0; i < this.systems.length; i++) {
        if (this.systems[i].code + '' === code + '') {
          name = this.systems[i].name
          break
        }
      }
      return name
    },
    initEnergyTable() {
      this.setEnergyStrdData({
        size: this.pageSize,
        page: this.currentPage,
        searchText: this.searchForm.searchText
      })
    },
    setEnergyStrdData(params) {
      getEnergyStrdList(params).then(response => {
        var data = response.data
        for (var i = 0; i < data.data.length; i++) {
          data.data[i].edit = false
          data.data[i].editData = {}
        }
        this.count = data.count
        this.tableData = data.data
        this.companys = data.companys
        this.systems = data.systemList
        this.strdTypes = data.strdTypes
      }).catch(err => {
        this.$message({
          type: 'error',
          duration: 2000,
          message: err
        })
      })
    },
    addEnergyStrdData(params) {
      insertEnergyStrd(params).then(response => {
        this.$message({
          type: 'success',
          duration: 2000,
          message: response.msg
        })
        this.initEnergyTable()
      }).catch(err => {
        this.$message({
          type: 'error',
          duration: 2000,
          message: err
        })
      })
    },
    deleteEnergyData(params) {
      deleteEnergyStrdByCode(params).then(response => {
        this.$message({
          type: 'success',
          duration: 2000,
          message: response.msg
        })
        this.initEnergyTable()
      }).catch(err => {
        this.$message({
          type: 'error',
          duration: 2000,
          message: err
        })
      })
    },
    updateEnergyStrdData(params) {
      updateEnergyStrd(params).then(response => {
        this.$message({
          type: 'success',
          duration: 2000,
          message: response.msg
        })
        params.editData = {}
        params.edit = false
        this.initEnergyTable()
      }).catch(err => {
        params.editData = {}
        params.edit = false
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
  .energy-strd-add-dialog .el-input,
  .energy-strd-add-dialog .el-select{
    width: 220px;
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
  .energy-strd-add-dialog .el-dialog__header {
    padding: 15px 20px;
    background-color: #2857ff;
    color: white;
  }
  .energy-strd-add-dialog .el-dialog__title {
    color: white;
  }
  .energy-strd-add-dialog .el-dialog__headerbtn {
    top: 15px;
    font-size: 20px;
  }
  .energy-strd-add-dialog .el-dialog__headerbtn .el-dialog__close {
    color: white;
  }
  .energy-strd-add-dialog .el-dialog__headerbtn:focus .el-dialog__close,
  .energy-strd-add-dialog .el-dialog__headerbtn:hover .el-dialog__close {
    color: white;
    text-shadow: 0 0 0;
  }
</style>
