<!--  -->
<template>
  <div id="platformRole">
    <div class="searchWord">
      <el-button type="primary" @click="handleAdd">添加角色</el-button>
      <el-input v-model="filters.name" style="display: inline-block;width: 212px" placeholder="请输入角色名搜索" suffix-icon="el-icon-search" @input="handleFilter" />
    </div>
    <div class="table-container">
      <platSettingTable
        ref="roleTable"
        :height="750"
        :border="border"
        :data="pageResult"
        :columns="columns"
        @findPage="findPage"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
      />
    </div>

    <!--新增编辑界面-->
    <el-dialog v-dialogDrag :title="operation?'新建角色':'修改角色名称'" width="20%" :visible.sync="dialogVisible" :close-on-click-modal="false" class="roleDialog">
      <el-form ref="dataForm" :model="dataForm" label-width="auto" :rules="dataFormRules" label-position="right">
        <div class="row row-0">
          <el-form-item v-if="true" label="角色名称" prop="ROLE_NAME">
            <el-input v-model="dataForm.ROLE_NAME" :disabled="false" auto-complete="请输入角色名称" />
          </el-form-item>
        </div>
        <div class="row row-1">
          <el-form-item v-if="true" label="扩展信息" prop="EXTENDS">
            <el-input v-model="dataForm.EXTENDS" :disabled="false" auto-complete="请输入扩展信息" />
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :loading="editLoading" type="primary" @click="dialogStatus==='create'?createData():updateData('dataForm')">保存</el-button>
        <el-button @click.native="resetForm('dataForm')">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import platSettingTable from '@/views/project/platSetting/core/platSettingTable'
import { getRoleList, updateRole, createRole, deleteRole } from '@/api/platSetting/RoleManage'
export default {
  components: {
    platSettingTable
  },
  data() {
    return {
      filters: {
        name: ''
      },
      border: true,
      columns: [],
      pageRequest: { pageNum: 1, pageSize: 10 },
      pageResult: {},
      operation: false, // true:新增, false:编辑
      dialogVisible: false, // 新增编辑界面是否显示
      editLoading: false,
      dialogStatus: '',
      dataFormRules: {
        ROLE_NAME: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ]
      },
      // 新增编辑界面数据
      dataForm: {
        ROLE_ID: null,
        ROLE_NAME: '',
        EXTENDS: ''
      }
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
        { prop: 'ROLE_ID', label: '角色编号', minWidth: 50, show: true },
        { prop: 'ROLE_NAME', label: '角色名称', minWidth: 50, show: true },
        { prop: 'EXTENDS', label: '扩展', minWidth: 50, show: true }
      ]
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          createRole(this.dataForm).then((res) => {
            this.dataForm.ROLE_ID = res.newID
            this.pageResult.content.unshift(this.dataForm)
            this.pageResult.totalSize += 1
            this.dialogVisible = false
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          }).catch(err => {
            console.log(err)
          })
        }
      })
    },
    updateData: function(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updateRole(this.dataForm).then(res => {
            const index = this.pageResult.content.findIndex(v => v.id === this.dataForm.id)
            this.pageResult.content.splice(index, 1, this.dataForm)
            this.dialogVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
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
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.dialogVisible = false
    },
    // 获取分页数据
    findPage: function(data) {
      if (data !== null) {
        this.pageRequest = data.pageRequest
      }
      this.pageRequest['filterRoleName'] = this.filters.name
      getRoleList(this.pageRequest).then(res => {
        this.pageResult.content = res.roleList
        this.pageResult.totalSize = res.roleListNumber
        // this.findUserRoles()
      }).then(data != null ? data.callback : '')
    },
    findUserRoles: function() {
      this.$api.role.findAll().then((res) => {
        this.roles = res.data
      })
    },
    handleAdd: function() {
      this.dialogStatus = 'create'
      this.dialogVisible = true
      this.operation = true
      this.dataForm = {

      }
    },
    handleEdit: function(params) {
      this.dialogStatus = 'edit'
      this.dialogVisible = true
      this.operation = false
      this.dataForm = Object.assign({}, params.row)
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleDelete: function(params) {
      deleteRole(params.rowInfor.row).then((res) => {
        this.pageResult.content.splice(params.rowInfor.index, 1)
        this.pageResult.totalSize -= 1
        params.callback(res)
      }).catch(err => {
        console.log(err)
      })
    },
    handleFilter() {
      this.$refs.roleTable.refreshPageRequest(this.pageRequest.pageNum)
    }
  }
}
</script>

<style lang="scss">
  .table-header,
  .table-header th {
    background-color: #F1F4FD !important;
  }

  #platformRole{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 84px);

    .searchWord{
      display: flex;
      flex-direction: row;
      height: 6vh;
      padding: 8px 15px;
      justify-content: space-between;
      box-shadow: 0 2px 2px #e4e4e4;
      .el-button{
          height: 36px;
          background-color: #fff;
          color: #005aff;
          width:96px;
          height:32px;
          background-color: rgba(45,73,255,1);
          color: #FFF;
          border: unset;
          font-size: 14px;
          cursor: pointer;
          margin-left: 15px;
      }
      .el-input__inner{
        background: #F9F9FB;
        border: 1px solid #E2E4EA;
        border-radius: 16px;
      }
    }
    .table-container{
      width: 100%;
      height: 100%;
      padding: 20px 29px;
      background: rgba(244,245,248,1);
    }
    .roleDialog{
      .el-dialog__header{
        background: #F9F9FB;
        border: 1px solid #E4E9F0;
        height: 42px;
        padding: 10px 20px 20px 20px;
        .el-dialog__title{
          color: #41475D;
          font-size: 14px;
        }
        .el-dialog__headerbtn{
          top: 15px;
          .el-dialog__close{
            color:  #858B9C;
          }
        }
      }

      .el-dialog__body{
        background-color: #F9FAFB;
        padding: 20px 2 0px 0 20px;
        .el-form{
          display: flex;
          flex-direction: column;
          .row{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-left: 20px;
            .el-form-item{
              width: 100%;
              margin-right: 20px;
            }
            .el-form-item__label{
              line-height: 35px;
              font-size: 12px;
            }
          }
          .el-input{
            height: 32px;
            .el-input__inner{
              background-color: #fff;
              border: 1px solid #C5CAD5;
              border-radius: 2px;
              color: #111A34;
              font-size: 14px;
              height: 32px;
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
          width: 30%;
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
        .el-button--default{
          border: 1px solid #858A9C;
          width: 30%;
          height: 32px;
          line-height: 12px;
          text-decoration: none;
          border-radius: 4px;
          font-size: 16px;
          letter-spacing: 1.6px;
        }
      }
    }
  }

</style>
<style lang='scss' scoped>
</style>
