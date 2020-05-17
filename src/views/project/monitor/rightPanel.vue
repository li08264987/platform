<template>
  <div class="rules">
    <div class="rblock">
      <div v-if="maintabname!=='third'">
        <div class="rtitle">供能概览</div>
        <el-tabs v-model="gyActiveName">
          <el-tab-pane label="1、2栋车间" name="first">
            <div class="rightzl">
              <div class="itemdiv">
                <div class="namediv">常压流量</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_cyllj1_ssll }}<span style="font-weight:normal;font-size:14px;">m³/h</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">常压压力</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_cyyl0101_yxyl }}<span style="font-weight:normal;font-size:14px;">kPa</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">常压露点温度</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_cyldwd1_ldwd }}<span style="font-weight:normal;font-size:14px;">℃</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">高压流量</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_gyllj1_ssll }}<span style="font-weight:normal;font-size:14px;">m³/h</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">高压压力</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_gyyl0101_yxyl }}<span style="font-weight:normal;font-size:14px;">kPa</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">高压露点温度</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_gyldwd1_ldwd }}<span style="font-weight:normal;font-size:14px;">℃</span></div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="3、4栋车间" name="second">
            <div class="rightzl">
              <div class="itemdiv">
                <div class="namediv">常压流量</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_cyllj2_ssll }}<span style="font-weight:normal;font-size:14px;">m³/h</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">常压压力</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_cyyl0102_yxyl }}<span style="font-weight:normal;font-size:14px;">kPa</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">常压露点温度</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_cyldwd2_ldwd }}<span style="font-weight:normal;font-size:14px;">℃</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">高压流量</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_gyllj2_ssll }}<span style="font-weight:normal;font-size:14px;">m³/h</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">高压压力</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_gyyl0102_yxyl }}<span style="font-weight:normal;font-size:14px;">kPa</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">高压露点温度</div>
                <div class="valuediv number">{{ gngldata.ky_nyzx_dlzf1_kylwg_gyldwd2_ldwd }}<span style="font-weight:normal;font-size:14px;">℃</span></div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="氢氮系统" name="third">
            <div class="rightzl">
              <div class="itemdiv">
                <div class="namediv">常压流量</div>
                <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">m³/h</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">常压压力</div>
                <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">kPa</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">高压流量</div>
                <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">m³/h</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">高压压力</div>
                <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">kPa</span></div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div v-if="maintabname==='third'">
        <div class="rtitle">空压机面板数据</div>
        <div class="rightzl">
          <div class="itemdiv">
            <div class="namediv">累加载行时间</div>
            <div class="valuediv number">{{ kyjdata.ljjzsj }}<span style="font-weight:normal;font-size:14px;">h</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">累计运行时间</div>
            <div class="valuediv number">{{ kyjdata.ljyxsj }}<span style="font-weight:normal;font-size:14px;">h</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">级间温度T4</div>
            <div class="valuediv number">{{ kyjdata.jjwd }}<span style="font-weight:normal;font-size:14px;">℃</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">空气过滤器压差</div>
            <div class="valuediv number">{{ kyjdata.klyc }}<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">加载压差</div>
            <div class="valuediv number">{{ kyjdata.jzyc }}<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">空载压力</div>
            <div class="valuediv number">{{ kyjdata.kzyl }}<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">最高管线压力</div>
            <div class="valuediv number">{{ kyjdata.zggxyl }}<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">最低管线压力</div>
            <div class="valuediv number">{{ kyjdata.zdgxyl }}<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">最低压力</div>
            <div class="valuediv number">{{ kyjdata.zdzyl }}<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">挂起</div>
            <div class="valuediv number">{{ kyjdata.gq===1?'是':'否' }}<span style="font-weight:normal;font-size:14px;" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">遥控</div>
            <div class="valuediv number">{{ kyjdata.yk===1?'是':'否' }}<span style="font-weight:normal;font-size:14px;" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">运行状态</div>
            <div class="valuediv number">{{ kyjdata.yxzt===1?'开启':'关闭' }}<span style="font-weight:normal;font-size:14px;" /></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="maintabname!=='third'" class="rblock">
      <div class="rtitle">电耗占比</div>
      <div style="display:flex">
        <div style="flex:2;height:135px;position:relative">
          <pie-chart :chart-data="piedata" />
          <div style="position:absolute;left:50%;width:86px;height:42px;top:50%;margin-left:-43px;margin-top:-21px;margin-top:-10px;">
            <div style="font-size:18px;"><span class="number">{{ sumdianhao }}</span>kWh</div>
            <div style="font-size:13px;">总电耗</div>
          </div>
        </div>
        <div style="flex:4;height:135px">
          <div class="rtitle2" style="border-left-color:#2853FF">
            <span>空压机组</span><span><label>{{ piedata.data[0].value }}</label>kWh</span>同比<label>{{ tbky }}</label>%
          </div>
          <div class="rtitle2" style="border-left-color:#BDF6B4">
            <span>冷却塔组</span><span><label>{{ piedata.data[1].value }}</label>kWh</span>同比<label>{{ tblt }}</label>%
          </div>
          <div class="rtitle2" style="border-left-color:#B860F3">
            <span>冷却泵组</span><span><label>{{ piedata.data[2].value }}</label>kWh</span>同比<label>{{ tblqb }}</label>%
          </div>
          <div class="rtitle2" style="border-left-color:#F588E3">
            <span>冷干机组</span><span><label>{{ piedata.data[3].value }}</label>kWh</span>同比<label>{{ tblgj }}</label>%
          </div>
          <div class="rtitle2" style="border-left-color:#5CF0F2">
            <span>其他</span><span><label>{{ piedata.data[4].value }}</label>kWh</span>同比<label>{{ tbqt }}</label>%
          </div>
        </div>
      </div>
    </div>
    <div class="rblock">
      <div class="rtitle">能效总览</div>
      <div style="display:flex;justify-content: space-between">
        <div class="xhdiv" style="color:#192EB6">
          <div>气体产量</div>
          <div style="padding-top: 5px;"><span class="number">{{ qihao }}</span><span>m³/h</span></div>
        </div>
        <div class="xhdiv" style="color:#005AFF">

          <div>电力消耗</div>
          <div style="padding-top: 5px;"><span class="number">{{ dianli }}</span><span>kWh</span></div>
        </div>
        <div class="xhdiv" style="color:#F56B35">
          <div>单耗</div>
          <div style="padding-top: 5px;"><span class="number">{{ danhao }}</span><span>kWh/m³/h</span></div>
        </div>
      </div>
    </div>
    <div class="rblock">
      <div class="rtitle">能效评分</div>
      <el-rate
        v-model="pjvalue"
        show-text
        disabled
        :texts="pjtexts"
        style="text-align: left;"
      />
    </div>
    <div class="rblock">
      <div class="rtitle">今日值班</div>
      <div style="text-align:left;background:#EFEFFF;padding:5px 0px;">
        <div v-if="duties.length>0">
          <span v-for="(item,index) in duties" :key="index">
            {{ item.REAL_NAME }}({{ item.DUTY_TYPE===0?'早班':item.DUTY_TYPE===1?'午班':'晚班' }}) <span v-if="index!=(duties.length-1)">、</span>
          </span>

        </div>
        <div v-else>今日暂无值班</div>
      </div>
    </div>
  </div>
</template>
<script>
import pieChart from '@/views/project/monitor/pieChart'
import monitorapi from '@/api/monitor/monitor'
export default {
  name: 'RightPanel',
  components: {
    pieChart
  },
  props: {
    gngldata: {
      type: Object,
      required: true
    },
    maintabname: {
      type: String,
      required: true
    },
    params: {
      type: Array,
      require: true,
      default() {
        return ['', '']
      }
    }
  },
  data() {
    return {
      gyActiveName: 'first',
      sumdianhao: 0,
      tbky: 0,
      tblgj: 0,
      tblqb: 0,
      tblt: 0,
      tbqt: 0,
      pjtexts: ['极差', '略差', '一般', '良好', '优秀'],
      pjvalue: 3,
      duties: [],
      dianli: 0,
      qihao: 0,
      danhao: 0,
      piedata: {
        data: [
          { value: 0, name: '空压机组' },
          { value: 0, name: '冷却塔组' },
          { value: 0, name: '冷却泵组' },
          { value: 0, name: '冷干机组' },
          { value: 0, name: '其他' }
        ]
      },
      kyjdata: {}
    }
  },
  watch: {
    params() {
      const self = this
      monitorapi.getKongYaJiData({
        'type': self.params[0],
        'sys': self.params[1],
        'kyjq': self.params[2],
        'kyj': self.params[3]
      }).then(res => {
        if (res.state === 1) {
          self.kyjdata = res.sbdata
          // self.kyjdata = res.dicdata
        }
      }).catch(err => {
        console.log(err)
      })
      self.getDianHaoZhanBi()
      self.getDianLi()
    }
  },
  mounted() {
    const self = this
    self.getDianHaoZhanBi()
    self.getDuty()
    self.getDianLi()
  },
  methods: {
    getDianHaoZhanBi() {
      var self = this
      var type = ''
      if (self.maintabname === 'first') {
        type = 'kyjq'
      } else {
        type = self.params[2]
      }
      monitorapi.getDianHaoZhanBi({
        'type': type
      }).then(res => {
        if (res.state === 1) {
          this.piedata.data[0].value = res.kyvalue
          this.piedata.data[1].value = res.ltvalue
          this.piedata.data[2].value = res.lqbvalue
          this.piedata.data[3].value = res.lgjvalue
          this.piedata.data[4].value = res.qtvalue
          this.sumdianhao = res.sumvalue
          this.tbky = res.tbky.toFixed(0)
          this.tblgj = res.tblgj.toFixed(0)
          this.tblqb = res.tblqb.toFixed(0)
          this.tblt = res.tblt.toFixed(0)
          this.tbqt = res.tbqt.toFixed(0)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getDuty() {
      monitorapi.getDuty().then(res => {
        if (res.state === 1) {
          this.duties = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getDianLi() {
      var type = ''
      var self = this
      if (self.maintabname === 'first') {
        type = 'kyjq'
      } else {
        type = self.params[2]
      }
      monitorapi.getDianLi({
        'kyjq': type,
        'device': ''
      }).then(res => {
        if (res.state === 1) {
          this.dianli = res.data.toFixed(0)
          this.qihao = res.qhdata.toFixed(0)
          this.danhao = res.qhdata === 0 ? 0 : (res.data / res.qhdata).toFixed(2)
          this.pjvalue = res.pingfen
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getZQiHao() {
      monitorapi.getZQiHao().then(res => {
        if (res.state === 1) {
          this.qihao = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss">
  .rules{
    .el-dialog__header{
      background-color: #F9F9FB;
    }
    .el-dialog__body{
      padding-top: 20px;
    }
    .secdialog{
      .el-dialog{
        width: 20%;
      }
      .el-form-item__label{
        text-align: left;
      }
      .el-input{
        width: 88%;
      }
    }
  }
</style>
<style scoped lang="scss">
.rightparam {
  margin-top: 48px;
  border-top-width: 2px;
  background: white;
  border: 1px solid #e4e9f0;
  text-align: center;
  .righttop {
    height: 65%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
  }
  .rightzl {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    padding: 1px;
  }
  .itemdiv {
      width: 33%;
      border: 1px dashed #bbc8f8;
      height: 70px;
      text-align: center;
      margin-left:-1px;
      margin-bottom: -1px;
    }
  .valuediv {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-weight: bold;
  }
  .namediv {
    height: 30px;
    line-height: 30px;
    font-size: 15px;
  }
  .rblock{
    padding: 20px 10px 20px 20px;
    border-bottom: 1px solid #E4E9F0;
    .rtitle{
      text-align: left;
      border-left: 3px solid #2853FF;
      color: #3E3E3E;
      padding-left: 5px;
      margin-bottom: 17px;
    }
    .rtitle2{
      text-align: left;
      border-left: 3px solid #2853FF;
      color: #3E3E3E;
      padding-left: 5px;
      margin-bottom: 10px;
      span{
        width: 80px;
        display: inline-block;
      }
      label{
        font-family: Babes;
      }
    }
    .xhdiv{
      width: 30%;
      border: 1px dashed;
      text-align: left;
      padding: 10px 0px 10px 5px;
    }
  }
  .rightbott {
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    .itemdiv {
      width: 31%;
      margin-left: 1%;
      border: 1px solid #bbc8f8;
      height: 70px;
      text-align: center;
      .valuediv {
        height: 40px;
        line-height: 40px;
        background: #f6f8fe;
        font-size: 20px;
        font-weight: bold;
      }
      .namediv {
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>
