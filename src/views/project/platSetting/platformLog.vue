<!--  -->
<template>
  <div id="logMange">
    <div class="searchWord">
      <el-input style="display: inline-block;width: 212px" placeholder="请输入用户名搜索" suffix-icon="el-icon-search" />
    </div>
    <div class="table-container">
      <platSettingTable
        :height="750"
        :border="border"
        :show-operation="showOperation"
        :data="pageResult"
        :columns="filterColumns"
        @findPage="findPage"
        @handleEdit="handleEdit"
      />
    </div>
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
      showOperation: false,
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
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
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
        userName: 'lishanlei',
        realName: '李闪磊',
        time: '2020-04-01 00:00:00',
        platform: '',
        address: '',
        information: ''
      }, {
        userName: 'lishanlei',
        realName: '李闪磊',
        time: '2020-03-01 00:00:00',
        platform: '',
        address: '',
        information: ''
      }, {
        userName: 'lishanlei',
        realName: '李闪磊',
        time: '2020-02-01 00:00:00',
        platform: '',
        address: '',
        information: ''
      }, {
        userName: 'lishanlei',
        realName: '李闪磊',
        time: '2020-01-01 00:00:00',
        platform: '',
        address: '',
        information: ''
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
        { prop: 'userName', label: '用户名', minWidth: 50 },
        { prop: 'realName', label: '用户姓名', minWidth: 50 },
        { prop: 'time', label: '时间', minWidth: 50, sortable: true },
        { prop: 'platform', label: '操作平台', minWidth: 50 },
        { prop: 'address', label: '地址', minWidth: 50 },
        { prop: 'information', label: '信息', minWidth: 50 }
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

  #logMange{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 84px);

    .searchWord{
      display: flex;
      flex-direction: row;
      height: 6vh;
      padding: 8px 15px;
      justify-content: flex-end;
      box-shadow: 0 2px 2px #e4e4e4;
      .el-button{
          height: 36px;
          background-color: #fff;
          color: #005aff;
          text-decoration: underline;
          border: unset;
          font-size: 14px;
          cursor: pointer;
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
      padding: 10px 15px;
    }
  }

</style>
<style lang='scss' scoped>
</style>
