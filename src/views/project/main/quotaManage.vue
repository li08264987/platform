<template>
  <div class="quota-manage">
    <div class="first-row" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>{{ title }}限额管理</span>
      </div>
    </div>

    <!-- <div class="radio-container">
      <el-radio-group ref="operationGroup" v-model="systems.defaultSystemCode" class="operation-group" @change="radioChange">
        <el-radio-button
          v-for="item in systems.systemsRadio"
          :key="item.systemCode"
          :label="item.systemCode"
        >
          {{ item.systemName }}
        </el-radio-button>
      </el-radio-group>
    </div> -->

    <div
      v-loading="loading"
      class="operation-table"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.5)"
    >
      <QuotaBar
        id="quotaChart-container"
        class="quotaChart-container"
        height="100%"
        width="80%"
        :chart-data="quotaChartData"
      />
      <div class="value-container">
        <div>{{ quotaType.nengxiao }}</div>
        <div>{{ quotaType.chanqi }}</div>
        <div>{{ quotaType.dianhao }}</div>
        <div>{{ quotaType.nengfei }}</div>
      </div>
    </div>

  </div>
</template>

<script>
import QuotaBar from './echart/quotaBar'
/* import { getQuotaManageData } from '@/api/main/quotaManage' */
import { getProcessData } from '@/api/energy/statis'
export default {
  name: 'OperationWatch',
  components: { QuotaBar },
  data() {
    return {
      quotaChartData: {
        data: null
      },
      loading: false,
      quotaType: {
        nengxiao: '0%',
        chanqi: '0%',
        dianhao: '0%',
        nengfei: '0%'
      }
    }
  },
  computed: {
    currentView() {
      return this.$store.state.settings.currentView.value
    },
    mainTimeType() {
      return this.$store.state.settings.mainTimeType
    },
    title() {
      var title = ''
      var currentView = this.$store.state.settings.currentView.value
      switch (currentView) {
        case 'ky':
          title = '空压'
          break
        case 'qd':
          title = '氢氮'
          break
        case 'zk':
          title = '真空'
          break
        case 'dl':
          title = '电力'
          break
        default:
      }
      return title
    }
  },
  watch: {
    currentView: function(values) {
      /* var timetype = this.$store.state.settings.mainTimeType
      var param = { sysCode: values, timeType: timetype }
      this.getQuotaManageData(param) */
      this.initQuotaManageData()
    },
    mainTimeType: function(params) {
      /* var system = this.$store.state.settings.currentView.value
      var param = { sysCode: system, timeType: params }
      this.getQuotaManageData(param) */
      this.initQuotaManageData()
    }
  },
  mounted() {
    this.initQuotaManageData()
  },

  methods: {
    getBeforeDate: function(days) {
      var n = days
      var d = new Date()
      var year = d.getFullYear()
      var mon = d.getMonth() + 1
      var day = d.getDate()
      if (day <= n) {
        if (mon > 1) {
          mon = mon - 1
        } else {
          year = year - 1
          mon = 12
        }
      }
      d.setDate(d.getDate() - n)
      year = d.getFullYear()
      mon = d.getMonth() + 1
      day = d.getDate()
      var s = year + '-' + (mon < 10 ? ('0' + mon) : mon) + '-' + (day < 10 ? ('0' + day) : day)
      return s
    },
    getCurrentDate: function(format) {
      var now = new Date()
      var year = now.getFullYear()
      var month = now.getMonth()
      var date = now.getDate()
      var hour = now.getHours()
      var minu = now.getMinutes()
      var sec = now.getSeconds()
      month = month + 1
      if (month < 10) month = '0' + month
      if (date < 10) date = '0' + date
      if (hour < 10) hour = '0' + hour
      if (minu < 10) minu = '0' + minu
      if (sec < 10) sec = '0' + sec
      var time = ''

      if (format === 1) {
        time = year + '-' + month + '-' + date
      } else if (format === 2) {
        time = year + '-' + month + '-' + date + ' ' + hour + ':' + minu + ':' + sec
      }
      return time
    },
    initQuotaManageData: function() {
      var timeType = this.$store.state.settings.mainTimeType
      var startTime = ''
      var endTime = this.getCurrentDate(2)
      switch (timeType) {
        case 'day':
          /* startTime = this.getCurrentDate(1) + ' 00:00:00' */
          endTime = ''
          break
        case 'week':
          startTime = this.getBeforeDate(7) + ' 00:00:00'
          break
        case 'month':
          startTime = this.getBeforeDate(30) + ' 00:00:00'
          break
        default:
      }
      var param = {
        sys: this.$store.state.settings.currentView.value,
        startTime: startTime,
        endTime: endTime
      }
      this.loading = true
      getProcessData(param).then((res) => {
        var dataArray = new Array(4)
        var data = res.data
        if (data !== null) {
          for (var item in data) {
            switch (item) {
              case 'chanqi':
                dataArray[2] = data[item].total === 0 ? 0 : (data[item].used / data[item].total * 100).toFixed(2)
                this.quotaType.chanqi = dataArray[2] + '%'
                break
              case 'nengfei':
                dataArray[0] = data[item].total === 0 ? 0 : (data[item].used / data[item].total * 100).toFixed(2)
                this.quotaType.nengfei = dataArray[0] + '%'
                break
              case 'nenghao':
                dataArray[1] = data[item].total === 0 ? 0 : (data[item].used / data[item].total * 100).toFixed(2)
                this.quotaType.dianhao = dataArray[1] + '%'
                break
              case 'nengxiao':
                dataArray[3] = data[item].total === 0 ? 0 : (data[item].used / data[item].total * 100).toFixed(2)
                this.quotaType.nengxiao = dataArray[3] + '%'
                break
              default:
            }
          }
        }
        this.quotaChartData.data = dataArray
        this.loading = false
      }).catch(err => {
        console.log(err)
        this.loading = false
      })
    }
  }
}
</script>

<style lang='scss'>
.quota-manage {
  .first-row{
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    height: 1.9vw;
    .title{
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      flex-shrink: 1;
      height: 100%;
      .logo{
          width: 0.2vw;
          height: 1vw;
          background-image: linear-gradient(180deg, #4928D4 0%, #3418AB 100%);
          margin-left: 1vw;
          margin-top: 0.8vw;
          margin-right: 0.5vw;
      }
      span {
        margin-top: 0.9vw;
        font-family: MicrosoftYaHeiUISemibold;
        font-size: 0.98vw;
        color: #C8D6FE;
        letter-spacing: 0;
        line-height:0.8vw;
      }
    }
  }

  .radio-container{
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
    height: 2.9vw;
  }
  .operation-group{
    margin-top: 1vw;
    margin-left: 0.8vw;
    position: relative;
    border: unset;
    .el-radio-button__inner{
      color: #B5BFF6;
      background-color: rgba(0,0,0,0);
      border-top: 1px solid #243B9E;
      border-bottom: 1px solid #243B9E;
      border-right:1px solid #243B9E;
      height: 1.9vw;
      /* width: 5vw; */
      line-height: 0.9vw;
      padding: 0.5vw 1vw;
      font-size: 0.75vw;
    }
    .el-radio-button:first-child .el-radio-button__inner{
      border-left:1px solid #243B9E;
    }
    .el-radio-button__orig-radio:checked+.el-radio-button__inner{
      background-image: linear-gradient(132deg, #602FE9, #2F54EB);
      background-color: transparent;
    }
  }

  .operation-table{
    flex-shrink: 1;
    flex-grow: 1;
    width: 100%;
    height: 0;
    padding: 0 1vw;
    display: flex;
    flex-direction: row;
    .value-container{
      color: #C8D6FE;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    .el-table{
        background-color:transparent;
        width: 100%;
        height: 85%;
        border-color: #243B9E;
      }
      .el-table__body-wrapper{
        overflow: auto;
        height: 110%;
      }
      .el-table__body-wrapper::-webkit-scrollbar{
        width: 3px;
        background-color:  #243B9E;
      }
      .el-table__body-wrapper::-webkit-scrollbar-thumb{
        border-radius: 3px;
        background-image: linear-gradient(180deg, #3656DD 0%, #243B9E 100%);
        height: 50px;
      }
      .el-table__body-wrapper::-webkit-scrollbar-track{
        box-shadow: inset 0 0 5px rgba($color: #000000, $alpha: 0.2);
        border-radius: 3px;
      }
      .el-table--border{
        border-left: none;
      }
      .el-table--border::after, .el-table--group::after, .el-table::before{
        background-color:unset;
      }
      .el-table tr{
          border-color: #243B9E;
      }
      .el-table td{
        padding: 0.4vw 0;
        height: 2.5vw;
        border-color: #243B9E;
      }

      .el-table tr, .el-table .el-table_1_column_1{
        background-color:rgba(47,84,235,0.16);
        color:  #9FA8DA;
        font-size: 0.85vw;
      }
      .el-table tbody tr td:last-child{
        border-color: #243B9E;
        background-color:transparent;
        color:  #fff;
        font-size: 1.2vw;
      }

      .el-table__body tr:hover > td {
        background-color:unset !important;
      }
    }
}
</style>
<style lang="scss" scoped>
#left-container .quota-manage{
    display: flex;
    flex-direction: column;
    position: relative;
    background: rgba(52,24,171,0.20);
    border: 1px solid #3418AB;
    box-shadow: inset 0 1px 33px 0 rgba(52,24,171,0.50);
    border-radius: 4px;
    width: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    height: 0;
    margin-top: 1vw;
}
</style>
