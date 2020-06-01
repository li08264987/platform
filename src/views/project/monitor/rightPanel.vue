<template>
  <div class="rules">
    <div class="rblock">
      <div v-if="maintabname!=='third'">
        <div class="rtitle">供能概览</div>
        <el-tabs v-if="params[0]!=='zk'" v-model="gyActiveName">
          <el-tab-pane label="1、2栋车间" name="first">
            <div v-if="params[0]!=='qd'" class="rightzl">
              <div class="itemdiv">
                <div class="namediv">常压流量</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_cyllj1_ssll }}<span class="unit">m³/h</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">常压压力</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_cyyl0101_yxyl }}<span class="unit">kPa</span></div>
              </div>
              <div class="itemdiv itemdivnr">
                <div class="namediv">常压露点温度</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_cyldwd1_ldwd }}<span class="unit">℃</span></div>
              </div>
              <div class="itemdiv itemdivnb">
                <div class="namediv">高压流量</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_gyllj1_ssll }}<span class="unit">m³/h</span></div>
              </div>
              <div class="itemdiv itemdivnb">
                <div class="namediv">高压压力</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_gyyl0101_yxyl }}<span class="unit">kPa</span></div>
              </div>
              <div class="itemdiv itemdivnr itemdivnb">
                <div class="namediv">高压露点温度</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_gyldwd1_ldwd }}<span class="unit">℃</span></div>
              </div>
            </div>
            <div v-if="params[0]==='qd'" class="rightzl">
              <div class="itemdiv">
                <div class="namediv">氢氮流量</div>
                <div class="valuediv number">{{ datas.qd_nyzx_dlzf1_qdgg_llj1_ssll }}<span class="unit">m³/h</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">氢氮压力</div>
                <div class="valuediv number">{{ datas.qd_nyzx_dlzf1_qdgg_yl1_yxyl }}<span class="unit">kPa</span></div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="3、4栋车间" name="second">
            <div v-if="params[0]!=='qd'" class="rightzl">
              <div class="itemdiv">
                <div class="namediv">常压流量</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_cyllj2_ssll }}<span class="unit">m³/h</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">常压压力</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_cyyl0102_yxyl }}<span class="unit">kPa</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv itemdivnr">常压露点温度</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_cyldwd2_ldwd }}<span class="unit">℃</span></div>
              </div>
              <div class="itemdiv itemdivnb">
                <div class="namediv">高压流量</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_gyllj2_ssll }}<span class="unit">m³/h</span></div>
              </div>
              <div class="itemdiv itemdivnb">
                <div class="namediv">高压压力</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_gyyl0102_yxyl }}<span class="unit">kPa</span></div>
              </div>
              <div class="itemdiv itemdivnb itemdivnr">
                <div class="namediv">高压露点温度</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_gyldwd2_ldwd }}<span class="unit">℃</span></div>
              </div>
            </div>
            <div v-if="params[0]==='qd'" class="rightzl">
              <div class="itemdiv">
                <div class="namediv">氢氮流量</div>
                <div class="valuediv number">{{ datas.qd_nyzx_dlzf1_qdgg_llj2_ssll }}<span class="unit">m³/h</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">氢氮压力</div>
                <div class="valuediv number">{{ datas.qd_nyzx_dlzf1_qdgg_yl2_yxyl }}<span class="unit">kPa</span></div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane v-if="params[0]!=='qd'" label="氢氮系统" name="third">
            <div class="rightzl">
              <div class="itemdiv">
                <div class="namediv">流量</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_qdllj_ssll }}<span class="unit">m³/h</span></div>
              </div>
              <div class="itemdiv">
                <div class="namediv">压力</div>
                <div class="valuediv number">{{ datas.ky_nyzx_dlzf1_kylwg_yl0101_yxyl }}<span class="unit">kPa</span></div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane v-if="params[0]==='qd'" label="" name="third">
            <div class="rightzl" />
          </el-tab-pane>
        </el-tabs>
        <div v-if="params[0]==='zk' && params[1]==='cj1'" class="rightzl">
          <div class="itemdiv">
            <div class="namediv">1-1系统1#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj1_zkjq1_zkj1_zkd }}<span class="unit">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">1-1系统2#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj1_zkjq1_zkj2_zkd }}<span class="unit">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">1-2系统1#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj1_zkjq2_zkj1_zkd }}<span class="unit">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">1-2系统2#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj1_zkjq2_zkj2_zkd }}<span class="unit">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">1-3系统1#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj1_zkjq3_zkj1_zkd }}<span class="unit">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">1-3系统2#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj1_zkjq3_zkj2_zkd }}<span class="unit">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">1-4系统1#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj1_zkjq4_zkj1_zkd }}<span class="unit">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">1-4系统2#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj1_zkjq4_zkj2_zkd }}<span class="unit">kPa</span></div>
          </div>
        </div>
        <div v-if="params[0]==='zk' && params[1]==='cj2'" class="rightzl">
          <div class="itemdiv">
            <div class="namediv">2-1系统1#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj2_zkjq5_zkj1_zkd }}<span class="unit">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">2-1系统2#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj2_zkjq5_zkj2_zkd }}<span class="unit">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">2-2系统1#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj2_zkjq6_zkj1_zkd }}<span class="unit">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">2-2系统2#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj2_zkjq6_zkj2_zkd }}<span class="unit">kPa</span></div>
          </div>
        </div>
        <div v-if="params[0]==='zk' && params[1]==='cj5'" class="rightzl">
          <div class="itemdiv">
            <div class="namediv">J-1系统1#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj5_zkjq7_zkj1_zkd }}<span class="unit">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">J-2系统1#真空度</div>
            <div class="valuediv number">{{ datas.zk_nyzx_cj5_zkjq8_zkj1_zkd }}<span class="unit">kPa</span></div>
          </div>
        </div>
      </div>
      <div v-if="maintabname==='third'">
        <div class="rtitle">空压机面板数据</div>
        <div class="rightzl">
          <div class="itemdiv">
            <div class="namediv">远程</div>
            <div class="valuediv number">{{ kyjdata.yc===1?'远程':'非远程' }}<span class="unit" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">就地</div>
            <div class="valuediv number">{{ kyjdata.jd===1?'就地':'非就地' }}<span class="unit" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">手动</div>
            <div class="valuediv number">{{ kyjdata.sd===1?'手动':'非手动' }}<span class="unit" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">自动</div>
            <div class="valuediv number">{{ kyjdata.zd===1?'自动':'非自动' }}<span class="unit" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">启动状态</div>
            <div class="valuediv number">{{ kyjdata.qdzt===1?'启动':'未启动' }}<span class="unit" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">运行状态</div>
            <div class="valuediv number">{{ kyjdata.yxzt===1?'运行':'未运行' }}<span class="unit" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">通讯状态</div>
            <div class="valuediv number">{{ kyjdata.txzt===1?'正常':'中断' }}<span class="unit" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">轻故障状态</div>
            <div class="valuediv number">{{ kyjdata.qgzzt===1?'轻故障':'无故障' }}<span class="unit" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">重故障状态</div>
            <div class="valuediv number">{{ kyjdata.zgzzt===1?'重故障':'无故障' }}<span class="unit" /></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="maintabname!=='third'" class="rblock">
      <div class="rtitle">设备能耗分项</div>
      <div style="display:flex">
        <div style="flex:1;height:135px;position:relative">
          <pie-chart :chart-data="piedata" />
          <div style="position:absolute;left:50%;width:86px;height:42px;top:50%;margin-left:-43px;margin-top:-21px;margin-top:-20px;">
            <div style="font-size:18px;"><span class="number" style="font-weight:normal">{{ sumdianhao }}</span></div>
            <div style="font-size:12px;padding-top:4px;">总电耗kWh</div>
          </div>
        </div>
        <div style="flex:1;height:135px">
          <div class="rtitle2" style="border-left-color:#2853FF">
            <span class="rt">空压机组</span><span><label>{{ piedata.data[0].value }}</label>kWh</span>
            <!-- 同比<label>{{ tbky }}</label>% -->
          </div>
          <div class="rtitle2" style="border-left-color:#10D178">
            <span class="rt">冷却塔组</span><span><label>{{ piedata.data[1].value }}</label>kWh</span>
            <!-- 同比<label>{{ tblt }}</label>% -->
          </div>
          <div class="rtitle2" style="border-left-color:#2853FF">
            <span class="rt">冷却泵组</span><span><label>{{ piedata.data[2].value }}</label>kWh</span>
            <!-- 同比<label>{{ tblqb }}</label>% -->
          </div>
          <div class="rtitle2" style="border-left-color:#F0725E">
            <span class="rt">冷干机组</span><span><label>{{ piedata.data[3].value }}</label>kWh</span>
            <!-- 同比<label>{{ tblgj }}</label>% -->
          </div>
          <div class="rtitle2" style="border-left-color:#FAC400">
            <span class="rt">其他</span><span><label>{{ piedata.data[4].value }}</label>kWh</span>
            <!-- 同比<label>{{ tbqt }}</label>% -->
          </div>
        </div>
      </div>
    </div>
    <div class="rblock">
      <div class="rtitle">能效总览</div>
      <div style="display:flex;justify-content: space-between">
        <div class="xhdiv" style="color:#172CB5">
          <div style="font-size: 15px;">气体产量</div>
          <div style="padding-top: 5px;"><span class="number" style="font-weight:normal">{{ qihao }}</span><span style="font-size: 14px;padding-left:4px">m³/h</span></div>
        </div>
        <div class="xhdiv" style="color:#0A53D8">

          <div style="font-size: 15px;">电力消耗</div>
          <div style="padding-top: 5px;"><span class="number" style="font-weight:normal">{{ dianli }}</span><span style="font-size: 14px;;padding-left:4px">kWh</span></div>
        </div>
        <div class="xhdiv" style="color:#F56933">
          <div style="font-size: 15px;">单耗</div>
          <div style="padding-top: 5px;"><span class="number" style="font-weight:normal">{{ danhao }}</span><span style="font-size: 14px;;padding-left:4px">kWh/m³/h</span></div>
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
        :colors="colors"
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
        <div v-else style="padding-left: 10px;font-size: 14px;">今日暂无值班</div>
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
      colors: ['#F5222D', '#F5222D', '#F5222D', '#F5222D', '#F5222D'],
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
      kyjdata: {},
      datas: {}
    }
  },
  watch: {
    params() {
      const self = this
      debugger
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
    var type = self.params[0]
    debugger
    switch (type) {
      case 'ky':
        self.getKongYa()
        break
      case 'qd':
        self.getQingDan()
        break
      case 'zk':
        self.getZhenKong()
        break
    }
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
      // debugger
      // monitorapi.getEffectOrderData({
      //   'sys': 'energyKongya'
      // }).then(res => {
      //   if (res.state === 1) {
      //     console.log('aaa')
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
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
    },
    getQingDan() {
      monitorapi.getQingDanData().then(res => {
        if (res.state === 1) {
          this.datas = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getKongYa() {
      monitorapi.getNHGaiLan().then(res => {
        if (res.state === 1) {
          this.datas = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getZhenKong() {
      monitorapi.getZhenKongData({
        'regional': ''
      }).then(res => {
        if (res.state === 1) {
          this.datas = res.data
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
      border-bottom: 1px dashed #e2e4ea;
      border-right: 1px dashed #e2e4ea;
      height: 70px;
      text-align: center;
      margin-left:-1px;
      margin-bottom: -1px;
    }
    .itemdivnr {
      border-right: 0px dashed #bbc8f8;
    }
    .itemdivnb {
      border-bottom: 0px dashed #bbc8f8;
    }
    .unit{
      font-size: 14px;
      color:#333;
      padding-left:6px;
      font-family: microsoft YaHei;
    }
  .valuediv {
    height: 35px;
    line-height:35px;
    font-size: 20px;
    font-weight: normal;
  }
  .namediv {
    height: 30px;
    line-height: 35px;
    font-size: 14px;
  }
  .rblock{
    padding: 20px 10px 20px 20px;
    border-bottom: 1px solid #E4E9F0;
    .rtitle{
      text-align: left;
      border-left: 3px solid #2853FF;
      color: #333;
      padding-left:8px;
      margin-bottom: 16px;
      font-weight: 800;
      font-size: 16px;
    }
    .rtitle2{
      text-align: left;
      border-left: 3px solid #2853FF;
      color: #333;
      padding-left: 2px;
      margin-bottom: 4px;
      font-size: 15px;
      background-color: rgba(249,249,251,1);
      padding: 4px 4px;
      span{
        width: 80px;
        display: inline-block;
        label{
          padding-left: 0px;
        }
      }
      .rt{
        width: 70px;
      }
      label{
        font-family: Babes;
        padding-left: 10px;
      }
    }
    .xhdiv{
      width: 32%;
      border: 1px dashed;
      text-align: left;
      padding: 10px 0px 10px 10px;
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
      border-bottom: 1px solid #e2e4ea;
      border-right: 1px solid #e2e4ea;
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
