<template>
  <div class="kongya-container">
    <div class="search-container">
      <el-date-picker v-model="searchForm.date" :type="searchForm.dateType" range-separator="-" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" start-placeholder="开始日期" end-placeholder="结束日期" placeholder="选择时间" />
      <el-select v-model="searchForm.interval.label" placeholder="请选择时间间隔" @change="timeSelectChange">
        <el-option v-for="item in intervals" :key="item.value" :label="item.label" :value="{value:item.value, label:item.label}" />
      </el-select>
      <el-button class="btn-query" type="primary" style="margin-right:10px" @click="dateSearch">查询</el-button>
      <el-input v-model="searchForm.searchText" placeholder="请输入系统名称搜索" style="width:212px;" suffix-icon="el-icon-search" />
      <el-button class="btn-search" type="primary" @click="nameSearch">搜索</el-button>
    </div>
    <div class="data-pandect">
      <div class="data-contianer">
        <div
          v-for="item in pandectData"
          :key="item.index"
          class="each-data"
        >
          <div class="data-type">{{ item.type }}</div>
          <div style="margin-bottom: 9px;">
            <span class="data-sumNumber">{{ item.sumNumber }}</span>
            <span class="data-unit">{{ item.unit }}</span>
          </div>
          <div>
            <span style="color:#999999;font-size:12px">同比</span>
            <div :class="item.logo" />
            <span class="data-changeNumber">{{ item.changeNumber }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="line" />

    <div class="table-container">
      <div class="title">
        <div class="logo" />
        <span>数据列表</span>
      </div>
      <div class="table">
        <mainTable
          ref="kongyaMainTable"
          :height="555"
          :border="border"
          :data="pageResult"
          :filterData="filterData"
          @findPage="findPage"
          @handleEdit="handleEdit"
          @handleDelete="handleDelete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MainTable from '@/views/project/smartTable/kongya/mainTable'
import { getKongYaRealData/* , getFilterData */ } from '@/api/smartTable/index.js'
export default {
  name: 'KongYa',
  components: {
    MainTable
  },
  data() {
    return {
      border: false,
      filterData: {
        /* region: [{
          label: '4栋车间',
          value: 'cj4'
        }, {
          label: '2栋车间',
          value: 'cj2'
        }, {
          label: '1#动力站房',
          value: 'dlzf1'
        }, {
          label: '3栋车间',
          value: 'cj3'
        }, {
          label: '1栋车间',
          value: 'cj1'
        }, {
          label: '胶水厂区',
          value: 'cj5'
        }], */
        region: ['4栋车间', '2栋车间', '1#动力站房', '3栋车间', '1栋车间', '胶水厂区'],
        group: [],
        device: [],
        point: []
      },
      pageResult: {
      },
      pageRequest: { pageNum: 1, pageSize: 10 },
      searchForm: {
        date: '',
        dateType: 'datetimerange',
        searchText: '',
        interval: {
          value: 0,
          label: '间隔10分钟'
        }
      },
      intervals: [{
        value: 0,
        label: '间隔10分钟'
      }, {
        value: 1,
        label: '间隔30分钟'
      }, {
        value: 2,
        label: '间隔60分钟'
      }],
      pandectData: [{
        index: 0,
        type: '总供气量',
        sumNumber: 356,
        unit: 'm³',
        logo: 'increase',
        sign: 1,
        changeNumber: '+0.21m³'
      }, {
        index: 1,
        type: '总电耗',
        sumNumber: 1034,
        unit: 'kWh',
        logo: 'increase',
        sign: 1,
        changeNumber: '+0.21kWh'
      }, {
        index: 2,
        type: '总水耗',
        sumNumber: 1.45,
        unit: 'm³',
        logo: 'decrease',
        sign: 1,
        changeNumber: '-0.21m³'
      }, {
        index: 3,
        type: '气电比',
        sumNumber: 25,
        unit: 'm³/kWh',
        logo: 'decrease',
        sign: 1,
        changeNumber: '-0.21m³/kWh'
      }, {
        index: 4,
        type: '高压平均压力',
        sumNumber: 6,
        unit: 'kPa',
        logo: 'decrease',
        sign: 1,
        changeNumber: '-0.21kPa'
      }, {
        index: 5,
        type: '冷却水平均供水温度',
        sumNumber: 36,
        unit: '℃',
        logo: 'decrease',
        sign: 1,
        changeNumber: '-0.21℃'
      }, {
        index: 6,
        type: '冷却水平均回水温度',
        sumNumber: 34,
        unit: '℃',
        logo: 'decrease',
        sign: 1,
        changeNumber: '-0.21℃'
      }]
    }
  },
  mounted() {

  },
  methods: {
    findPage: function(data) {
      if (data !== null) {
        this.pageRequest = data.pageRequest
      }
      this.pageRequest['filterUserName'] = this.searchForm.searchText
      this.pageRequest['startTime'] = (this.searchForm.date === null || this.searchForm.date === '') ? null : this.searchForm.date[0]
      this.pageRequest['endTime'] = (this.searchForm.date === null || this.searchForm.date === '') ? null : this.searchForm.date[1]
      getKongYaRealData(this.pageRequest).then(res => {
        this.pageResult.content = res.dataList
        this.pageResult.totalSize = res.dataListNumber
      }).then(data != null ? data.callback : '')
    },
    handleEdit: function(params) {

    },
    handleDelete: function(params) {

    },
    timeSelectChange(params) {
      this.searchForm.interval = params
    },
    dateSearch: function() {
      this.$refs.kongyaMainTable.refreshPageRequest(this.pageRequest.pageNum)
    },
    nameSearch: function() {
      this.$refs.kongyaMainTable.refreshPageRequest(this.pageRequest.pageNum)
    }
  }
}
</script>
<style lang="scss">
.kongya-container{
  /* background-color: #F0F2F5; */
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
}
</style>

<style lang="scss" scoped>
.kongya-container{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .search-container{
    display: flex;
    flex-direction: row;
    height: 6vh;
    padding: 8px 30px 8px 15px;
    justify-content: flex-end;
    box-shadow: 0 2px 2px #e4e4e4;
  }
  .data-pandect{
    width: 100%;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 135px;
    padding: 26px 0 26px 23px;
    .data-contianer{
      display: flex;
      width: 100%;
      height: 100%;
      .each-data{
        display: flex;
        flex-direction: column;
        width: 240px;
        border-right: 1px solid #F2F5FA;
        .decrease{
          width: 0.5vw;
          height: 0.5vw;
          display: inline-block;
          background-repeat: no-repeat;
          background-image: url('../../../assets/smartTable/down.png')
        }
        .increase{
          width: 0.5vw;
          height: 0.5vw;
          display: inline-block;
          background-repeat: no-repeat;
          background-image: url('../../../assets/smartTable/up.png')
        }
        .data-type{
          color: #333333;
          font-size: 14px;
          margin-bottom: 5px;
        }
        .data-sumNumber{
          color: #111;
          font-size: 32px;
          font-family: MicrosoftYaHeiSemibold;
          font-weight: bold;
        }
        .data-unit{
          color: #111;
          font-size: 14px;
          font-family: PingFangSC-Regular,PingFang SC;
          font-weight: 400;
          margin-left: 8px;
        }
        .data-changeNumber{
          color: #999999;
          font-size: 12px;
        }
      }
      .each-data:last-child{
        border-right:unset;
      }
      .each-data:not(:nth-child(1)){
        margin-left: 17px;
      }
    }
  }
  .line{
    width: 100%;
    height: 10px;
    background:rgba(240,242,245,1);
    border:1px solid #E2E4EA;
  }

  .table-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
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
    }
    .table{
      width: 100%;
      height: 100%;
      padding: 10px 20px;
    }
  }

}
</style>

