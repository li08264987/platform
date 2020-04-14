<template>
  <div class="table-page">
    <div class="table-toobar">
      <el-button type="primary" class="blue-btn add-strd" @click="onStrdAdd()">添加</el-button>
      <el-form ref="form" :model="searchForm" label-width="120px" class="search-form">
        <el-form-item label="" :class="'noMargin'">
          <el-input v-model="searchForm.searchText" placeholder="输入搜索内容" />
          <el-button class="blue-btn" type="primary" @click="onSearch()">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-container">
      <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
          prop="time"
          label="能耗时间"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-date-picker
              v-if="row.edit"
              v-model="row.time"
              value-format="yyyy-MM"
              type="month"
              class="edit-cell"
              placeholder="选择能耗时间"
            />
            <span v-if="!row.edit">{{ row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="value"
          label="能耗值"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.value" class="edit-cell" type="number" />
            <span v-if="!row.edit">{{ row.value }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="area"
          label="加权面积"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.area" class="edit-cell" type="number" />
            <span v-if="!row.edit">{{ row.area }}</span>
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
              @click="handleUpdate($index, row)"
            >
              更新
            </el-button>
            <el-button
              v-show="row.edit"
              type="text"
              size="small"
              class="control-btn"
              @click="handleCancel($index, row)"
            >
              取消
            </el-button>
            <el-button
              v-show="!row.edit"
              type="text"
              size="small"
              class="control-btn"
              @click="handleEdit($index, row)"
            >
              编辑
            </el-button>
            <el-button
              v-show="!row.edit"
              type="text"
              size="small"
              class="control-btn red-word-btn"
              @click="handleDelete($index, row)"
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
        <el-form-item label="能耗时间">
          <el-date-picker
            v-model="addData.time"
            value-format="yyyy-MM"
            type="month"
            placeholder="选择能耗时间"
          />
        </el-form-item>
        <el-form-item label="能耗值">
          <el-input v-model="addData.value" type="number" placeholder="请输入能耗值" />
        </el-form-item>
        <el-form-item label="加权面积">
          <el-input v-model="addData.area" type="number" placeholder="请输入加权面积" />
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
export default {
  data() {
    return {
      dialogVisible: false,
      searchForm: {
        searchText: ''
      },
      currentPage: 1,
      pageSize: 15,
      count: 2,
      companys: [{
        code: 'MLS',
        name: '木林森'
      }],
      systems: [{
        code: 'ky',
        name: '空压系统'
      }, {
        code: 'zk',
        name: '真空系统'
      }, {
        code: 'dl',
        name: '电力系统'
      }, {
        code: 'qd',
        name: '氢氮系统'
      }],
      addData: {
        company: '',
        sysName: '',
        time: '',
        value: '',
        area: '',
        edit: false,
        editData: {}
      },
      tableData: [{
        company: 'MLS',
        sysName: 'ky',
        time: '2020-03',
        value: 80,
        area: 2000000,
        edit: false,
        editData: {}
      }, {
        company: 'MLS',
        sysName: 'ky',
        time: '2020-04',
        value: 80,
        area: 2000000,
        edit: false,
        editData: {}
      }]
    }
  },
  mounted() {

  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
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
        company: '',
        sysName: '',
        time: '',
        value: '',
        area: '',
        edit: false,
        editData: {}
      }
      this.dialogVisible = false
    },
    checkAddData(data) {
      var flag = true
      var msg = '验证成功'
      if (data.company === '') {
        flag = false
        msg = '请选择所属公司'
      } else if (data.sysName === '') {
        flag = false
        msg = '请选择系统名称'
      } else if (data.time === '') {
        flag = false
        msg = '请选择能耗时间'
      } else if (data.value === '') {
        flag = false
        msg = '请输入能耗值'
      } else if (data.area === '') {
        flag = false
        msg = '请输入加权面积'
      }
      return { flag: flag, msg: msg }
    },
    handleAdd() {
      if (this.checkAddData(this.addData).flag) {
        this.$confirm('确认添加？')
          .then(_ => {
            this.tableData.unshift(this.addData)
            this.count++
            this.exitAddDialog()
          })
          .catch(err => {
            this.$message({
              type: 'error',
              duration: 2000,
              message: err
            })
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
      console.log(this.searchForm)
    },
    handleEdit(index, row) {
      row.edit = true
      row.editData = JSON.parse(JSON.stringify(row))
    },
    handleCancel(index, row) {
      var raw = JSON.parse(JSON.stringify(row.editData))
      for (var key in raw) {
        row[key] = raw[key]
      }
      row.edit = false
    },
    handleUpdate(index, row) {
      if (this.checkAddData(row).flag) {
        row.editData = {}
        row.edit = false
      } else {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: this.checkAddData(row).msg
        })
      }
    },
    handleDelete(index, row) {
      this.$confirm('确认删除？')
        .then(_ => {
          this.tableData.splice(index, 1)
          this.count--
        })
        .catch(_ => {
          console.log('cancel')
        })
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
