<template>
  <div class="linescan">
    <el-dialog v-dialogDrag :title="title" :visible.sync="dialogTableVisible">
      <div>
        <div style="height:40px;">
          <el-button type="primary" style="float:right;margin-left:20px;" @click="getKYJLineChart">查询</el-button>
          <el-date-picker
            v-model="dateValue"
            type="daterange"
            range-separator="至"
            value-format="yyyy-MM-dd HH:mm:ss"
            style="float:right;"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </div>
        <div style="width:100%;height:500px">
          <line-chart :chart-data="linedata" />
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import monitorapi from '@/api/monitor/monitor'
import lineChart from '@/views/project/monitor/lineChart'
export default {
  name: 'RunInfo',
  components: {
    lineChart
  },
  props: {
    code: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      dialogTableVisible: false,
      dateValue: '',
      linedata: {
        datatime: [],
        datavalue: []
      },
      title: '历史曲线',
      devcode: ''
    }
  },
  watch: {
    code: function(newVal, oldVal) {
      const self = this
      self.devcode = newVal
      monitorapi.getKYJLineChart({
        'code': newVal,
        'startDate': '',
        'endDate': ''
      }).then(res => {
        if (res.state === 1) {
          self.linedata.datatime = res.time
          self.linedata.datavalue = res.value
          if (newVal.indexOf('ssll') !== -1) {
            self.linedata.unit = 'm³/h'
            self.linedata.legendName = '流量'
          } else if (newVal.indexOf('yxyl') !== -1) {
            self.linedata.unit = 'kpa'
            self.linedata.legendName = '压力'
          } else {
            self.linedata.unit = '℃'
            self.linedata.legendName = '温度'
          }
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    if (this.devcode !== '') {
      this.getKYJLineChart()
    }
  },
  methods: {
    getKYJLineChart() {
      var self = this
      monitorapi.getKYJLineChart({
        'code': this.devcode,
        'startDate': this.dateValue[0],
        'endDate': this.dateValue[1]
      }).then(res => {
        if (res.state === 1) {
          self.linedata.datatime = res.time
          self.linedata.datavalue = res.value
          if (this.devcode.indexOf('ssll') !== -1) {
            self.linedata.unit = 'm³/h'
            self.linedata.legendName = '流量'
          } else if (this.devcode.indexOf('yxyl') !== -1) {
            self.linedata.unit = 'kpa'
            self.linedata.legendName = '压力'
          } else {
            self.linedata.unit = '℃'
            self.linedata.legendName = '温度'
          }
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss">
.linescan{
  .el-dialog__header{
    text-align: left;
  }
  .el-dialog__body {
    padding: 5px 20px;
  }
}

</style>
