<template>
  <div class="maindiv" style="height:100%;display:flex">
    <div class="kongYaMain" style="flex:3">
      <runInfo ref="showRunInfo" />
      <infoScan ref="infoScan" />
      <div v-if="false" class="tools">
        <el-select v-model="selectvalue" placeholder="自定义">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-date-picker
          v-model="dateinput"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
        <el-input
          el-inputl="typeinput"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
        />
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button>运行回放</el-button>
      </div>
      <!-- <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
        <el-tab-pane label="系统" name="first"> -->
      <div style="height:99%;text-align:center">
        <!-- <div style="padding-top:10px;text-align: left;padding-left: 2%;">
              <span>运行优化建议：</span>
              <span>可关停1#螺杆空压机，只能用2#螺杆空样机进行供应，预计提升系统运行能效5%，节省能源费用2000元（运行模式对比）。</span>
              <span style="color:#23A8F2;text-decoration:underline">确认</span>
            </div> -->
        <div v-if="false" id="intools">
          <el-button
            icon="el-icon-arrow-left"
            style="float:left;margin-left:20px;"
          >上一页</el-button>
          <i class="el-icon-camera-solid" />
          <span @click="showNeiBu">2D模式</span>
          <i class="el-icon-video-camera-solid" />
          <span @click="showVideos">视频监控</span>
          <i class="el-icon-platform-eleme" />
          <span @click="showParamPanel">{{ showParamName }}</span>
          <i class="el-icon-s-tools" />
          <el-select
            v-model="value2"
            class="selectbtn"
            multiple
            collapse-tags
            placeholder="参数设置"
          >
            <el-option
              v-for="item in paramOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <i class="el-icon-s-custom" />
          <span @click="showDutyPanel">{{ showDutyName }}</span>
          <el-button style="float:right;margin-right:20px;">
            下一页
            <i class="el-icon-arrow-right el-icon--right" />
          </el-button>
        </div>
        <div v-if="showNeibu && mainTabName==='first'" style="height:100%;position:relative;border: 1px dashed #ccc;width: 99%;margin-top:1%">
          <!-- <svg
                id="backgroud"
                viewBox="-70 -20 1750 920"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                @click="showKongYa($event)"
                v-html="kongYsSys"
              /> -->
          <system style="height:96%;width:100%;margin-top:40px;" :gngldata="gngldata" />
          <i :class="rightbtn" @click="showHideRight" />
        </div>
        <div v-if="showParam" class="rightparam">
          <div
            style="height:6%;display:flex;align-items:center;justify-content:center;font-weight:bold"
          >
            ZH-10000+离心机通讯参数
          </div>
          <div class="righttop">
            <div
              v-for="(element, index) in params"
              :key="index"
              class="itemdiv"
            >
              <div class="valuediv">{{ element.value }}</div>
              <div class="namediv">{{ element.name }}</div>
            </div>
          </div>
          <div class="rightbott">
            <div
              v-for="(element, index) in params2"
              :key="index"
              class="itemdiv"
            >
              <div class="valuediv">{{ element.value }}</div>
              <div class="namediv">{{ element.name }}</div>
            </div>
          </div>
        </div>
        <div v-if="showDuty" class="leftduty">
          <div class="dutytitle"><i class="el-icon-s-tools" />运行值班</div>
          <div class="dutycontain">
            <div>程志远</div>
            <div>010-52886945</div>
          </div>
          <div class="dutycontain">
            <div>程志远</div>
            <div>010-52886945</div>
          </div>
          <div class="dutytitle"><i class="el-icon-s-open" />维修值班</div>
          <div class="dutycontain">
            <div>程志远</div>
            <div>010-52886945</div>
          </div>
          <div class="dutytitle"><i class="el-icon-s-custom" />值班领导</div>
          <div class="dutycontain">
            <div>程志远</div>
            <div>010-52886945</div>
          </div>
        </div>
        <div v-if="showVideo" class="content">
          <div>
            <div class="condiv Video_1" />
            <div class="conbott">
              <div class="leftdiv">
                <span>一号摄像头</span>
                <label>2019/10/01至2020/20/29</label>
              </div>
              <el-button
                type="primary"
                @click="showHisVideo"
              >查看回放</el-button>
            </div>
          </div>
          <div>
            <div class="condiv Video_2" />
            <div class="conbott">
              <div class="leftdiv">
                <span>一号摄像头</span>
                <label>2019/10/01至2020/20/29</label>
              </div>
              <el-button
                type="primary"
                @click="showHisVideo"
              >查看回放</el-button>
            </div>
          </div>
          <div>
            <div class="condiv Video_3" />
            <div class="conbott">
              <div class="leftdiv">
                <span>一号摄像头</span>
                <label>2019/10/01至2020/20/29</label>
              </div>
              <el-button
                type="primary"
                @click="showHisVideo"
              >查看回放</el-button>
            </div>
          </div>
          <div>
            <div class="condiv Video_4" />
            <div class="conbott">
              <div class="leftdiv">
                <span>一号摄像头</span>
                <label>2019/10/01至2020/20/29</label>
              </div>
              <el-button
                type="primary"
                @click="showHisVideo"
              >查看回放</el-button>
            </div>
          </div>
          <div>
            <div class="condiv Video_5" />
            <div class="conbott">
              <div class="leftdiv">
                <span>一号摄像头</span>
                <label>2019/10/01至2020/20/29</label>
              </div>
              <el-button
                type="primary"
                @click="showHisVideo"
              >查看回放</el-button>
            </div>
          </div>
          <div>
            <div class="condiv Video_6" />
            <div class="conbott">
              <div class="leftdiv">
                <span>一号摄像头</span>
                <label>2019/10/01至2020/20/29</label>
              </div>
              <el-button
                type="primary"
                @click="showHisVideo"
              >查看回放</el-button>
            </div>
          </div>
        </div>
        <div v-if="showHis" style="display:flex;height:92%">
          <div class="videoPlay" />
          <div style="flex:2;height:100%;overflow:auto;height:100%;">
            <div
              class="Video_1"
              style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;"
            />
            <div
              class="Video_2"
              style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;"
            />
            <div
              class="Video_3"
              style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;"
            />
            <div
              class="Video_4"
              style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;"
            />
            <div
              class="Video_5"
              style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;"
            />
            <div
              class="Video_6"
              style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;"
            />
          </div>
        </div>
      </div>
      <!-- </el-tab-pane>
        <el-tab-pane label="机组" name="second" style="text-align:center">
          <el-select v-model="selectvalue2">
            <el-option
              v-for="item in deviceoptions"
              :key="item.CODE"
              :label="item.NAME"
              :value="item.CODE"
            />
          </el-select> -->
      <!-- <div v-if="showNeibu && mainTabName==='second'" style="height:92%"> -->
      <!-- <groupone v-if="selectvalue2===deviceoptions[0].CODE" style="height:92%;width:100%" />
            <grouptwo v-if="selectvalue2===deviceoptions[1].CODE" style="height:92%;width:100%" />
            <groupthree v-if="selectvalue2===deviceoptions[2].CODE" style="height:92%;width:100%" />
            <groupfour v-if="selectvalue2===deviceoptions[3].CODE" style="height:92%;width:100%" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="设备" name="third" style="text-align:center">
          <el-select v-model="selectvalue3">
            <el-option
              v-for="item in kyjoptions"
              :key="item.CODE"
              :label="item.NAME"
              :value="item.CODE"
            />
          </el-select> -->
      <!-- <kyj v-if="showNeibu && mainTabName==='third' && selectvalue3.indexOf('kylx')!==-1" style="height:92%;width:100%" />
          <lgkyj v-if="showNeibu && mainTabName==='third' && selectvalue3.indexOf('kylg')!==-1" style="height:92%;width:100%" :params="kyjparam" />
        </el-tab-pane>
      </el-tabs> -->
    </div>
    <!-- <div v-if="mainTabName==='first' && showright" class="rightparam" style="flex:1"> -->
    <div v-if="false" class="rightparam" style="flex:1">
      <div v-if="mainTabName!=='third'" class="rblock">
        <div class="rtitle">供能概览</div>
        <el-tabs v-model="gyActiveName">
          <el-tab-pane label="1、2栋车间" name="first">
            <div class="rightzl">
              <!-- <div
                v-for="(element, index) in paramss"
                :key="index"
                class="itemdiv"
              >
                <div class="namediv">{{ element.name }}</div>
                <div class="valuediv">{{ element.value }}<span style="font-weight:normal;font-size:14px;">{{ element.unit }}</span></div>
              </div> -->
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
              <!-- <div
                v-for="(element, index) in paramss"
                :key="index"
                class="itemdiv"
              >
                <div class="valuediv">{{ element.value }}</div>
                <div class="namediv">{{ element.name }}<span style="font-weight:normal;font-size:14px;">{{ element.unit }}</span></div>
              </div> -->
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
              <!-- <div
                v-for="(element, index) in paramss"
                :key="index"
                class="itemdiv"
              >
                <div class="valuediv">{{ element.value }}</div>
                <div class="namediv">{{ element.name }}<span style="font-weight:normal;font-size:14px;">{{ element.unit }}</span></div>
              </div> -->
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
      <div v-if="mainTabName!=='third'" class="rblock">
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
      <div v-if="mainTabName==='third'" class="rblock">
        <div class="rtitle">空压机面板数据</div>
        <div class="rightzl">
          <div class="itemdiv">
            <div class="namediv">累加载行时间</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">h</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">累计运行时间</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">h</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">级间温度T4</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">℃</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">空气过滤器压差</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">加载压差</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">空载压力</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">最高管线压力</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">最低管线压力</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">最低压力</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;">kPa</span></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">挂起</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">遥控</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;" /></div>
          </div>
          <div class="itemdiv">
            <div class="namediv">运行状态</div>
            <div class="valuediv number">0<span style="font-weight:normal;font-size:14px;" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import kongYsSys from '@/api/monitor/kongYaSys'
import kongyaji from '@/api/monitor/kongyaji'
// import lxkongyaji from '@/api/monitor/lxkongyaji'
import kongyajizu from '@/api/monitor/kongyajizu'
import runInfo from '@/views/project/dataentry/runInfo'
import infoScan from '@/views/project/dataentry/infoScan'
import pieChart from '@/views/project/dataentry/pieChart'
import monitorapi from '@/api/monitor/monitor'
// import kyj from '@/views/project/dataentry/gongneng/kongya/kongyaji'
// import lgkyj from '@/views/project/dataentry/gongneng/kongya/lgkongyaji'
import system from '@/views/project/dataentry/gongneng/kongya/system'
// import groupone from '@/views/project/dataentry/gongneng/kongya/groupone'
// import grouptwo from '@/views/project/dataentry/gongneng/kongya/grouptwo'
// import groupthree from '@/views/project/dataentry/gongneng/kongya/groupthree'
// import groupfour from '@/views/project/dataentry/gongneng/kongya/groupfour'
export default {
  name: 'MonitorView',
  components: {
    runInfo,
    infoScan,
    pieChart,
    // kyj,
    // lgkyj,
    // groupone,
    // grouptwo,
    // groupthree,
    // groupfour,
    system
  },
  data() {
    return {
      kongYsSys: kongYsSys,
      kongyaji: kongyaji,
      kongyajizu: kongyajizu,
      activeName: 'first',
      gyActiveName: 'first',
      pjvalue: 3,
      pjtexts: ['极差', '略差', '一般', '良好', '优秀'],
      wh: '0 0 1600 850',
      mainTabName: 'first',
      showright: true,
      rightbtn: 'el-icon-caret-right',
      duties: [],
      dianli: 0,
      qihao: 0,
      danhao: 0,
      gngldata: {
        'ky_nyzx_dlzf1_kylwg_cyldwd1_ldwd': 0,
        'ky_nyzx_dlzf1_kylwg_cyldwd2_ldwd': 0,
        'ky_nyzx_dlzf1_kylwg_cyllj1_ljlldw': 0,
        'ky_nyzx_dlzf1_kylwg_cyllj1_ljllgw': 0,
        'ky_nyzx_dlzf1_kylwg_cyllj1_ssll': 0,
        'ky_nyzx_dlzf1_kylwg_cyllj2_ljlldw': 0,
        'ky_nyzx_dlzf1_kylwg_cyllj2_ljllgw': 0,
        'ky_nyzx_dlzf1_kylwg_cyllj2_ssll': 0,
        'ky_nyzx_dlzf1_kylwg_cyyl0101_yxyl': 0,
        'ky_nyzx_dlzf1_kylwg_cyyl0102_yxyl': 0,
        'ky_nyzx_dlzf1_kylwg_gyldwd1_ldwd': 0,
        'ky_nyzx_dlzf1_kylwg_gyldwd2_ldwd': 0,
        'ky_nyzx_dlzf1_kylwg_gyllj1_ljlldw': 0,
        'ky_nyzx_dlzf1_kylwg_gyllj1_ljllgw': 0,
        'ky_nyzx_dlzf1_kylwg_gyllj1_ssll': 0,
        'ky_nyzx_dlzf1_kylwg_gyllj2_ljlldw': 0,
        'ky_nyzx_dlzf1_kylwg_gyllj2_ljllgw': 0,
        'ky_nyzx_dlzf1_kylwg_gyllj2_ssll': 0,
        'ky_nyzx_dlzf1_kylwg_gyyl0101_yxyl': 0,
        'ky_nyzx_dlzf1_kylwg_gyyl0102_yxyl': 0,
        'ky_nyzx_dlzf1_kylwg_yl0101_yxyl': 0
      },
      options: [
        {
          value: 'year',
          label: '年'
        },
        {
          value: 'month',
          label: '月'
        },
        {
          value: 'day',
          label: '日'
        }
      ],
      deviceoptions: [
        {
          CODE: 'one',
          NAME: '1#空压机组流程图'
        },
        {
          CODE: 'two',
          NAME: '2#空压机组流程图'
        },
        {
          CODE: 'three',
          NAME: '3#空压机组流程图'
        },
        {
          CODE: 'four',
          NAME: '4#空压机组流程图'
        }
      ],
      kyjoptions: [
        {
          CODE: 'kylx',
          NAME: '离心空压机'
        },
        {
          CODE: 'kylg',
          NAME: '螺杆空压机'
        }
      ],
      paramOptions: [
        {
          value: 'temp',
          label: '温度'
        },
        {
          value: 'press',
          label: '压力'
        },
        {
          value: 'flow',
          label: '流量'
        },
        {
          value: 'power',
          label: '功率'
        }
      ],
      value2: [],
      dateinput: '',
      typeinput: '',
      selectvalue: 'one',
      selectvalue2: '',
      selectvalue3: 'kylx',
      showNeibu: true,
      showVideo: false,
      showParam: false,
      showDuty: false,
      showHis: false,
      showParamName: '显示数据',
      showDutyName: '值班显示',
      piedata: {
        data: [
          { value: 0, name: '空压机组' },
          { value: 0, name: '冷却塔组' },
          { value: 0, name: '冷却泵组' },
          { value: 0, name: '冷干机组' },
          { value: 0, name: '其他' }
        ]
      },
      sumdianhao: 0,
      tbky: 0,
      tblgj: 0,
      tblqb: 0,
      tblt: 0,
      tbqt: 0,
      paramss: [
        {
          name: '常压流量',
          value: '2000',
          unit: 'm³/h'
        },
        {
          name: '常压压力',
          value: '600',
          unit: 'kPa'
        },
        {
          name: '常压露点温度',
          value: '40.8',
          unit: '℃'
        },
        {
          name: '高压流量',
          value: '2000',
          unit: 'm³/h'
        },
        {
          name: '高压压力',
          value: '600',
          unit: 'kPa'
        },
        {
          name: '高压露点温度',
          value: '40.8',
          unit: '℃'
        }
      ],
      params: [
        {
          name: '马达绕组U温度',
          value: '40.8℃'
        },
        {
          name: '马达绕组V温度',
          value: '40.8℃'
        },
        {
          name: '马达绕组W温度',
          value: '40.8℃'
        },
        {
          name: '1级振动',
          value: '40.8℃'
        },
        {
          name: '0.00um',
          value: '40.8℃'
        },
        {
          name: '0.00um',
          value: '40.8℃'
        },
        {
          name: '轴承驱动温度',
          value: '40.8℃'
        },
        {
          name: '非轴承驱动温度',
          value: '40.8℃'
        },
        {
          name: '电机冷却温度',
          value: '40.8℃'
        },
        {
          name: '马达电流',
          value: '40.8℃'
        },
        {
          name: '导叶阀开度',
          value: '40.8℃'
        },
        {
          name: '排气阀关度',
          value: '40.8℃'
        },
        {
          name: '运行时间',
          value: '40.8℃'
        },
        {
          name: '加载时间',
          value: '40.8℃'
        },
        {
          name: '干燥机压力露点',
          value: '40.8℃'
        },
        {
          name: '干燥机A出口压力',
          value: '40.8℃'
        },
        {
          name: '干燥机B出口压力',
          value: '40.8℃'
        }
      ],
      params2: [
        {
          name: 'A罐开启',
          value: 'ON'
        },
        {
          name: 'B罐开启',
          value: 'OFF'
        },
        {
          name: '运行状态',
          value: 'STOP'
        },
        {
          name: '加/卸载运行状态',
          value: 'OFF'
        },
        {
          name: '综合报警',
          value: 'NORMAL'
        },
        {
          name: '综合故障停机',
          value: 'NORMAL'
        },
        {
          name: '维护保养提示',
          value: 'OFF'
        },
        {
          name: '紧急停机',
          value: 'OFF'
        },
        {
          name: '手动',
          value: 'REMOTE'
        }
      ]
    }
  },
  computed: {
    kyjparam() {
      return [this.selectvalue2, this.selectvalue3]
    }
  },
  watch: {
    selectvalue3(val) {
      // if (val === 'one') {
      //   this.kongyaji = kongyaji
      //   this.wh = '0 0 1600 850'
      // } else {
      //   this.kongyaji = lxkongyaji
      //   this.wh = '0 0 1266 773'
      // }
    },
    selectvalue2(val) {
      // this.getKongYaJi()
    }
  },
  mounted() {
    this.getNengHaoGaiLan()
    this.getKongYaJiQun()
    this.getDuty()
    this.getDianLi('kyjq', '')
    this.getDianHaoZhanBi()
    // this.getZQiHao()
  },
  methods: {
    handleClick(tab, event) {
      this.mainTabName = tab.name
    },
    showVideos() {
      this.showNeibu = false
      this.showVideo = true
    },
    showHisVideo() {
      this.showHis = true
      this.showVideo = false
    },
    showNeiBu() {
      this.showNeibu = true
      this.showVideo = false
    },
    getNengHaoGaiLan() {
      monitorapi.getNHGaiLan().then(res => {
        if (res.state === 1) {
          this.gngldata = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getKongYaJiQun() {
      monitorapi.getKongYaJiQun().then(res => {
        if (res.state === 1) {
          this.deviceoptions = res.data
          this.selectvalue2 = this.deviceoptions[0].CODE
        }
      }).catch(err => {
        console.log(err)
        this.selectvalue2 = this.deviceoptions[0].CODE
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
    getKongYaJi() {
      const self = this
      monitorapi.getKongYaJi({
        'kyjq': self.selectvalue2
      }).then(res => {
        if (res.state === 1) {
          this.kyjoptions = res.data
          this.selectvalue3 = this.kyjoptions[0].CODE
        }
      }).catch(err => {
        console.log(err)
        this.selectvalue3 = this.kyjoptions[0].CODE
      })
    },
    getDianLi(kyjq, device) {
      monitorapi.getDianLi({
        'kyjq': kyjq,
        'device': device
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
    getDianHaoZhanBi() {
      monitorapi.getDianHaoZhanBi().then(res => {
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
    showHideRight() {
      if (this.showright) {
        this.rightbtn = 'el-icon-caret-left'
      } else {
        this.rightbtn = 'el-icon-caret-right'
      }
      this.showright = !this.showright
    },
    showParamPanel() {
      if (this.showParam) {
        this.showParam = false
        this.showParamName = '显示数据'
      } else {
        this.showParam = true
        this.showParamName = '隐藏数据'
      }
    },
    showDutyPanel() {
      if (!this.showDuty) {
        this.showDuty = true
        this.showDutyName = '值班隐藏'
      } else {
        this.showDuty = false
        this.showDutyName = '值班显示'
      }
    },
    getParentId(target) {
      const self = this
      switch (target.id) {
        case '空压机':
          self.$refs.showRunInfo.dialogTableVisible = true
          break
        case '储气罐':
          self.$refs.showRunInfo.dialogTableVisible = true
          break
        case '干燥机':
          self.$refs.showRunInfo.dialogTableVisible = true
          break
        default:
          self.getParentId(target.parentElement)
          break
      }
    },
    showKongYa(e) {
      const self = this
      var str = /\d/
      if (
        str.test(e.target.id) ||
        e.target.tagName === 'tspan' ||
        e.target.tagName === 'text'
      ) {
        self.$refs.infoScan.dialogTableVisible = true
        return
      }
      this.getParentId(e.target)
    }
  }
}
</script>
<style lang="scss">
.kongYaMain {
  height: 99%;
  // margin-left:50px;
  width: 77%;
  .tabs {
    height: 99%;
    .el-tab-pane {
      height: 95%;
    }
    .el-tabs__content {
      height: 99%;
    }
  }
  .el-tabs__header{
    margin-bottom: 0px;
  }
  .el-icon-caret-right,.el-icon-caret-left{
    position: absolute;
    top: 50%;
    right:-21px;
    font-size:30px;
    color:#8D9BEA;
    &:hover{
      cursor: pointer;
    }
  }
  .el-select{
    margin: 10px 0px;
  }
  .el-tabs__item{
    width: 220px;
    padding: 0px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-right: 1px solid #F0F2F5;
  }
  .el-input {
    width: 200px;
  }
  .selectbtn {
    .el-input {
      width: 120px;
    }
    input::-webkit-input-placeholder {
      color: #000000;
    }
    input::-moz-input-placeholder {
      color: #000000;
    }
    input::-ms-input-placeholder {
      color: #000000;
    }
    .el-input--suffix .el-input__inner {
      width: 100px;
      padding-left: 0px;
    }
  }
}
.number{
  font-weight:bold;
  font-size:20px;
  font-family: Bebas;
}
.rblock{
  .el-tabs__nav{
    width: 100%;
  }
  .el-tabs__item{
    width: 33.4%;
    padding: 0px;
    &:hover{
      color: #2853FF;
    }
  }
  .el-tabs__item.is-active {
    color: #2853FF;
  }
  .el-tabs__active-bar{
    background: #2853FF;
  }
}
</style>
<style scoped lang="scss">
.tools {
  position: absolute;
  right: 9px;
  margin-top: 5px;
}
.selectbtn {
  width: 100px;
}
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
.leftduty {
  width: 10%;
  background-color: #f9fafb;
  height: 100%;
  position: absolute;
  top: 5%;
  .dutytitle {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px dashed #e4e9f0;
    font-size: 18px;
    color: #879ec9;
  }
  .dutycontain {
    text-align: center;
    padding: 10px 0px;
    border-bottom: 1px solid #e4e9f0;
  }
}
#intools:after {
  display: block;
  content: "";
  clear: both;
  height: 0;
  overflow: hidden;
}
#intools {
  text-align: center;
  height: 40px;
  line-height: 40px;
  border: 1px solid #e4e9f0;
  background: #f1f6fd;
  i {
    margin-left: 20px;
  }
  &:hover {
    cursor: pointer;
  }
}
.content {
  height: 99%;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  div {
    width: 30%;
    height: 42%;
    border: 1px solid #41719c;
    border-radius: 5px;
    span {
      font-size: 18px;
      font-weight: bold;
    }
    .condiv {
      width: 96%;
      height: 80%;
      border: 0px solid #41719c;
      border-radius: 0px;
      margin-left: 2%;
      margin-top: 5px;
    }
    .conbott {
      width: 90%;
      height: 20%;
      border: 0px solid #41719c;
      border-radius: 0px;
      margin-left: 5%;
      margin-top: 5px;
      .leftdiv {
        float: left;
        width: 77%;
        height: 100%;
        border: 0px;
        span {
          display: block;
        }
      }
    }
  }
}
.videoPlay {
  flex: 8;
  height: 100%;
  background-image: url("../../../../../assets/monitor/videoImg.png");
}
.Video_1 {
  background-image: url("../../../../../assets/monitor/ved1.png");
}
.Video_2 {
  background-image: url("../../../../../assets/monitor/ved2.png");
}
.Video_3 {
  background-image: url("../../../../../assets/monitor/ved3.png");
}
.Video_4 {
  background-image: url("../../../../../assets/monitor/ved4.png");
}
.Video_5 {
  background-image: url("../../../../../assets/monitor/ved3.png");
}
.Video_6 {
  background-image: url("../../../../../assets/monitor/ved2.png");
}
</style>
