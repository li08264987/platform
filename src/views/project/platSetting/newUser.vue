<template>
  <div id="userManage">
    <div class="searchWord">
      <el-button type="primary" @click="handleAdd">添加用户</el-button>
      <div class="search-condition">
        <el-input v-model="filterUserName" style="display: inline-block;width: 212px" placeholder="请输入用户名搜索" suffix-icon="el-icon-search" @input="handleFilter" />
      </div>
    </div>

    <div class="table-container">
      <platSettingTable
        ref="userTable"
        :height="750"
        :border="border"
        :data="pageResult"
        :columns="columns"
        @findPage="findPage"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
      />
    </div>

    <el-dialog v-dialogDrag :title="operation?'添加用户':'修改用户信息'" width="40%" :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" class="userDialog">
      <el-form ref="dataForm" :model="dataForm" label-width="auto" :rules="dataFormRules" label-position="top" :size="size">
        <div class="row row-0">
          <el-form-item v-if="true" label="用户名" prop="USER_NAME">
            <el-input v-model="dataForm.USER_NAME" :disabled="false" auto-complete="请输入用户名" />
          </el-form-item>
          <el-form-item v-if="true" label="密码" prop="PASSWORD">
            <el-input ref="password" v-model="dataForm.PASSWORD" :type="passwordType" :disabled="false" auto-complete="请输入密码" />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>
          <el-form-item v-if="true" label="用户角色" prop="ROLE_NAME">
            <el-select v-model="dataForm.ROLE_NAME" placeholder="请选择用户角色" style="width: 100%;" @change="roleSelectChange">
              <el-option v-for="item in roles" :key="item.ROLE_CODE" :label="item.ROLE_NAME" :value="{value:item.ROLE_CODE, label:item.ROLE_NAME}" />
            </el-select>
          </el-form-item>
        </div>
        <div class="row row-1">
          <el-form-item v-if="true" label="用户姓名" prop="REAL_NAME">
            <el-input v-model="dataForm.REAL_NAME" :disabled="false" auto-complete="请输入用户姓名" />
          </el-form-item>
          <el-form-item v-if="true" label="所属公司" prop="COMPANY">
            <el-select v-model="dataForm.COMPANY" placeholder="请选择所属分公司" style="width: 100%;" @change="companySelectChange">
              <el-option v-for="item in company" :key="item.COM_CODE" :label="item.COMPANY" :value="{value:item.COM_CODE, label:item.COMPANY}" />
            </el-select>
          </el-form-item>
          <el-form-item v-if="true" label="是否为部门领导" prop="IS_LEADER">
            <el-select v-model="dataForm.IS_LEADER" placeholder="请选择是否为部门领导" style="width: 100%;" @change="isLeaderSelectChange">
              <el-option v-for="item in isLeaderArray" :key="item.value" :label="item.label" :value="{value:item.value, label:item.label}" />
            </el-select>
          </el-form-item>
        </div>
        <div class="row row-2">
          <el-form-item v-if="true" label="部门领导" prop="LEADER_NAME">
            <el-autocomplete v-model="dataForm.LEADER_NAME" :disabled="false" :fetch-suggestions="querySearchAsync" :trigger-on-focus="false" auto-complete="请输入部门领导" @select="leaderSelect" />
          </el-form-item>
          <el-form-item v-if="true" label="电话号码" prop="TELEPHONE">
            <el-input v-model="dataForm.TELEPHONE" :disabled="false" auto-complete="请输入电话号码" />
          </el-form-item>
          <el-form-item v-if="true" label="值班地点" prop="DUTY_ADDRESS">
            <el-input v-model="dataForm.DUTY_ADDRESS" :disabled="false" auto-complete="请输入值班地点" />
          </el-form-item>
        </div>
        <div class="row row-3">
          <el-form-item v-if="true" label="所在部门" prop="DEPARTMENT">
            <el-select v-model="dataForm.DEPARTMENT" placeholder="请选择所在部门" style="width: 100%;" @change="departmentSelectChange">
              <el-option v-for="item in departments" :key="item.DEPARTMENTCODE" :label="item.DEPARTMENT" :value="{value:item.DEPARTMENTCODE, label:item.DEPARTMENT}" />
            </el-select>
            <platSettingButton
              icon="el-icon-edit"
              :size="size"
              @click="showDialog('departmentEidtDialog')"
            />
          </el-form-item>
          <el-form-item v-if="true" label="所属职位" prop="POSITION">
            <el-select v-model="dataForm.POSITION" placeholder="请选择所属职位" style="width: 100%;" @change="positionSelectChange">
              <el-option v-for="item in positions" :key="item.POSITION_CODE" :label="item.POSITION" :value="{value:item.POSITION_CODE,label:item.POSITION}" />
            </el-select>
            <platSettingButton
              icon="el-icon-edit"
              :size="size"
              @click="showDialog('positionEditDialog')"
            />
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :size="size" :loading="editLoading" type="primary" @click="dialogStatus==='create'?createData():updateData('dataForm')">提交</el-button>
        <el-button :size="size" @click="resetForm('dataForm')">重置</el-button>
      </div>
    </el-dialog>

    <el-dialog :id="operationEdit?'departmentEidtDialog':'positionEditDialog'" v-dialogDrag :title="operationEdit?'所在部门编辑':'所在职位编辑'" width="40%" :visible.sync="dialogSecondVisible" :close-on-click-modal="false" :modal-append-to-body="false" append-to-body @close="closeDialog">
      <template v-if="dialogEdit === 'departmentEidtDialog'">
        <departmentEidtDialog />
      </template>
      <template v-else-if="dialogEdit === 'positionEditDialog'">
        <positionEditDialog />
      </template>
    </el-dialog>

  </div>
</template>

<script>
import platSettingTable from '@/views/project/platSetting/core/platSettingTable'
import platSettingButton from '@/views/project/platSetting/core/platSettingButton'
import departmentEidtDialog from '@/views/project/platSetting/userManage/departmentEditDialog'
import positionEditDialog from '@/views/project/platSetting/userManage/positionEditDialog'
import { getUserList, deleteUser, createUser, updateUser, fetchSelectData, searchLeader } from '@/api/platSetting/userManage'
export default {
  components: {
    platSettingTable,
    platSettingButton,
    departmentEidtDialog,
    positionEditDialog
  },
  data() {
    return {
      size: 'small',
      filterUserName: '',
      border: true,
      columns: [],
      pageRequest: {
        pageNum: 1,
        pageSize: 15
      },
      pageResult: {},
      operation: false,
      operationEdit: true,
      dialogVisible: false,
      dialogSecondVisible: false,
      dialogEdit: '',
      editLoading: false,
      dialogStatus: '',
      passwordType: 'password',
      dataFormRules: {
        USER_NAME: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        PASSWORD: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        ROLE_NAME: [
          { required: true, message: '请选择角色', trigger: 'change' }
        ],
        REAL_NAME: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' }
        ],
        COMPANY: [
          { required: true, message: '请选择所属公司', trigger: 'change' }
        ],
        IS_LEADER: [
          { required: true, message: '请选择是否为部门领导', trigger: 'change' }
        ],
        LEADER_NAME: [
          { required: true, message: '请输入部门领导', trigger: 'blur' }
        ],
        TELEPHONE: [
          { required: true, message: '请输入电话号码', trigger: 'blur' }
        ],
        DUTY_ADDRESS: [
          { required: true, message: '请输入值班地点', trigger: 'blur' }
        ],
        DEPARTMENT: [
          { required: true, message: '请选择所在部门', trigger: 'change' }
        ],
        POSITION: [
          { required: true, message: '请选择所属职位', trigger: 'change' }
        ]
      },
      dataForm: {
        USER_NAME: '',
        REAL_NAME: '',
        TELEPHONE: '',
        DUTY_ADDRESS: '',
        DEPARTMENTCODE: '',
        DEPARTMENT: '',
        PASSWORD: '',
        IS_LEADER: '',
        IS_LEADER_CODE: '',
        LEADER_USERNAME: '',
        LEADER_NAME: '',
        COM_CODE: '',
        COMPANY: '',
        POSITION_CODE: '',
        POSITION: '',
        ROLE_CODE: '',
        ROLE_NAME: '',
        CODE: ''
      },
      company: [],
      positions: [],
      departments: [],
      roles: [],
      leaderSuggestion: [],
      isLeaderArray: [
        { value: 0, label: '否' },
        { value: 1, label: '是' }
      ],
      timeout: null
    }
  },
  mounted() {
    this.initColumns()
    this.getSelectData()
    this.searchInputLeader()
  },
  methods: {
    closeDialog: function(params) {
      this.getSelectData()
    },
    getSelectData: function() {
      fetchSelectData().then((res) => {
        this.roles = res.roleList
        this.company = res.companyList
        this.positions = res.positionList
        this.departments = res.departmentList
      }).catch(err => {
        console.log(err)
      })
    },
    showDialog: function(dialogEdit) {
      this.dialogSecondVisible = true
      this.dialogEdit = dialogEdit
      if (dialogEdit === 'departmentEidtDialog') {
        this.operationEdit = true
      } else if (dialogEdit === 'positionEditDialog') {
        this.operationEdit = false
      }
    },
    initColumns: function() {
      this.columns = [
        { prop: 'USER_NAME', label: '用户名', minWidth: 50, show: true },
        { prop: 'REAL_NAME', label: '用户姓名', minWidth: 50, show: true },
        { prop: 'TELEPHONE', label: '电话号码', minWidth: 50, show: true },
        { prop: 'DUTY_ADDRESS', label: '值班地点', minWidth: 50, show: true },
        { prop: 'COMPANY', label: '所属公司', minWidth: 50, show: true },
        { prop: 'COM_CODE', label: '所属公司Code', minWidth: 50, show: false },
        { prop: 'DEPARTMENT', label: '所属部门', minWidth: 50, show: true },
        { prop: 'DEPARTMENTCODE', label: '所属部门Code', minWidth: 50, show: false },
        { prop: 'POSITION', label: '职位', minWidth: 50, show: true },
        { prop: 'POSITIONCODE', label: '职位Code', minWidth: 50, show: false },
        { prop: 'ROLE_NAME', label: '角色', minWidth: 50, show: true },
        { prop: 'ROLE_CODE', label: '角色code', minWidth: 50, show: false },
        { prop: 'IS_LEADER', label: '是否领导', minWidth: 50, show: true },
        { prop: 'IS_LEADER_CODE', label: '是否领导', minWidth: 50, show: false },
        { prop: 'LEADER_NAME', label: '领导姓名', minWidth: 50, show: true },
        { prop: 'LEADER_USERNAME', label: '领导姓名', minWidth: 50, show: false },
        { prop: 'CODE', label: '编号', minWidth: 50, show: false }
      ]
    },
    findPage: function(data) {
      if (data !== null) {
        this.pageRequest = data.pageRequest
      }
      this.pageRequest['filterUserName'] = this.filterUserName
      getUserList(this.pageRequest).then(res => {
        this.pageResult.content = res.userList
        this.pageResult.totalSize = res.userListNumber
      }).then(data != null ? data.callback : '')
    },
    handleEdit: function(params) {
      this.passwordType = 'password'
      this.dialogStatus = 'edit'
      this.dialogVisible = true
      this.operation = false
      this.dataForm = Object.assign({}, params.row)
    },
    handleAdd: function() {
      this.dialogStatus = 'create'
      this.dialogVisible = true
      this.operation = true
      this.dataForm = {

      }
    },
    handleDelete: function(params) {
      deleteUser(params.rowInfor.row).then((res) => {
        this.pageResult.content.splice(params.rowInfor.index, 1)
        this.pageResult.totalSize -= 1
        params.callback(res)
      }).catch(err => {
        console.log(err)
      })
    },
    updateData: function(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updateUser(this.dataForm).then(res => {
            const index = this.pageResult.content.findIndex(v => v.USER_NAME === this.dataForm.USER_NAME)
            this.pageResult.content.splice(index, 1, this.dataForm)
            this.dialogVisible = false
            this.$notify({
              title: '成功',
              message: '更新用户成功',
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
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          createUser(this.dataForm).then((res) => {
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
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    roleSelectChange(params) {
      const { value, label } = params
      this.dataForm.ROLE_CODE = value
      this.dataForm.ROLE_NAME = label
    },
    companySelectChange(params) {
      const { value, label } = params
      this.dataForm.COM_CODE = value
      this.dataForm.COMPANY = label
    },
    isLeaderSelectChange(params) {
      const { value, label } = params
      this.dataForm.IS_LEADER_CODE = value
      this.dataForm.IS_LEAdER = label
    },
    departmentSelectChange(params) {
      const { value, label } = params
      this.dataForm.DEPARTMENTCODE = value
      this.dataForm.DEPARTMENT = label
    },
    positionSelectChange(params) {
      const { value, label } = params
      this.dataForm.POSITION_CODE = value
      this.dataForm.POSITION = label
    },
    searchInputLeader() {
      searchLeader().then((res) => {
        this.leaderSuggestion = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    querySearchAsync(queryString, cb) {
      var leaderSuggestion = this.leaderSuggestion
      var result = queryString ? leaderSuggestion.filter(this.createStateFilter(queryString)) : leaderSuggestion
      cb(result)
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.indexOf(queryString) === 0)
      }
    },
    leaderSelect(item) {
      this.dataForm.LEADER_USERNAME = item.USER_NAME
      this.dataForm.LEADER_NAME = item.value
    },
    handleFilter() {
      this.$refs.userTable.refreshPageRequest(this.pageRequest.pageNum)
    }
  }
}
</script>

<style lang="scss">
  .table-header,
  .table-header th {
    background-color: #F1F4FD !important;
  }

  #userManage{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .searchWord{
      display: flex;
      flex-direction: row;
      height: 6vh;
      padding: 8px 15px;
      justify-content: space-between;
      box-shadow: 0 2px 2px #e4e4e4;
      .el-button{
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
    .userDialog{
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
              width: 33%;
              margin-right: 20px;
            }
            .el-form-item__label{
              line-height: 18px;
              font-size: 12px;
            }
            .show-pwd {
              position: absolute;
              right: 10px;
              font-size: 16px;
              cursor: pointer;
              user-select: none;
            }
            .el-autocomplete{
              width: 100%;
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
        .el-button--primary{
          text-align: center;
          width: 15%;
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
          width: 15%;
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
