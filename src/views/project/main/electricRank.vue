<template>
  <div class="dianli-consumer">
    <div class="first-rows" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>累计{{ title }}排名</span>
      </div>
      <el-select v-model="energySelect.selectedTime.label" :popper-append-to-body="false" placeholder="请选择" class="energy-select" @change="changeMethod">
        <el-option
          v-for="item in energySelect.energyTimeTypes"
          :key="item.value"
          :label="item.label"
          :value="{value: item.value, label: item.label}"
        />
      </el-select>
    </div>

    <div class="second-row">
      <!-- <div class="radio-container">
        <el-radio-group v-model="radio.system.defaultSystemCode" class="dianli-group" :disabled="radioDisabled" @change="systemRadioChange">
          <el-radio-button
            v-for="item in radio.system.data"
            :key="item.systemCode"
            :label="item.systemCode"
          >
            {{ item.systemName }}
          </el-radio-button>
        </el-radio-group>
      </div> -->

      <!-- <div class="sum-row">
        <span><label>总能耗(kwh)：</label><strong>{{ radio.system.sumEnergy }}</strong></span>
      </div> -->
      <div class="table-demo">
        <el-table
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.5)"
          :data="tableData"
          :header-cell-style="headerStyle"
          :span-method="arraySpanMethod"
          border
          style="width: 100%"
          tooltip-effect="dark"
        >
          <el-table-column prop="rank" label="排名" min-width="20" align="center" />
          <el-table-column prop="cheJianName" label="车间名称" min-width="30" align="center" />
          <el-table-column prop="consumer" :label="thirdColumnName" min-width="30" align="center" />
          <el-table-column prop="level" :label="forthColumnName" min-width="30" align="center">
            <template slot-scope="scope">
              <div v-html="scope.row.levelValue" />
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchSystem, fetchRegion, getTableDataBySystem, getTableDataByRegion } from '@/api/main/energyConsumptionRank'
export default {
  name: 'ElectricRank',
  data() {
    return {
      radio: {
        system: {
          data: [{
            systemCode: 'ky',
            systemName: '空压系统'
          }, {
            systemCode: 'qd',
            systemName: '氢氮系统'
          }, {
            systemCode: 'zk',
            systemName: '真空系统'
          }, {
            systemCode: 'dl',
            systemName: '电力系统'
          }],
          defaultSystemCode: 'ky',
          defaultSystemName: '空压系统',
          sumEnergy: 0
        },
        region: {
          data: [{
            regionCode: 'dlzf1',
            regionName: '1#动力站房'
          }, {
            regionCode: 'cj1',
            regionName: '1栋车间'
          }, {
            regionCode: 'cj2',
            regionName: '2栋车间'
          }, {
            regionCode: 'cj3',
            regionName: '3栋车间'
          }, {
            regionCode: 'cj4',
            regionName: '4栋车间'
          }, {
            regionCode: 'cj5',
            regionName: '胶水厂区'
          }],
          defaultRegionCode: 'cj1',
          defaultRegionName: '1栋车间',
          sumEnergy: 0
        }
      },
      energySelect: {
        energyTimeTypes: [{
          value: 'day',
          label: '按日查'
        },
        {
          value: 'week',
          label: '按周查'
        },
        {
          value: 'month',
          label: '按月查'
        }],
        selectedTime: {
          value: 'day',
          label: '按日查'
        }
      },
      activeName: 'system',
      tableData: null,
      loading: true,
      radioDisabled: false
    }
  },

  computed: {
    ...mapGetters([
      'currentView'
    ]),
    title() {
      var title = ''
      var currentView = this.$store.state.settings.currentView.value
      switch (currentView) {
        case 'ky':
          title = '空压耗量'
          break
        case 'qd':
          title = '氢氮耗量'
          break
        case 'zk':
          title = '真空耗电量'
          break
        case 'dl':
        case 'dianli':
          title = '电耗'
          break
        default:
      }
      return title
    },
    thirdColumnName() {
      var title = ''
      var currentView = this.$store.state.settings.currentView.value
      switch (currentView) {
        case 'ky':
          title = '耗气量'
          break
        case 'qd':
          title = '耗气量'
          break
        case 'zk':
          title = '耗电量'
          break
        case 'dl':
        case 'dianli':
          title = '耗电量'
          break
        default:
      }
      return title
    },
    forthColumnName() {
      var title = ''
      var currentView = this.$store.state.settings.currentView.value
      switch (currentView) {
        case 'ky':
          title = '总耗气量'
          break
        case 'qd':
          title = '总耗气量'
          break
        case 'zk':
          title = '总耗电量'
          break
        case 'dl':
        case 'dianli':
          title = '总耗电量'
          break
        default:
      }
      return title
    }
  },
  watch: {
    currentView: function(params) {
      if (params.value === 'dianli') {
        params.value = 'dl'
      }
      this.radio.system.defaultSystemCode = params.value
      this.radio.system.defaultSystemName = params.name
      this.systemRadioChange(params.value)
    }
  },
  mounted() {
    this.initElectricRankData()
  },

  methods: {
    initElectricRankData: function() {
      this.getSystem()
    },
    getSystem: function() {
      fetchSystem().then((res) => {
        this.radio.system.data = res.data
        if (res.data.length > 0) {
          this.radio.system.defaultSystemCode = res.data[0].systemCode
          this.radio.system.defaultSystemName = res.data[0].systemName
          this.getTableDataBySystem({ systemCode: this.radio.system.defaultSystemCode, timeType: this.energySelect.selectedTime.value })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getRegion: function() {
      fetchRegion().then((res) => {
        this.radio.system.data = res.data
        if (res.data.length > 0) {
          this.radio.region.defaultRegionCode = res.data[0].regionCode
          this.radio.region.defaultRegionName = res.data[0].regionName
          // this.getTableDataByRegion({ code: this.radio.system.defaultRegionCode })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getTableDataBySystem(param) {
      getTableDataBySystem(param).then((res) => {
        /* var data = []
        for (var item in res.data) {
          const type = item
          const value = res.data[item]
          data.push({ type: type, value: value })
        }*/
        this.tableData = res.data
        this.loading = false
        this.radioDisabled = false
      }).catch(err => {
        console.log(err)
      })
    },
    getTableDataByRegion(param) {
      getTableDataByRegion(param).then((res) => {
        var data = []
        for (var item in res.data) {
          const type = item
          const value = res.data[item]
          data.push({ type: type, value: value })
        }
        this.tableData = data
      }).catch(err => {
        console.log(err)
      })
    },
    handleClick(tab, event) {
    },
    systemRadioChange: function(value) {
      this.loading = true
      this.radioDisabled = true
      this.getTableDataBySystem({ systemCode: value, timeType: this.energySelect.selectedTime.value })
    },
    regionRadioChange: function(value) {
      // this.getTableDataByRegion({ code: value })
    },
    headerStyle({ row, column, rowIndex, columnIndex }) {
      let str = 'background:#DCDFE6;'
      if (columnIndex === 2) {
        str += 'color: #fff'
      }
      return str
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 3) {
        if (rowIndex === 0) {
          return {
            rowspan: this.tableData.length,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    changeMethod: function(params) {
      const { value, label } = params
      this.energySelect.selectedTime.label = label
      this.energySelect.selectedTime.value = value
      this.loading = true
      this.radioDisabled = true
      this.getTableDataBySystem({ systemCode: this.radio.system.defaultSystemCode, timeType: this.energySelect.selectedTime.value })
    }
  }
}
</script>

<style lang='scss'>
.dianli-consumer {
  .first-rows{
    .energy-select{
      margin-top: 0.3vw;
      .el-input{
          width: 5vw;
      }
      .el-input--suffix .el-input__inner {
      padding-right: 1vw;
      background-color: transparent;
      border: none;
      color: #C8D6FE;
      font-size: 0.85vw;
      height: 2vw;
        line-height: 2vw;
      }
      .el-select-dropdown{
        border: unset;
        left:0.5vw !important;
      }
      .el-select-dropdown__item{
        height: 1.5vw;
        color: #fff;
        font-size: 0.8vw;
      }
      .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
        background-color: #5F3BFF;
      }
      .el-scrollbar{
        background-color: #1A1272;
      }
    }
  }
  .second-row{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    padding: 0 0.8vw;
    margin-top: 1vw;
    .dianli-group{
      position: relative;
      border: unset;
      width: 100%;
      .el-radio-button__inner{
        color: #B5BFF6;
        background-color: rgba(0,0,0,0);
        border-top: 1px solid #243B9E;
        border-bottom: 1px solid #243B9E;
        border-right:1px solid #243B9E;
        height: 1.9vw;
        line-height: 0.8vw;
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

    .table-demo{
      width: 99.6%;
      height: 100%;
      border-bottom: 1px solid #243B9E;
      .el-table{
          background-color:transparent;
          border-color: #243B9E;
          height: 100%;
      }
      .el-table--border::after, .el-table--group::after, .el-table::before{
          background-color:unset;
      }
      .el-table td,.el-table th{
          padding: 0.3vw 0;
          /* height: 2.2vw; */
          border-color: #243B9E;

      }
      .el-table th{
          background-color: rgba(47,84,235,0.16) !important;
      }
      .el-table th.gutter{
        display: table-cell!important;
      }

      .el-table tr{
          border-color: #243B9E;
          background-color:transparent;
          color:  #9FA8DA;
          font-size: 0.8vw;
      }

      .el-table__body tr:hover > td {
          background-color:unset !important;
      }
      .el-table--scrollable-x .el-table__body-wrapper{
          overflow-x: hidden;
      }
      .el-progress-bar__outer{
        background-color: transparent;
        height: 16px !important;
        position: relative;
      }
      .el-progress__text{
        color: #fff;
      }
      .el-table__body-wrapper{
        height: 100%;
        overflow-y: auto;
        .el-table__body{
          height: 13.4vw;
          .el-table__empty-block{
            border-right: 1px solid #243B9E;
          }
        }
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
    }
  }
}
</style>

<style lang="scss" scoped>
.dianli-consumer{
  position: relative;
  width: 100%;
  height: 19vw;
  flex-shrink: 0;
  flex-grow: 0;
  margin-top: 1vw;
  background: rgba(52,24,171,0.20);
  border: 1px solid #3418AB;
  box-shadow: inset 0 1px 33px 0 rgba(52,24,171,0.50);
  .first-rows{
    display:flex;
    flex-direction:row;
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    height: 2vw;
  }

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
  .sum-row{
    margin-top: 0;
  }
}

.sum-row span{
  font-family: MicrosoftYaHeiUI;
  display: block;
  height: 2.2vw;
  border: 1px solid #243B9E;
  width: 100%;
  font-size: 0.8vw;
  display: flex;
  line-height: 2vw;
}

#right-container .sum-row span>label{
  font-family: MicrosoftYaHeiUI;
  margin-left: 0.8vw;
  margin-right: 1vw;
  color: #9FA8DA;
}
#right-container .sum-row span>strong{
  font-family: Bebas;
  font-size: 1vw;
  color: #D6E4FF
}

</style>
