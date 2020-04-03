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

    <!--新增编辑界面-->
    <el-dialog v-dialogDrag :title="operation?'新建职位名称':'编辑职位名称'" width="15%" :visible.sync="dialogVisible" :close-on-click-modal="false" append-to-body class="positionOperation">
      <el-form ref="dataForm" :model="dataForm" label-width="auto" :rules="dataFormRules" label-position="top" :size="size">
        <div class="row row-0">
          <el-form-item v-if="true" label="职位名称" prop="userName">
            <el-input v-model="dataForm.positionName" :disabled="false" auto-complete="请输入职位名称" />
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :size="size" :loading="editLoading" type="primary" @click.native="submitForm">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import departmentTable from '@/views/project/platSetting/core/platSettingTable'
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
      operation: false, // true:新增, false:编辑
      dialogVisible: false, // 编辑界面是否显示
      // 编辑界面数据
      dataForm: {

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
        { prop: 'positionCode', label: '职位编号', minWidth: 30 },
        { prop: 'positionName', label: '职位名称', minWidth: 90 }
      ]
      this.columns = JSON.parse(JSON.stringify(this.columns))
    },
    findPage: function(data) {
      this.tableData = [{
        positionCode: '0',
        positionName: '分公司经理'
      }, {
        positionCode: '1',
        positionName: '总经理'
      }, {
        positionCode: '2',
        positionName: '经理'
      }, {
        positionCode: '3',
        positionName: '总工'
      }, {
        positionCode: '4',
        positionName: '副总工'
      }]
      this.pageResult.content = this.tableData
      this.pageResult.totalSize = this.tableData.length
      data.callback()
    },
    handleEdit: function(params) {
      this.dialogVisible = true
      this.operation = false
      this.dataForm = Object.assign({}, params.row)
    },
    handleDelete: function(data) {
      // 这里暂时只操作界面上的数据，待连接数据库后，应从数据库中删除数据，再调用回调函数更新表格
      this.pageResult.content.splice(data.params, 1)
    },
    handleAdd: function() {
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
      /* margin-left: 29px; */
      /* margin-right: 29px; */
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
      padding: 20px 20px 0 20px;
      .el-form{
          display: flex;
          flex-direction: column;
          .row{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
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
            width: 245px;
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
          width: 100px;
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
