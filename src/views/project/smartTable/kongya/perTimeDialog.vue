<template>
  <div class="dialog-container">
    <el-dialog
      v-dialogDrag
      :title="title"
      :variable="variable"
      width="70%"
      top="8vh"
      :visible.sync="visible"
      :show="show"
      custom-class="pertime-dialog"
      @close="closeDialog"
    >
      <div class="search-container">
        <div class="tabs-container">
          <div :class="{'active':curveActive}" class="tab tab-dealing" data-id="curveActive" @click="handleTabClick">逐时趋势</div>
          <div :class="{'active':tableActive}" class="tab tab-dealed" data-id="tableActive" @click="handleTabClick">逐时数据</div>
        </div>
        <el-date-picker v-model="searchForm.date" :type="searchForm.dateType" range-separator="-" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" start-placeholder="开始日期" end-placeholder="结束日期" placeholder="选择时间" style="width: 300px;" />
        <el-select v-model="searchForm.interval.label" placeholder="请选择时间间隔" style="width:150px;" @change="timeSelectChange">
          <el-option v-for="item in intervals" :key="item.value" :label="item.label" :value="{value:item.value, label:item.label}" />
        </el-select>
        <el-button class="btn-query" type="primary" style="margin-right:10px" @click="dateSearch">查询</el-button>
        <el-input v-show="table" v-model="searchForm.searchText" placeholder="请输入搜索内容" style="width:150px;" suffix-icon="el-icon-search" />
        <el-button v-show="table" class="btn-search" type="primary" @click="nameSearch">搜索</el-button>
        <el-button v-show="table" class="btn-export" @click="onExport">导出</el-button>
      </div>

      <div class="graphic-container">
        <CurveChart
          v-show="curve"
          ref="curveChart"
          :chart-data="lineChartData"
        />
        <TableChart
          v-show="table"
          ref="tableChart"
          height="95%"
          :border="border"
          :data="pageResult"
          @findPage="findPage"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import CurveChart from '@/views/project/smartTable/kongya/pertimeChart/curveChart'
import TableChart from '@/views/project/smartTable/kongya/pertimeChart/tableChart'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'Pertime',
  components: {
    CurveChart,
    TableChart
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '历史数据'
    },
    variable: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      curveActive: true,
      tableActive: false,
      curve: true,
      table: false,
      visible: this.show,
      border: false,
      searchForm: {
        date: ['', ''],
        dateType: 'datetimerange',
        searchText: '',
        interval: {
          value: 2,
          label: '60分钟'
        }
      },
      intervals: [{
        value: 0,
        label: '1分钟'
      }, {
        value: 1,
        label: '10分钟'
      }, {
        value: 2,
        label: '60分钟'
      }],
      pageResult: {
      },
      pageRequest: { pageNum: 1, pageSize: 10 }
    }
  },
  watch: {
    show() {
      this.visible = this.show
    },
    variable() {
      this.getTableData()
    }
  },
  methods: {
    getTableData: function() {
    },
    timeSelectChange(params) {
      this.searchForm.interval = params
    },
    templateSelectChange(params) {
      this.template = params
    },
    dateSearch: function() {
      this.$refs.historyTable.refreshPageRequest(this.pageRequest.pageNum)
    },
    nameSearch: function() {
      this.$refs.historyTable.refreshPageRequest(this.pageRequest.pageNum)
    },
    onExport: function() {
    },
    closeDialog: function() {
      this.$emit('pertimeDialogClose')
    },
    handleTabClick(e) {
      var currentId = e.currentTarget.dataset.id
      switch (currentId) {
        case 'curveActive':
          this.curveActive = true
          this.tableActive = false
          this.curve = true
          this.table = false
          break
        case 'tableActive':
          this.curveActive = false
          this.tableActive = true
          this.curve = false
          this.table = true
          break
        default:
      }
    },
    findPage: function(data) {
      if (data !== null) {
        this.pageRequest = data.pageRequest
      }
      this.pageRequest['filterUserName'] = this.searchForm.searchText
      this.pageRequest['startTime'] = (this.searchForm.date === null || this.searchForm.date === '') ? null : this.searchForm.date[0]
      this.pageRequest['endTime'] = (this.searchForm.date === null || this.searchForm.date === '') ? null : this.searchForm.date[1]
      data.callback()
    }
  }
}
</script>

<style lang="scss">
.dialog-container{
  .pertime-dialog{
    .search-container{
      .el-button{
        height: 36px;
        margin-left: 10px;
        background-color: #2D49FF;
        border: unset;
        width: 80px;
        }
        .el-select{
        margin-left: 10px;
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
        padding: unset;
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

<style lang="scss" scoped>
.dialog-container{
    .pertime-dialog{
        .search-container{
            display: flex;
            justify-content: flex-end;
            padding: 10px 20px;
            box-shadow: 0px 5px 5px #ddd;
            .tabs-container{
              display: flex;
              flex-direction: row;
              position: absolute;
              left: 0;
              margin-left: 20px;
              .tab{
                width: 100px;
                line-height: 38px;
                text-align: center;
                cursor: pointer;
                color: #666F83;
              }
              .tab.active{
                color:#1890ff ;
                border-bottom: 2px solid #1890ff;
                background-color: #E2E4EA;
              }
            }
            .btn-export{
                color: #666C83;
                font-size: 14px;
                border:1px solid rgba(197,200,213,1);
                background-color: #fff;
            }
        }

        .graphic-container{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 750px;
            padding: 10px 20px;
            .title{
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            flex-shrink: 1;
            height: 60px;
            .logo{
                width: 2px;
                height: 16px;
                //background-image: linear-gradient(180deg, #4928D4 0%, #3418AB 100%);
                background-color: #4A62F5;
                margin-left: 1vw;
                margin-top: 0.8vw;
                margin-right: 0.5vw;
            }
            span {
                margin-top: 14px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                font-size: 16px;
                color: #111111;
                letter-spacing: 0;
            }
            .title-right{
                position: absolute;
                right: 20px;
                margin-top: 10px;
            }
            }
            .table{
            width: 100%;
            height: 100%;
            padding: 10px 20px;
            }
        }
    }
}
</style>
