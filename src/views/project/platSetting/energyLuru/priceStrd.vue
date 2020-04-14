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
            <el-input v-if="row.edit" v-model="row.level" class="edit-cell" type="number" />
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
          prop="max"
          label="临界最大值"
          header-align="center"
          align="center"
        >
          <template slot-scope="{row}">
            <el-input v-if="row.edit" v-model="row.max" class="edit-cell" type="number" />
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
      title="添加价格标准"
      :center="false"
      :visible.sync="dialogVisible"
      width="360px"
      :before-close="handleClose"
      class="energy-strd-add-dialog"
    >
      <el-form ref="addEnergyForm" :model="addData" :inline="false" label-width="90px">
        <el-form-item label="价格">
          <el-input v-model="addData.price" type="number" />
        </el-form-item>
        <el-form-item label="级别">
          <el-input v-model="addData.level" type="number" />
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
        <el-form-item label="临界最大值">
          <el-input v-model="addData.max" type="number" placeholder="请输入临界最大值" />
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
      facs: [{
        code: 'kylg1',
        name: '1#螺杆空压机'
      }, {
        code: 'kylg2',
        name: '2#螺杆空压机'
      }, {
        code: 'kylg3',
        name: '3#螺杆空压机'
      }],
      addData: {
        price: '',
        level: '',
        facType: '',
        max: '',
        remarks: '',
        edit: false,
        editData: {}
      },
      tableData: [{
        price: 20,
        level: 1,
        facType: 'kylg1',
        max: 1000,
        remarks: '这是一个备注',
        edit: false,
        editData: {}
      }, {
        price: 25,
        level: 2,
        facType: 'kylg1',
        max: 3000,
        remarks: '',
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
      return { flag: flag, msg: msg }
    },
    handleAdd() {
      if (this.checkAddData(this.addData).flag) {
        this.$confirm('确认添加？')
          .then(_ => {
            this.tableData.push(this.addData)
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
    getFacName(code) {
      var name = ''
      for (var i = 0; i < this.facs.length; i++) {
        if (this.facs[i].code + '' === code + '') {
          name = this.facs[i].name
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
