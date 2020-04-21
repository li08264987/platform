
<template>
  <div id="dutyMange">
    <div class="searchWord">
      <el-button class="btn-new" type="primary" @click="handleAdd">新建值班</el-button>
      <div class="search-condition">
        <el-date-picker v-model="searchForm.date" :type="searchForm.dateType" range-separator="至" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" start-placeholder="开始日期" end-placeholder="结束日期" style="display: inline-block;" placeholder="选择时间" suffix-icon="el-icon-search" />
        <el-button class="btn-query" type="primary" style="margin-right:10px" @click="dateSearch">查询</el-button>
        <el-input v-model="searchForm.searchText" placeholder="请输入值班人员姓名搜索" style="width:212px;" suffix-icon="el-icon-search" />
        <el-button class="btn-search" type="primary" @click="nameSearch">搜索</el-button>
        <el-button class="btn-export" @click="onExport">导出</el-button>
      </div>
    </div>
    <div class="table-container">
      <platSettingTable
        ref="dutyTable"
        :height="750"
        :border="border"
        :show-operation="showOperation"
        :data="pageResult"
        :columns="columns"
        @findPage="findPage"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
      />
    </div>

    <el-dialog v-dialogDrag :title="operation?'新建值班信息':'修改值班信息'" width="40%" :visible.sync="dialogVisible" :close-on-click-modal="false" class="dutyDialog">
      <el-form ref="dataForm" :model="dataForm" label-width="auto" :rules="dataFormRules" label-position="top">
        <div class="row row-0">
          <el-form-item v-if="true" label="值班领导" prop="LEADER_USER_NAME">
            <el-autocomplete v-model="dataForm.LEADER_USER_NAME" :disabled="false" :fetch-suggestions="queryLeaderSearchAsync" :trigger-on-focus="false" auto-complete="请输入值班领导" @select="leaderSelect" />
          </el-form-item>
          <el-form-item v-if="true" label="值班人员" prop="DUTY_UER_NAME">
            <el-autocomplete v-model="dataForm.DUTY_UER_NAME" :disabled="false" :fetch-suggestions="queryDutyMemberSearchAsync" :trigger-on-focus="false" auto-complete="请输入值班人员" @select="dutyMemberSelect" />
          </el-form-item>
          <el-form-item v-if="true" label="值班类型" prop="DUTY_TYPE">
            <el-select v-model="dataForm.DUTY_TYPE_NAME" placeholder="请选择值班类型" style="width: 100%;" @change="selectChanged">
              <el-option v-for="item in dutyTypes" :key="item.value" :label="item.label" :value="{value:item.value,label:item.label}" />
            </el-select>
          </el-form-item>
          <el-form-item v-if="true" label="系统" prop="SYSTEMNAME">
            <el-select v-model="dataForm.SYSTEMNAME" placeholder="请选择系统" style="width: 100%;" @change="systemSelect">
              <el-option v-for="item in systemSuggestion" :key="item.DEVICE_CODE" :label="item.value" :value="{value:item.DEVICE_CODE,label:item.value}" />
            </el-select>
          </el-form-item>
        </div>
        <div class="row row-1" style="width:100%">
          <el-form-item v-if="true" label="值班内容" prop="CONTENT" style="width:100%">
            <el-input v-model="dataForm.CONTENT" type="textarea" maxlength="100" show-word-limit :disabled="false" auto-complete="请输入值班内容" />
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :loading="editLoading" type="primary" @click="dialogStatus==='create'?createData():updateData('dataForm')">提交</el-button>
        <el-button @click="resetForm('dataForm')">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import platSettingTable from '@/views/project/platSetting/core/platSettingTable'
import { getDutyList, createDuty, updateDuty, deleteDuty, searchDutyUser, searchSystem, fetchAllData } from '@/api/platSetting/dutyManage'
import { parseTime } from '@/utils/index.js'
export default {
  components: {
    platSettingTable
  },
  data() {
    return {
      showOperation: true,
      border: true,
      columns: [],
      pageRequest: { pageNum: 1, pageSize: 10 },
      pageResult: {},
      operation: false,
      dialogVisible: false,
      editLoading: false,
      dialogStatus: '',
      dataFormRules: {
        LEADER_USER_NAME: [
          { required: true, message: '请输入值班领导', trigger: 'blur' }
        ],
        DUTY_UER_NAME: [
          { required: true, message: '请选择值班人员', trigger: 'change' }
        ],
        DUTY_TYPE: [
          { required: true, message: '请选择值班类型', trigger: 'change' }
        ]
      },
      searchForm: {
        date: '',
        dateType: 'datetimerange',
        searchText: ''
      },
      // 新增编辑界面数据
      dataForm: {
        CODE: null,
        LEADER_USER: null,
        LEADER_USER_NAME: null,
        DUTY_TYPE: null,
        DUTY_TYPE_NAME: null,
        DUTY_UER: null,
        DUTY_UER_NAME: null,
        CONTENT: null,
        SYSTEMCODE: null,
        SYSTEMNAME: null,
        SUMMIT_TIME: null
      },
      dutyTypes: [{
        value: '0',
        label: '早班'
      }, {
        value: '1',
        label: '午班'
      }, {
        value: '2',
        label: '晚班'
      }],
      dutyUserSuggestion: [],
      systemSuggestion: [],
      downloadLoading: false,
      allPagesData: null
    }
  },
  computed: {

  },
  mounted() {
    this.initColumns()
    this.searchInputLeader()
    this.searchInputSystem()
  },
  methods: {
    searchInputLeader() {
      searchDutyUser().then((res) => {
        this.dutyUserSuggestion = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    searchInputSystem() {
      searchSystem().then((res) => {
        this.systemSuggestion = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    leaderSelect(item) {
      this.dataForm.LEADER_USER = item.USER_NAME
      this.dataForm.LEADER_USER_NAME = item.value
    },
    queryLeaderSearchAsync(queryString, cb) {
      var dutyUserSuggestion = this.dutyUserSuggestion
      var result = queryString ? dutyUserSuggestion.filter(this.createStateFilter(queryString)) : dutyUserSuggestion
      cb(result)
    },
    dutyMemberSelect(item) {
      this.dataForm.DUTY_UER = item.USER_NAME
      this.dataForm.DUTY_UER_NAME = item.value
    },
    queryDutyMemberSearchAsync(queryString, cb) {
      var dutyUserSuggestion = this.dutyUserSuggestion
      var result = queryString ? dutyUserSuggestion.filter(this.createStateFilter(queryString)) : dutyUserSuggestion
      cb(result)
    },
    systemSelect(item) {
      this.dataForm.SYSTEMCODE = item.value
      this.dataForm.SYSTEMNAME = item.label
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.indexOf(queryString) === 0)
      }
    },
    selectChanged(params) {
      const { value, label } = params
      this.dataForm.DUTY_TYPE = value
      this.dataForm.DUTY_TYPE_NAME = label
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const nowTime = parseTime(new Date())
          this.dataForm.SUMMIT_TIME = nowTime
          createDuty(this.dataForm).then((res) => {
            this.dataForm.CODE = res.newID
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
          const nowTime = parseTime(new Date())
          this.dataForm.SUMMIT_TIME = nowTime
          updateDuty(this.dataForm).then(res => {
            const index = this.pageResult.content.findIndex(v => v.CODE === this.dataForm.CODE)
            this.pageResult.content.splice(index, 1, this.dataForm)
            this.dialogVisible = false
            this.$notify({
              title: '成功',
              message: '更新值班成功',
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
    initColumns: function() {
      this.columns = [
        { prop: 'CODE', label: '编号', minWidth: 50, show: false },
        { prop: 'LEADER_USER', label: '值班领导', minWidth: 50, show: false },
        { prop: 'LEADER_USER_NAME', label: '值班领导', minWidth: 50, show: true },
        { prop: 'DUTY_TYPE', label: '值班类型', minWidth: 50, show: false },
        { prop: 'DUTY_TYPE_NAME', label: '值班类型', minWidth: 50, show: true },
        { prop: 'DUTY_UER', label: '值班人员', minWidth: 100, show: false },
        { prop: 'DUTY_UER_NAME', label: '值班人员', minWidth: 100, show: true },
        { prop: 'CONTENT', label: '值班内容', minWidth: 100, show: true },
        { prop: 'SYSTEMNAME', label: '值班系统', minWidth: 100, show: true },
        { prop: 'SUMMIT_TIME', label: '值班时间', minWidth: 50, show: true }
      ]
    },
    findPage: function(data) {
      if (data !== null) {
        this.pageRequest = data.pageRequest
      }
      this.pageRequest['filterUserName'] = this.searchForm.searchText
      this.pageRequest['startTime'] = this.searchForm.date === null ? null : this.searchForm.date[0]
      this.pageRequest['endTime'] = this.searchForm.date === null ? null : this.searchForm.date[1]
      getDutyList(this.pageRequest).then(res => {
        this.pageResult.content = res.dutyList
        this.pageResult.totalSize = res.dutyListNumber
      }).then(data != null ? data.callback : '')
    },
    handleAdd: function() {
      this.dialogStatus = 'create'
      this.dialogVisible = true
      this.operation = true
      this.dataForm = {}
    },
    handleDelete: function(params) {
      deleteDuty(params.rowInfor.row).then((res) => {
        this.pageResult.content.splice(params.rowInfor.index, 1)
        this.pageResult.totalSize -= 1
        params.callback(res)
      }).catch(err => {
        console.log(err)
      })
    },
    handleEdit: function(params) {
      this.dialogStatus = 'edit'
      this.dialogVisible = true
      this.operation = false
      this.dataForm = Object.assign({}, params.row)
    },
    dateSearch: function() {
      this.$refs.dutyTable.refreshPageRequest(this.pageRequest.pageNum)
    },
    nameSearch: function() {
      this.$refs.dutyTable.refreshPageRequest(this.pageRequest.pageNum)
    },
    onExport: function() {
      const param = {
        filterUserName: this.searchForm.searchText,
        startTime: this.searchForm.date === null ? null : this.searchForm.date[0],
        endTime: this.searchForm.date === null ? null : this.searchForm.date[1]
      }
      fetchAllData(param).then((res) => {
        this.downloadLoading = true
        this.allPagesData = res.dutyList
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = [
            '值班领导',
            '值班类型',
            '值班人员',
            '值班内容',
            '值班系统',
            '值班时间']
          const filterVal = ['LEADER_USER_NAME', 'DUTY_TYPE_NAME', 'DUTY_UER_NAME', 'CONTENT', 'SYSTEMNAME', 'SUMMIT_TIME']
          const data = this.formatJson(filterVal)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: '值班数据表'
          })
          this.downloadLoading = false
        })
      }).catch(err => {
        console.log(err)
      })
    },
    formatJson(filterVal) {
      return this.allPagesData.map(v => filterVal.map(j => {
        return v[j]
      }))
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
