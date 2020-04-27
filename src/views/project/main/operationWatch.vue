<template>
  <div class="operation-watch">
    <div class="first-row" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>运行监测</span>
      </div>
    </div>

    <div class="radio-container">
      <el-radio-group ref="operationGroup" v-model="systems.defaultSystemCode" class="operation-group" @change="radioChange">
        <el-radio-button
          v-for="item in systems.systemsRadio"
          :key="item.systemCode"
          :label="item.systemCode"
        >
          {{ item.systemName }}
        </el-radio-button>
      </el-radio-group>
    </div>

    <div class="operation-table">
      <el-table :show-header="false" :data="operation.tableData" border>
        <el-table-column prop="type" label="" align="center" />
        <el-table-column prop="value" label="" align="center" />
      </el-table>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchSystem, getTableDataBySystem } from '@/api/main/operationWatch'
export default {
  name: 'OperationWatch',
  components: {},
  data() {
    return {
      operation: {
        tableData: [{
          type: '总流量',
          value: '39m³/h'
        },
        {
          type: '总压力',
          value: '3.4bar'
        },
        {
          type: '平均温度',
          value: '36℃'
        },
        {
          type: '冷却水温度',
          value: '39℃'
        }]
      },
      systems: {
        systemsRadio: [{
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
        defaultSystemName: '空压系统'
      }
    }
  },

  computed: {
    ...mapGetters([
      'currentView'
    ])
  },
  watch: {
    currentView: function(params) {
      if (params.value === 'dianli') {
        params.value = 'dl'
      }
      this.systems.defaultSystemCode = params.value
      this.systems.defaultSystemName = params.name
      this.radioChange(params.value)
    }
  },
  mounted() {
    this.initOperationWatchData()
  },

  methods: {
    initOperationWatchData: function() {
      this.getSystem()
    },
    getSystem: function() {
      fetchSystem().then((res) => {
        this.systems.systemsRadio = res.data
        if (res.data.length > 0) {
          this.systems.defaultSystemCode = res.data[0].systemCode
          this.systems.defaultSystemName = res.data[0].systemName
          // this.getTableDataBySystem({ code: this.systems.defaultSystemCode })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getTableDataBySystem(param) {
      getTableDataBySystem(param).then((res) => {
        var data = []
        for (var item in res.data) {
          const type = item
          const value = res.data[item]
          data.push({ type: type, value: value })
        }
        this.operation.tableData = data
      }).catch(err => {
        console.log(err)
      })
    },
    radioChange: function(value) {
      this.getTableDataBySystem({ code: value })
    }
  }
}
</script>

<style lang='scss'>
.operation-watch {
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
    margin-left: 0.8vw;
    flex-shrink: 1;
    flex-grow: 1;
    width: 100%;
    height: 0;
    padding-right: 1.63vw;
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
#left-container .operation-watch{
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
