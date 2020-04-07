<!--  -->
<template>
  <div id="dutyMange">
    <div class="searchWord">
      <el-button class="btn-new" type="primary" @click="handleAdd">新建值班</el-button>
      <div class="search-condition">
        <el-date-picker v-model="searchForm.date" :type="searchForm.dateType" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="display: inline-block;" placeholder="选择时间" suffix-icon="el-icon-search" />
        <el-button class="btn-query" type="primary" style="margin-right:10px" @click="dateSearch">查询</el-button>
        <el-input v-model="searchForm.searchText" placeholder="请输入值班人员姓名搜索" style="width:212px;" suffix-icon="el-icon-search" />
        <el-button class="btn-search" type="primary" @click="nameSearch">搜索</el-button>
        <el-button class="btn-export" @click="onExport">导出</el-button>
      </div>
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

    <!--新增编辑界面-->
    <el-dialog v-dialogDrag :title="operation?'新建值班信息':'修改值班信息'" width="40%" :visible.sync="dialogVisible" :close-on-click-modal="false" class="dutyDialog">
      <el-form ref="dataForm" :model="dataForm" label-width="auto" :rules="dataFormRules" label-position="top">
        <div class="row row-0">
          <el-form-item v-if="true" label="值班领导" prop="dutyLeader">
            <el-input v-model="dataForm.dutyLeader" :disabled="false" auto-complete="请输入值班领导" />
          </el-form-item>
          <el-form-item v-if="true" label="值班人员" prop="dutyMember">
            <el-input v-model="dataForm.dutyMember" :disabled="false" auto-complete="请输入值班人员" />
          </el-form-item>
          <el-form-item v-if="true" label="值班类型" prop="dutyType">
            <el-select v-model="dataForm.dutyType" placeholder="请选择值班类型" style="width: 100%;">
              <el-option v-for="item in dutyTypes" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </div>
        <div class="row row-1" style="width:100%">
          <el-form-item v-if="true" label="值班内容" prop="dutyContent" style="width:100%">
            <el-input v-model="dataForm.dutyContent" type="textarea" maxlength="100" show-word-limit :disabled="false" auto-complete="请输入值班内容" />
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :loading="editLoading" type="primary" @click.native="submitForm('dataForm')">提交</el-button>
        <el-button @click.native="resetForm('dataForm')">重置</el-button>
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
      showOperation: true,
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
        dutyLeader: [
          { required: true, message: '请输入值班领导', trigger: 'blur' }
        ],
        dutyMember: [
          { required: true, message: '请选择值班人员', trigger: 'change' }
        ],
        dutyType: [
          { required: true, message: '请选择值班类型', trigger: 'change' }
        ]
      },
      searchForm: {
        type: 'daterange',
        date: '',
        dateType: 'daterange',
        searchText: ''
      },
      // 新增编辑界面数据
      dataForm: {
        dutyLeader: null,
        dutyType: null,
        dutyMember: null,
        dutyContent: null,
        dutyTime: null
      },
      tableData: [{
        dutyLeader: 'lishanlei',
        dutyType: '早班',
        dutyMember: '',
        dutyContent: '',
        dutyTime: '2020-04-01 00:00:00'
      }, {
        dutyLeader: 'lishanlei',
        dutyType: '早班',
        dutyMember: '',
        dutyContent: '',
        dutyTime: '2020-04-01 00:00:00'
      }, {
        dutyLeader: 'lishanlei',
        dutyType: '早班',
        dutyMember: '',
        dutyContent: '',
        dutyTime: '2020-04-01 00:00:00'
      }, {
        dutyLeader: 'lishanlei',
        dutyType: '早班',
        dutyMember: '',
        dutyContent: '',
        dutyTime: '2020-04-01 00:00:00'
      }],
      dutyTypes: []
    }
  },
  computed: {

  },
  mounted() {
    this.initColumns()
  },
  methods: {
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
    initColumns: function() {
      this.columns = [
        { prop: 'dutyLeader', label: '值班领导', minWidth: 50 },
        { prop: 'dutyType', label: '值班类型', minWidth: 50 },
        { prop: 'dutyMember', label: '值班人员', minWidth: 100 },
        { prop: 'dutyContent', label: '值班内容', minWidth: 100 },
        { prop: 'dutyTime', label: '值班时间', minWidth: 50 }
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
      this.findUserRoles()
      this.pageResult.content = this.tableData
      this.pageResult.totalSize = this.tableData.length
      data.callback()
    },
    findUserRoles: function() {
      this.dutyTypes = [{
        value: '0',
        label: '早班'
      }, {
        value: '1',
        label: '午班'
      }, {
        value: '2',
        label: '晚班'
      }]
    },
    handleAdd: function() {
      this.dialogVisible = true
      this.operation = true
      this.dataForm = {}
    },
    handleEdit: function(params) {
      this.dialogVisible = true
      this.operation = false
      this.dataForm = Object.assign({}, params.row)
    },
    dateSearch: function() {

    },
    nameSearch: function() {

    },
    onExport: function() {

    }
  }
}
</script>

<style lang="scss">
  .table-header,
  .table-header th {
    background-color: #F1F4FD !important;
  }

  #dutyMange{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 84px);

    .searchWord{
      display: flex;
      flex-direction: row;
      height: 6vh;
      padding: 8px 30px 8px 15px;
      justify-content: space-between;
      box-shadow: 0 2px 2px #e4e4e4;
      .btn-new{
        width:96px;
        height:32px;
        background-color: rgba(45,73,255,1);
        border: unset;
        font-size: 14px;
        cursor: pointer;
        margin-left: 15px;
      }
      .search-condition{
          display: flex;
          flex-direction: row;
          .el-date-editor--daterange.el-input__inner {
            width: 242px;
            height: 32px;
          }
          .btn-export{
              color: #666C83;
              font-size: 14px;
              border:1px solid rgba(197,200,213,1);
              background-color: #fff;
              width:96px;
              height:32px;
          }
          .btn-search,.btn-query{
            width:96px;
            height:32px;
            background-color: rgba(45,73,255,1);
            color: #FFF;
            border: unset;
            font-size: 14px;
            cursor: pointer;
            margin-left: 10px;
            }
            .el-input__inner{
                background: #FFF;
                border: 1px solid #E2E4EA;
                border-radius: 4px;
                height: 32px;
            }
      }
    }
    .table-container{
      width: 100%;
      height: 100%;
      padding: 20px 29px;
      background: rgba(244,245,248,1);
    }
    .dutyDialog{
      .el-dialog__header{
        height: 42px;
        padding: 10px 20px 20px 20px;
        background:rgba(249,249,251,1);
        border-radius:8px 8px 0px 0px;
        border:1px solid rgba(228,233,240,1);
        .el-dialog__title{
          color: #41475D;
          font-size: 14px;
        }
        .el-dialog__headerbtn{
          top: 10px;
          .el-dialog__close{
            color:  #858B9C;
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
          }
          .el-input{
            height: 38px;
            .el-input__inner{
              background: rgba(245,247,250,1);
              border-radius: 4px;
              border: 1px solid rgba(207,216,230,1);
              color: #111A34;
              font-size: 14px;
            }
          }
          .el-textarea__inner{
                background:rgba(245,247,250,1);
                border-radius:2px;
                border:1px solid rgba(207,216,230,1);
            }
            .el-textarea .el-input__count{
                background:rgba(245,247,250,1);
            }
        }
      }
      .el-dialog__footer{
        background-color: #F9FAFB;
        padding-top: 0px;
        text-align: center;
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
