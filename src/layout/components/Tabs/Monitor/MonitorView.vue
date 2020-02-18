<template>
  <div style="height:99%;">
    <div class="tools">
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
      <el-button>导出</el-button>
    </div>
    <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
      <el-tab-pane label="空压系统" name="first">
        <div style="height:99%;">
          <div id="intools">
            <el-button icon="el-icon-arrow-left" style="float:left;margin-left:20px;">上一页</el-button>
            <i class="el-icon-camera-solid" />
            <span @click="showNeiBu">2D模式</span>
            <i class="el-icon-camera-solid" />
            <span @click="showVideos">视频监控</span>
            <i class="el-icon-platform-eleme" />
            <span @click="showParamPanel">{{ showParamName }}</span>
            <i class="el-icon-s-tools" />
            <span>数据设置</span>
            <i class="el-icon-s-custom" />
            <span>值班显示</span>
            <el-button style="float:right;margin-right:20px;">下一页<i class="el-icon-arrow-right el-icon--right" /></el-button>
          </div>
          <div v-show="showNeibu" style="height:99%">
            <svg id="backgroud" viewBox="-150 -20 1800 920" version="1.1" xmlns="http://www.w3.org/2000/svg" v-html="html"></svg>
            </svg id="backgroud" viewbox="-150></div>
          <div v-show="showParam" class="rightparam">
            <div style="height:6%;display:flex;align-items:center;justify-content:center;font-weight:bold">ZH-10000+离心机通讯参数</div>
            <div class="righttop">
              <div v-for="(element,index) in params" :key="index" class="itemdiv">
                <div class="valuediv">
                  {{ element.value }}
                </div>
                <div class="namediv">
                  {{ element.name }}
                </div>
              </div>
            </div>
            <div class="rightbott">
              <div v-for="(element,index) in params2" :key="index" class="itemdiv">
                <div class="valuediv">
                  {{ element.value }}
                </div>
                <div class="namediv">
                  {{ element.name }}
                </div>
              </div>
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
                <el-button type="primary" @click="showHisVideo">查看回放</el-button>
              </div>
            </div>
            <div>
              <div class="condiv Video_2" />
              <div class="conbott">
                <div class="leftdiv">
                  <span>一号摄像头</span>
                  <label>2019/10/01至2020/20/29</label>
                </div>
                <el-button type="primary" @click="showHisVideo">查看回放</el-button>
              </div>
            </div>
            <div>
              <div class="condiv Video_3" />
              <div class="conbott">
                <div class="leftdiv">
                  <span>一号摄像头</span>
                  <label>2019/10/01至2020/20/29</label>
                </div>
                <el-button type="primary" @click="showHisVideo">查看回放</el-button>
              </div>
            </div>
            <div>
              <div class="condiv Video_4" />
              <div class="conbott">
                <div class="leftdiv">
                  <span>一号摄像头</span>
                  <label>2019/10/01至2020/20/29</label>
                </div>
                <el-button type="primary" @click="showHisVideo">查看回放</el-button>
              </div>
            </div>
            <div>
              <div class="condiv Video_5" />
              <div class="conbott">
                <div class="leftdiv">
                  <span>一号摄像头</span>
                  <label>2019/10/01至2020/20/29</label>
                </div>
                <el-button type="primary" @click="showHisVideo">查看回放</el-button>
              </div>
            </div>
            <div>
              <div class="condiv Video_6" />
              <div class="conbott">
                <div class="leftdiv">
                  <span>一号摄像头</span>
                  <label>2019/10/01至2020/20/29</label>
                </div>
                <el-button type="primary" @click="showHisVideo">查看回放</el-button>
              </div>
            </div>
          </div>
          <div v-show="showHis" style="display:flex;height:92%">
            <div class="videoPlay" />
            <div style="flex:2;height:100%;overflow:auto;height:100%;">
              <div class="Video_1" style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;" />
              <div class="Video_2" style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;" />
              <div class="Video_3" style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;" />
              <div class="Video_4" style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;" />
              <div class="Video_5" style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;" />
              <div class="Video_6" style="width:90%;height:25%;margin-left:5%;margin-bottom:20px;" />
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="空压机" name="second" />
      <el-tab-pane label="高心空压机" name="third" />
    </el-tabs>
  </div>
</template>
<script>
import svg from '../../../../../src/api/beibu'
export default {
  name: 'MonitorView',
  data() {
    return {
      html: svg,
      activeName: 'first',
      options: [{
        value: 'year',
        label: '年'
      }, {
        value: 'month',
        label: '月'
      }, {
        value: 'day',
        label: '日'
      }],
      dateinput: '',
      typeinput: '',
      selectvalue: '',
      showNeibu: true,
      showVideo: false,
      showParam: false,
      showHis: false,
      showParamName: '隐藏参数',
      params: [{
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
      params2: [{
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
        this.showParamName = '隐藏参数'
      } else {
        this.showParam = true
        this.showParamName = '显示参数'
      }
    }
  }
}
</script>
<style lang="scss">
  .tabs{
    height: 99%;
    .el-tabs__header{
      width: 250px;
    }
    .el-tab-pane{
      height: 99%;
    }
    .el-tabs__content{
      height: 99%;
    }
  }
  .el-input{
    width: 200px;
  }
</style>
<style scoped lang="scss">
  .tools{
    position: absolute;
    right: 9px;
    margin-top: 5px;
  }
  .rightparam{
  height:93%;
  width:400px;
  position: absolute;
  right: 0px;
  top: 5%;
  background:white;
  border:1px solid #E4E9F0;
  text-align: center;
    .righttop{
      height:65%;
      display: flex;
      flex-wrap: wrap;
      align-content:space-around;
      .itemdiv{
        width: 31%;
        margin-left: 1%;
        border:1px solid #BBC8F8;
        height:70px;
        text-align: center;
        .valuediv{
          height: 40px;
          line-height: 40px;
          background: #F6F8FE;
          font-size: 20px;
          font-weight: bold;
        }
        .namediv{
          height: 30px;
          line-height: 30px;
          font-size: 15px;
        }
      }
    }
    .rightbott{
      height:30%;
      display: flex;
      flex-wrap: wrap;
      align-content:space-around;
      .itemdiv{
        width: 31%;
        margin-left: 1%;
        border:1px solid #BBC8F8;
        height:70px;
        text-align: center;
        .valuediv{
          height: 40px;
          line-height: 40px;
          background: #F6F8FE;
          font-size: 20px;
          font-weight: bold;
        }
        .namediv{
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
  #intools:after{
     display:block;
     content:'';
     clear:both;
     height:0;
     overflow:hidden;
 }
 #intools{
   text-align: center;
   height: 40px;
   line-height: 40px;
   border:1px solid #E4E9F0;
   background: #F1F6FD;
   i{
     margin-left: 20px;
   }
   &:hover{
     cursor: pointer;
   }
 }
 .content{
    height: 99%;
    display: flex;
    justify-content:space-around;
    align-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    div{
      width:30%;
      height: 42%;
      border: 1px solid #41719C;
      border-radius: 5px;
      span{
        font-size: 18px;
        font-weight: bold;
      }
      .condiv{
        width: 96%;
        height: 80%;
        border: 0px solid #41719C;
        border-radius: 0px;
        margin-left: 2%;
        margin-top: 5px;
      }
      .conbott{
        width: 90%;
        height: 20%;
        border: 0px solid #41719C;
        border-radius: 0px;
        margin-left: 5%;
        margin-top: 5px;
        .leftdiv{
          float: left;
          width: 78%;
          height:100%;
          border:0px;
          span{
            display: block;
          }
        }
      }
    }
}
.videoPlay{
  flex:8;
  height:100%;
  background-image: url("../../../../assets/monitor/videoImg.png");
}
.Video_1{
  background-image: url("../../../../assets/monitor/ved1.png");
}
.Video_2{
  background-image: url("../../../../assets/monitor/ved2.png");
}
.Video_3{
  background-image: url("../../../../assets/monitor/ved3.png");
}
.Video_4{
  background-image: url("../../../../assets/monitor/ved4.png");
}
.Video_5{
  background-image: url("../../../../assets/monitor/ved3.png");
}
.Video_6{
  background-image: url("../../../../assets/monitor/ved2.png");
}
</style>
