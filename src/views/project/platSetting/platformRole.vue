<!--  -->
<template>
  <div id="platformRole">
    <div class="searchWord">
      <el-button type="primary" @click="handleAdd">添加角色</el-button>
      <el-input v-model="filters.name" style="display: inline-block;width: 212px" placeholder="请输入角色名搜索" suffix-icon="el-icon-search" />
    </div>
    <div class="table-container">
      <platSettingTable
        :height="750"
        :border="border"
        :data="pageResult"
        :columns="filterColumns"
        @findPage="findPage"
        @handleEdit="handleEdit"
      />
    </div>

    <!--新增编辑界面-->
    <el-dialog v-dialogDrag :title="operation?'新建角色':'修改角色名称'" width="20%" :visible.sync="dialogVisible" :close-on-click-modal="false" class="roleDialog">
      <el-form ref="dataForm" :model="dataForm" label-width="auto" :rules="dataFormRules" label-position="right">
        <div class="row row-0">
          <el-form-item v-if="true" label="角色名称" prop="roleName">
            <el-input v-model="dataForm.roleName" :disabled="false" auto-complete="请输入角色名称" />
          </el-form-item>
        </div>
        <div class="row row-1">
          <el-form-item v-if="true" label="扩展信息" prop="extend">
            <el-input v-model="dataForm.extend" :disabled="false" auto-complete="请输入扩展信息" />
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :loading="editLoading" type="primary" @click.native="submitForm('dataForm')">保存</el-button>
        <el-button @click.native="resetForm('dataForm')">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import platSettingTable from '@/views/project/platSetting/core/platSettingTable'
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
      filterColumns: [],
      pageRequest: { pageNum: 1, pageSize: 10 },
      pageResult: {},
      operation: false, // true:新增, false:编辑
      dialogVisible: false, // 新增编辑界面是否显示
      editLoading: false,
      dataFormRules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ]
      },
      // 新增编辑界面数据
      dataForm: {
        id: 0,
        name: '',
        password: '123456',
        deptId: 1,
        deptName: '',
        email: 'test@qq.com',
        mobile: '13889700023',
        status: 1,
        userRoles: []
      },
      deptData: [],
      deptTreeProps: {
        label: 'name',
        children: 'children'
      },
      roles: [],
      tableData: [{
        roleCode: '1',
        roleName: 'God',
        extend: '这是一个角色'
      }, {
        roleCode: '2',
        roleName: '测试',
        extend: '这是一个角色'
      }, {
        roleCode: '3',
        roleName: '员工',
        extend: '这是一个角色'
      }, {
        roleCode: '4',
        roleName: '集团公司领导',
        extend: '这是一个角色'
      }]
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
        { prop: 'roleCode', label: '角色编号', minWidth: 50 },
        { prop: 'roleName', label: '角色名称', minWidth: 50 },
        { prop: 'extend', label: '扩展', minWidth: 50 }
      ]
      this.filterColumns = JSON.parse(JSON.stringify(this.columns))
    },
    submitForm: function(formName) {
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
      // console.log(data)
      this.pageResult.content = this.tableData
      this.pageResult.totalSize = this.tableData.length
      data.callback()
    },
    findUserRoles: function() {
      this.$api.role.findAll().then((res) => {
        this.roles = res.data
      })
    },
    handleAdd: function() {
      this.dialogVisible = true
      this.operation = true
      this.dataForm = {

      }
    },
    handleEdit: function(params) {
      this.dialogVisible = true
      this.operation = false
      this.dataForm = Object.assign({}, params.row)
      const userRoles = []
      for (let i = 0, len = params.row.userRoles.length; i < len; i++) {
        userRoles.push(params.row.userRoles[i].roleId)
      }
      this.dataForm.userRoles = userRoles
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
