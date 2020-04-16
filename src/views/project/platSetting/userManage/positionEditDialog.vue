<template>
  <div class="positionEidtDialog">
    <div class="newBtn-container">
      <el-button id="btn-newPosition" type="primary" icon="el-icon-circle-plus-outline" @click="handleAdd">点击新建职位</el-button>
    </div>

    <div class="position-table">
      <departmentTable
        :border="border"
        :height="350"
        :data="pageResult"
        :columns="columns"
        @findPage="findPage"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
      />
    </div>

    <el-dialog v-dialogDrag :title="operation?'新建职位名称':'编辑职位名称'" width="15%" :visible.sync="dialogVisible" :close-on-click-modal="false" append-to-body class="positionOperation">
      <el-form ref="dataForm" :model="dataForm" label-width="auto" :rules="dataFormRules" label-position="top">
        <div class="row row-0">
          <el-form-item v-if="true" label="职位名称" prop="POS_NAME">
            <el-input v-model="dataForm.POS_NAME" :disabled="false" auto-complete="请输入职位名称" />
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :loading="editLoading" type="primary" @click.native="dialogStatus==='create'?createData():updateData('dataForm')">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import departmentTable from '@/views/project/platSetting/core/platSettingTable'
import { getPositionList, createPosition, updatePosition, deletePosition } from '@/api/platSetting/userManage'
export default {
  name: 'DepartmentEditDialog',
  components: {
    departmentTable
  },
  data() {
    return {
      border: true,
      columns: [],
      pageResult: {},
      operation: false,
      dialogVisible: false,
      editLoading: false,
      dialogStatus: '',
      dataForm: {
        CODE: '',
        POS_NAME: ''
      },
      dataFormRules: {
        POS_NAME: [
          { required: true, message: '请输入职位名称', trigger: 'blur' }
        ]
      },
      tableData: []
    }
  },
  computed: {

  },
  mounted() {
    this.initColumns()
  },
  methods: {
    initColumns: function() {
      this.columns = [
        { prop: 'CODE', label: '职位编号', minWidth: 90, show: false },
        { prop: 'POS_NAME', label: '职位名称', minWidth: 90, show: true }
      ]
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          createPosition(this.dataForm).then((res) => {
            if (res.state === 1) {
              this.dataForm.CODE = res.code
              this.pageResult.content.unshift(this.dataForm)
              this.pageResult.totalSize += 1
              this.dialogVisible = false
              this.$notify({
                title: '成功',
                message: res.msg,
                type: 'success',
                duration: 2000
              })
            } else if (res.state === 2) {
              this.$notify({
                title: '警告',
                message: res.msg,
                type: 'warning',
                duration: 2000
              })
            }
          }).catch(err => {
            console.log(err)
          })
        }
      })
    },
    updateData: function(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updatePosition(this.dataForm).then(res => {
            const index = this.pageResult.content.findIndex(v => v.CODE === this.dataForm.CODE)
            this.pageResult.content.splice(index, 1, this.dataForm)
            this.dialogVisible = false
            this.$notify({
              title: '成功',
              message: '更新职位成功！',
              type: 'success',
              duration: 2000
            })
          }).catch(err => {
            console.log(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    findPage: function(data) {
      if (data !== null) {
        this.pageRequest = data.pageRequest
      }
      getPositionList(this.pageRequest).then(res => {
        this.pageResult.content = res.positionList
        this.pageResult.totalSize = res.positionListNumber
      }).then(data != null ? data.callback : '')
    },
    handleEdit: function(params) {
      this.dialogStatus = 'edit'
      this.dialogVisible = true
      this.operation = false
      this.dataForm = Object.assign({}, params.row)
    },
    handleDelete: function(params) {
      deletePosition(params.rowInfor.row).then((res) => {
        this.pageResult.content.splice(params.rowInfor.index, 1)
        this.pageResult.totalSize -= 1
        params.callback(res)
      }).catch(err => {
        console.log(err)
      })
    },
    handleAdd: function() {
      this.dialogStatus = 'create'
      this.dialogVisible = true
      this.operation = true
      this.dataForm = {
      }
    }
  }
}
</script>

<style lang="scss">
#positionEditDialog{
  .newBtn-container{
    margin-bottom: 17px;
    #btn-newPosition{
      width: 100%;
      height: 36px;
      background-color: #FFFFFF;
      border: 1px dashed #C5CAD5;
      color: #858B9C;
    }
  }
  .el-dialog__header{
    background-color: #005aff;
    height: 42px;
    padding: 10px 20px 20px 20px;
    .el-dialog__title{
      color: #fff;
      font-size: 14px;
    }
    .el-dialog__headerbtn{
      top: 15px;
      .el-dialog__close{
        color: #fff;
      }
    }
  }
  .el-dialog__body{
    background-color: #F9FAFB;
    padding: 20px 20px 0 20px;
  }

  .el-dialog__footer{
    background-color: #F9FAFB;
    padding-top: 0px;
  }
}

.positionOperation{
    .el-dialog__header{
      background-color: #005aff;
      height: 42px;
      padding: 10px 20px 20px 20px;
      .el-dialog__title{
        color: #fff;
        font-size: 14px;
      }
      .el-dialog__headerbtn{
        top: 15px;
        .el-dialog__close{
          color: #fff;
        }
      }
    }
    .el-dialog__body{
      background-color: #F9FAFB;
      padding: 20px 0px 0 20px;
      .el-form{
          display: flex;
          flex-direction: column;
          .row{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
             .el-form-item{
              width: 100%;
              margin-right: 20px;
            }
            .el-form-item__label{
              line-height: 18px;
              font-size: 14px;
            }
          }
          .row-3{
            justify-content: flex-start;
            .el-form-item:nth-child(2){
              margin-left: 32px;
            }
            .el-form-item__content{
              display: flex;
              flex-direction: row;
              .el-button{
                border: unset;
                padding: unset;
                font-size: 20px;
                margin-left: 15px;
                background-color: #F9FAFB;
              }
            }
          }
          .el-input{
            height: 38px;
            .el-input__inner{
              background-color: #fff;
              border: 1px solid #C5CAD5;
              border-radius: 2px;
              color: #111A34;
              font-size: 14px;
            }
          }
        }
    }

    .el-dialog__footer{
      background-color: #F9FAFB;
      padding-top: 0px;
      text-align: center;
      .el-button--primary{
          text-align: center;
          width: 40%;
          height: 32px;
          background-color: #005aff;
          color: #FFFFFF;
          line-height: 12px;
          font-size: 16px;
          letter-spacing: 1.6px;
          text-decoration: none;
          border-radius: 4px;
          border: unset;
        }
    }
  }
</style>
