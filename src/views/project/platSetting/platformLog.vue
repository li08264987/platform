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
        :columns="columns"
        @findPage="findPage"
      />
    </div>
  </div>
</template>

<script>
import platSettingTable from '@/views/project/platSetting/core/platSettingTable'
import { getLogList } from '@/api/platSetting/logManage'
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
      pageRequest: { pageNum: 1, pageSize: 10 },
      pageResult: {},
      operation: false, // true:新增, false:编辑
      dialogVisible: false, // 新增编辑界面是否显示
      editLoading: false
      /* dataFormRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ]
      },
      // 新增编辑界面数据
      dataForm: {
        USER_NAME: 0,
        REAL_NAME: '',
        TIME: '',
        PHONE_TYPE: '',
        ADDRESS: '',
        INFOR: ''
      },
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
      }] */
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
        { prop: 'USER_NAME', label: '用户名', minWidth: 50, show: true },
        { prop: 'REAL_NAME', label: '用户姓名', minWidth: 50, show: true },
        { prop: 'TIME', label: '时间', minWidth: 50, sortable: true, show: true },
        { prop: 'PHONE_TYPE', label: '操作平台', minWidth: 50, show: true },
        { prop: 'ADDRESS', label: '地址', minWidth: 50, show: true },
        { prop: 'INFOR', label: '信息', minWidth: 50, show: true }
      ]
    },
    // 获取分页数据
    findPage: function(data) {
      if (data !== null) {
        this.pageRequest = data.pageRequest
      }
      this.pageRequest['filterUserName'] = this.filters.name
      getLogList(this.pageRequest).then((res) => {
        this.pageResult.content = res.logList
        this.pageResult.totalSize = res.logListNumber
        // this.findUserRoles()
      }).then(data != null ? data.callback : '')
    },
    findUserRoles: function() {
      this.$api.role.findAll().then((res) => {
        this.roles = res.data
      })
    }
    // handleEdit: function(params) {
    //   this.dialogVisible = true
    //   this.operation = false
    //   this.dataForm = Object.assign({}, params.row)
    //   this.$nextTick(() => {
    //     this.$refs['dataForm'].clearValidate()
    //   })
    // }
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
  }

</style>
<style lang='scss' scoped>
</style>
