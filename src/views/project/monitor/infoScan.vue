<template>
  <div class="rules">
    <el-dialog v-dialogDrag title="1#螺杆空压机设备信息" :visible.sync="dialogTableVisible">
      <div style="display:flex;">
        <div style="width:50%;padding:10px;">
          <div class="imgbig" style="height:70%;border: 1px dashed #ccc;" />
          <div style="height:30%;display:flex;justify-content: space-evenly;margin-top: 20px;">
            <div class="img1" />
            <div class="img2" />
            <div class="img3" />
          </div>
        </div>
        <div style="width:50%;">
          <div style="font-size: 18px;font-weight: bold;">1#螺杆空压机</div>
          <div style="border-left:2px solid black;font-weight:bold;margin:10px 0px;padding-left:10px;">基本参数</div>
          <div class="table">
            <div><span>设备品牌</span><span>寿力</span></div>
            <div><span>设备型号</span><span>ZH001</span></div>
            <div><span>设备参数</span><span>140m³/min 740kw/kv</span></div>
            <div><span>安装位置</span><span>空压组一层东侧</span></div>
          </div>
          <div style="border-left:2px solid black;font-weight:bold;margin:10px 0px;;padding-left:10px;">运行数据</div>
          <div>
            <div style="display:flex;padding:10px 0px;border-top:1px dashed #ccc;border-bottom:1px dashed #ccc">
              <div style="width:50%"><div>运行时间(h)</div><div>234</div></div>
              <div style="width:50%"><div>当前能效</div><div>7.3kw/(m³/min)</div></div>
            </div>
            <div style="display:flex;padding:10px 0px;border-top:1px dashed #ccc;border-bottom:1px dashed #ccc;margin-top:-1px;">
              <div style="width:50%"><div>故障次数</div><div>45</div></div>
              <div style="width:50%"><div>距离下次维保</div><div>15天20小时</div></div>
            </div>
          </div>
          <div style="margin-top:10px;display:flex">
            <span style="width:33%;display:inline-block;text-decoration:underline;color:#23AAF2">查看说明书></span>
            <span style="width:33%;display:inline-block;text-decoration:underline;color:#23AAF2">设备详情></span>
            <span style="width:33%;display:inline-block;text-decoration:underline;color:#23AAF2">查看图纸></span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'RunInfo',
  data() {
    return {
      dialogTableVisible: false,
      addRules: false,
      formLabelWidth: '100px',
      gridData: [{
        time: '2019-10-22 00:12:33',
        code: '01',
        operate: '手动启动2#空压机'
      }, {
        time: '2019-10-22 00:12:33',
        code: '01',
        operate: '手动启动2#空压机'
      }, {
        time: '2019-10-22 00:12:33',
        code: '01',
        operate: '手动启动2#空压机'
      }, {
        time: '2019-10-22 00:12:33',
        code: '01',
        operate: '手动启动2#空压机'
      }, {
        time: '2019-10-22 00:12:33',
        code: '01',
        operate: '手动启动2#空压机'
      }, {
        time: '2019-10-22 00:12:33',
        code: '01',
        operate: '手动启动2#空压机'
      }, {
        time: '2019-10-22 00:12:33',
        code: '01',
        operate: '手动启动2#空压机'
      }, {
        time: '2019-10-22 00:12:33',
        code: '01',
        operate: '手动启动2#空压机'
      }, {
        time: '2019-10-22 00:12:33',
        code: '01',
        operate: '手动启动2#空压机'
      }, {
        time: '2019-10-22 00:12:33',
        code: '01',
        operate: '手动启动2#空压机'
      }]
    }
  },
  methods: {
    addNewRules() {
      this.addRules = true
    }
  }
}
</script>
<style lang="scss">
  .rules{
    .titlecon{
      display: flex;
      .contain{
        width: 25%;
        text-align: center;
        padding: 15px 0px;
        .convalue{
          font-size: 20px;
          font-weight: bold;
          padding-left: 20px;
        }
      }
    }
    .tab2{
      .titlecon{
        display: flex;
        .contain{
          width: 20%;
          text-align: center;
          padding: 15px 0px;
          .convalue{
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            padding-top: 10px;
            padding-left: 0px;
          }
        }
      }
    }
    .tab3{
      .titlecon{
        display: flex;
        flex-wrap: wrap;
        .contain{
          width: 33%;
          text-align: center;
          padding: 15px 0px;
          span{
            font-weight: bold;
          }
          .convalue{
            font-size: 14px;
            font-weight: normal;
            text-align: center;
            padding-top: 10px;
            padding-left: 0px;
          }
        }
      }
    }
  }
</style>
<style scoped lang="scss">
  .table{
    span{
      display: inline-block;
      width: 50%;
      border: 1px solid #EAECF0;
      padding: 5px 10px;
      margin-top: -1px;
      margin-left: -1px;
    }
  }
  .imgbig{
    background-image: url("../../../assets/monitor/img1.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
  }
  .img1{
    background-image: url("../../../assets/monitor/img1.png");
    background-size: cover;
    width: 30%;
    height: 100%;
  }
  .img2{
    background-image: url("../../../assets/monitor/img2.png");
    background-size: cover;
    width: 30%;
    height: 100%;
  }
  .img3{
    background-image: url("../../../assets/monitor/img3.png");
    background-size: cover;
    width: 30%;
    height: 100%;
  }
  .title{
    font-weight: bold;
  }
  .rightdetail{
    float: right;
    span{
      text-decoration: underline
    }
    &:hover{
      cursor: pointer;
    }
  }
</style>
