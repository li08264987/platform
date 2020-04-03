<template>
  <div class="maindiv">
    <div class="kongYaMain">
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
          v-model="typeinput"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
        />
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button>运行回放</el-button>
      </div>
      <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
        <el-tab-pane label="系统" name="first">
          <div style="height:99%;text-align:center">
            <el-select v-model="selectvalue">
              <el-option
                v-for="item in deviceoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <div style="padding-top:10px">
              <span>运行优化建议：</span>
              <span>可关停1#螺杆空压机，只能用2#螺杆空样机进行供应，预计提升系统运行能效5%，节省能源费用2000元（运行模式对比）。</span>
              <span>确认</span>
            </div>
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
            <div v-show="showNeibu" style="height:99%;position:relative">
              <svg
                id="backgroud"
                viewBox="-70 -20 1850 920"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                @click="showKongYa($event)"
                v-html="kongYsSys"
              />
            </div>
            <div v-show="showParam" class="rightparam">
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
            <div v-show="showDuty" class="leftduty">
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
            <div v-show="showVideo" class="content">
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
            <div v-show="showHis" style="display:flex;height:92%">
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
        </el-tab-pane>
        <el-tab-pane label="机组" name="second">
          <div v-show="showNeibu" style="height:99%">
            <svg
              viewBox="-50 -20 1800 920"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              v-html="kongyajizu"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="设备" name="third">
          <div v-show="showNeibu" style="height:99%">
            <svg
              viewBox="-150 -20 1800 920"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              v-html="kongyaji"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="rightparam">
      <div class="rblock">
        <div class="rtitle">当前值班</div>
        <div style="text-align:left">王立志(运营),王立志(运营),王立志(运营)</div>
      </div>
      <div class="rblock">
        <div class="rtitle">能效总览</div>
        <div style="display:flex;justify-content: space-between">
          <div class="xhdiv" style="color:#192EB6">
            <div>气体产量</div>
            <div style="padding-top: 5px;"><span style="font-weight:bold;font-size:20px;">1112</span><span>m³/h</span></div>
          </div>
          <div class="xhdiv" style="color:#005AFF">
            <div>电力消耗</div>
            <div style="padding-top: 5px;"><span style="font-weight:bold;font-size:20px;">1111</span><span>kWh</span></div>
          </div>
          <div class="xhdiv" style="color:#F56B35">
            <div>单耗</div>
            <div style="padding-top: 5px;"><span style="font-weight:bold;font-size:20px;">111</span><span>kWh/m³/h</span></div>
          </div>
        </div>
      </div>
      <div class="rblock">
        <div class="rtitle">能效评价</div>
        <el-rate
          v-model="pjvalue"
          show-text
          style="text-align: left;"
        />
      </div>
      <div class="rblock">
        <div class="rtitle">供应概览</div>
        <el-tabs v-model="gyActiveName" @tab-click="handleClickGY">
          <el-tab-pane label="1-2栋车间" name="first">
            <div class="rightzl">
              <div
                v-for="(element, index) in paramss"
                :key="index"
                class="itemdiv"
              >
                <div class="valuediv">{{ element.value }}</div>
                <div class="namediv">{{ element.name }}</div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="3-4栋车间" name="second">
            <div class="rightzl">
              <div
                v-for="(element, index) in paramss"
                :key="index"
                class="itemdiv"
              >
                <div class="valuediv">{{ element.value }}</div>
                <div class="namediv">{{ element.name }}</div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="氢氮系统" name="third">
            <div class="rightzl">
              <div
                v-for="(element, index) in paramss"
                :key="index"
                class="itemdiv"
              >
                <div class="valuediv">{{ element.value }}</div>
                <div class="namediv">{{ element.name }}</div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="rblock">
        <div class="rtitle">能耗概览</div>
        <div style="display:flex">
          <div style="flex:2;height:135px">
            饼状图
          </div>
          <div style="flex:3;height:135px">
            <div class="rtitle2">
              <span>空压机组</span><span>2300kWh</span><label>67%</label>
            </div>
            <div class="rtitle2">
              <span>冷却塔组</span><span>2300kWh</span><label>67%</label>
            </div>
            <div class="rtitle2">
              <span>空却泵组</span><span>2300kWh</span><label>67%</label>
            </div>
            <div class="rtitle2">
              <span>冷干机组</span><span>2300kWh</span><label>67%</label>
            </div>
            <div class="rtitle2">
              <span>其他</span><span>2300kWh</span><label>67%</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import kongYsSys from '@/api/monitor/kongYaSys'
import kongyaji from '@/api/monitor/kongyaji'
import kongyajizu from '@/api/monitor/kongyajizu'
import runInfo from '@/views/project/monitor/runInfo'
import infoScan from '@/views/project/monitor/infoScan'
export default {
  name: 'MonitorView',
  components: {
    runInfo,
    infoScan
  },
  data() {
    return {
      kongYsSys: kongYsSys,
      kongyaji: kongyaji,
      kongyajizu: kongyajizu,
      activeName: 'first',
      gyActiveName: 'first',
      pjvalue: '',
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
          value: 'one',
          label: '1#空压系统流程图'
        },
        {
          value: 'two',
          label: '2#空压系统流程图'
        },
        {
          value: 'three',
          label: '3#空压系统流程图'
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
      showNeibu: true,
      showVideo: false,
      showParam: false,
      showDuty: false,
      showHis: false,
      showParamName: '显示数据',
      showDutyName: '值班显示',
      paramss: [
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
          name: '轴承驱动温度',
          value: '40.8℃'
        },
        {
          name: '非轴承驱动温度',
          value: '40.8℃'
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
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
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
      var self = this
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
      height: 99%;
    }
    .el-tabs__content {
      height: 99%;
    }
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
.rblock{
  .el-tabs__nav{
    width: 100%;
  }
  .el-tabs__item{
    width: 33.4%;
    padding: 0px;
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
  height: 91%;
  width: 23%;
  position: absolute;
  right: 0px;
  top: 4.3%;
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
  }
  .itemdiv {
      width: 31%;
      margin-left: 1%;
      border: 1px solid #bbc8f8;
      height: 70px;
      text-align: center;
      margin-bottom: 1%;
    }
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
  background-image: url("../../../../assets/monitor/videoImg.png");
}
.Video_1 {
  background-image: url("../../../../assets/monitor/ved1.png");
}
.Video_2 {
  background-image: url("../../../../assets/monitor/ved2.png");
}
.Video_3 {
  background-image: url("../../../../assets/monitor/ved3.png");
}
.Video_4 {
  background-image: url("../../../../assets/monitor/ved4.png");
}
.Video_5 {
  background-image: url("../../../../assets/monitor/ved3.png");
}
.Video_6 {
  background-image: url("../../../../assets/monitor/ved2.png");
}
</style>
