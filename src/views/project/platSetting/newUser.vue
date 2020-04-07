<template>
  <div id="userManage">
    <!-- 顶部搜索栏 -->
    <div class="searchWord">
      <el-button type="primary" @click="handleAdd">添加用户</el-button>
      <div class="search-condition">
        <el-input v-model="filters.name" style="display: inline-block;width: 212px" placeholder="请输入用户名搜索" suffix-icon="el-icon-search" />
      </div>
    </div>

    <!-- 表格 -->
    <div class="table-container">
      <platSettingTable
        :height="750"
        :border="border"
        :data="pageResult"
        :columns="filterColumns"
        @findPage="findPage"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
      />
    </div>

    <!--新增编辑界面-->
    <el-dialog v-dialogDrag :title="operation?'添加用户':'修改用户信息'" width="40%" :visible.sync="dialogVisible" :close-on-click-modal="false" class="userDialog">
      <el-form ref="dataForm" :model="dataForm" label-width="auto" :rules="dataFormRules" label-position="top" :size="size">
        <div class="row row-0">
          <el-form-item v-if="true" label="用户名" prop="userName">
            <el-input v-model="dataForm.userName" :disabled="false" auto-complete="请输入用户名" />
          </el-form-item>
          <el-form-item v-if="true" label="密码" prop="password">
            <el-input ref="password" v-model="dataForm.password" :type="passwordType" :disabled="false" auto-complete="请输入密码" />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>
          <el-form-item v-if="true" label="用户角色" prop="role">
            <el-select v-model="dataForm.role" placeholder="请选择用户角色" style="width: 100%;">
              <el-option v-for="item in roles" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </div>
        <div class="row row-1">
          <el-form-item v-if="true" label="用户姓名" prop="realName">
            <el-input v-model="dataForm.realName" :disabled="false" auto-complete="请输入用户姓名" />
          </el-form-item>
          <el-form-item v-if="true" label="所属公司" prop="company">
            <el-select v-model="dataForm.companyCode" placeholder="请选择所属分公司" style="width: 100%;">
              <el-option v-for="item in company" :key="item.companyCode" :label="item.companyName" :value="item.companyCode" />
            </el-select>
          </el-form-item>
          <el-form-item v-if="true" label="是否为部门领导" prop="isLeader">
            <el-select v-model="dataForm.isLeader" placeholder="请选择是否为部门领导" style="width: 100%;">
              <el-option label="是" value="1" />
              <el-option label="否" value="0" />
            </el-select>
          </el-form-item>
        </div>
        <div class="row row-2">
          <el-form-item v-if="true" label="部门领导" prop="leaderName">
            <el-input v-model="dataForm.leaderName" :disabled="false" auto-complete="请输入部门领导" />
          </el-form-item>
          <el-form-item v-if="true" label="电话号码" prop="phone">
            <el-input v-model="dataForm.phone" :disabled="false" auto-complete="请输入电话号码" />
          </el-form-item>
          <el-form-item v-if="true" label="值班地点" prop="dutyAddress">
            <el-input v-model="dataForm.dutyAddress" :disabled="false" auto-complete="请输入值班地点" />
          </el-form-item>
        </div>
        <div class="row row-3">
          <el-form-item v-if="true" label="所在部门" prop="department">
            <el-select v-model="dataForm.department" placeholder="请选择所在部门" style="width: 100%;">
              <el-option v-for="item in departments" :key="item.departmentCode" :label="item.departmentName" :value="item.departmentCode" />
            </el-select>
            <platSettingButton
              icon="el-icon-edit"
              :size="size"
              @click="showDialog('departmentEidtDialog')"
            />
          </el-form-item>
          <el-form-item v-if="true" label="所属职位" prop="position">
            <el-select v-model="dataForm.position" placeholder="请选择所属职位" style="width: 100%;">
              <el-option v-for="item in positions" :key="item.positionCode" :label="item.positionName" :value="item.positionCode" />
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
        <el-button :size="size" :loading="editLoading" type="primary" @click.native="submitForm('dataForm')">提交</el-button>
        <el-button :size="size" @click.native="resetForm('dataForm')">重置</el-button>
      </div>
    </el-dialog>

    <!-- 部门与职位编辑页面 -->
    <el-dialog :id="operationEdit?'departmentEidtDialog':'positionEditDialog'" v-dialogDrag :title="operationEdit?'所在部门编辑':'所在职位编辑'" width="40%" :visible.sync="dialogSecondVisible" :close-on-click-modal="false" :modal-append-to-body="false" append-to-body>
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
      filters: {
        name: ''
      },
      border: true,
      columns: [],
      filterColumns: [],
      pageRequest: { pageNum: 1, pageSize: 10 },
      pageResult: {},
      operation: false, // true:新增, false:编辑
      operationEdit: true, // true:部门, false:职位
      dialogVisible: false, // 新增编辑界面是否显示
      dialogSecondVisible: false, // 部门与职位界面是否显示
      dialogEdit: '',
      editLoading: false,
      passwordType: 'password',
      positions: [],
      departments: [],
      dataFormRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        role: [
          { required: true, message: '请选择角色', trigger: 'change' }
        ],
        realName: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请选择所属公司', trigger: 'change' }
        ],
        isLeader: [
          { required: true, message: '请选择是否为部门领导', trigger: 'change' }
        ],
        leaderName: [
          { required: true, message: '请输入部门领导', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' }
        ],
        dutyAddress: [
          { required: true, message: '请输入值班地点', trigger: 'blur' }
        ],
        department: [
          { required: true, message: '请选择所在部门', trigger: 'change' }
        ],
        position: [
          { required: true, message: '请选择所属职位', trigger: 'change' }
        ]
      },
      company: [{
        companyCode: '0',
        companyName: '公司1'
      }, {
        companyCode: '1',
        companyName: '公司2'
      }, {
        companyCode: '2',
        companyName: '公司3'
      }],
      // 新增编辑界面数据
      dataForm: {
        userName: 'lishanlei',
        realName: '李闪磊',
        phoneNumber: '12345678',
        dutyArress: 'thtf',
        company: 'thtf',
        department: '',
        position: '',
        role: '集团公司计量处',
        isLeader: '否',
        leaderName: '李石磊'
      },
      roles: [],
      tableData: [{
        userName: 'lishanlei',
        realName: '李闪磊',
        phoneNumber: '12345678',
        dutyArress: 'thtf',
        company: 'thtf',
        department: '',
        position: '',
        role: '集团公司计量处',
        isLeader: '否',
        leaderName: '李石磊'
      }, {
        userName: 'lishanlei',
        realName: '李闪磊',
        phoneNumber: '12345678',
        dutyArress: 'thtf',
        company: 'thtf',
        department: '',
        position: '',
        role: '电控部门负责人',
        isLeader: '否',
        leaderName: '李石磊'
      }, {
        userName: 'lishanlei',
        realName: '李闪磊',
        phoneNumber: '12345678',
        dutyArress: 'thtf',
        company: 'thtf',
        department: '',
        position: '',
        role: '太古分公司调度处',
        isLeader: '否',
        leaderName: '李石磊'
      }, {
        userName: 'lishanlei',
        realName: '李闪磊',
        phoneNumber: '12345678',
        dutyArress: 'thtf',
        company: 'thtf',
        department: '',
        position: '',
        role: '集团公司领导',
        isLeader: '否',
        leaderName: '李石磊'
      }]
    }
  },
  computed: {

  },
  mounted() {
    this.initColumns()
  },
  methods: {
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
        { prop: 'userName', label: '用户名', minWidth: 50 },
        { prop: 'realName', label: '用户姓名', minWidth: 50 },
        { prop: 'phoneNumber', label: '电话号码', minWidth: 50 },
        { prop: 'dutyArress', label: '值班地点', minWidth: 50 },
        { prop: 'company', label: '所属公司', minWidth: 50 },
        { prop: 'department', label: '所属部门', minWidth: 50 },
        { prop: 'position', label: '职位', minWidth: 50 },
        { prop: 'role', label: '角色', minWidth: 50 },
        { prop: 'isLeader', label: '是否领导', minWidth: 50 },
        { prop: 'leaderName', label: '领导姓名', minWidth: 50 }
      ]
      this.filterColumns = JSON.parse(JSON.stringify(this.columns))
    },
    // 获取分页数据
    findPage: function(data) {
      // if (data !== null) {
      //   this.pageRequest = data.pageRequest
      // }
      // this.pageRequest.columnFilters = { name: { name: 'name', value: this.filters.name }}
      // this.$api.user.findPage(this.pageRequest).then((res) => {
      //   this.pageResult = res.data
      //   // this.findUserRoles()
      // }).then(data != null ? data.callback : '')
      this.findUserRoles()
      this.pageResult.content = this.tableData
      this.pageResult.totalSize = this.tableData.length
      data.callback()
    },
    findUserRoles: function() {
      // this.$api.role.findAll().then((res) => {
      //   this.roles = res.data
      // })
      this.roles = [{
        value: '0',
        label: '集团公司计量处'
      }, {
        value: '1',
        label: '电控部门负责人'
      }, {
        value: '2',
        label: '太古分公司调度室'
      }, {
        value: '3',
        label: '集团公司领导'
      }]

      this.departments = [{
        departmentCode: '0',
        departmentName: '办公室'
      }, {
        departmentCode: '1',
        departmentName: '电控所'
      }, {
        departmentCode: '2',
        departmentName: '巡检所'
      }]

      this.positions = [{
        positionCode: '0',
        positionName: '技术人员'
      }, {
        positionCode: '1',
        positionName: '分公司经理'
      }, {
        positionCode: '2',
        positionName: '总工'
      }]
    },
    handleEdit: function(params) {
      this.dialogVisible = true
      this.operation = false
      this.dataForm = Object.assign({}, params.row)
      // 这里应从数据库中取该条记录的所有字段值，从数据库取出的字段名称应该与表单中元素的名称相同，保证正确赋值表单
      // this.dataForm.role = '0'
      // this.dataForm.companyCode = '0'
      // this.dataForm.isLeader = '0'
      // this.dataForm.departmentName = '办公室'
      // this.dataForm.positionName = '技术人员'
    },
    handleAdd: function() {
      this.dialogVisible = true
      this.operation = true
      this.dataForm = {

      }
    },
    handleDelete: function(data) {
      // 这里暂时只操作界面上的数据，待连接数据库后，应从数据库中删除数据，再调用回调函数更新表格
      this.pageResult.content.splice(data.params, 1)
    },
    submitForm: function(formName) {
      console.log(this.$refs.dataForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.dialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    closeDialog: function() {
      this.dialogSecondVisible = false
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
