<template>
  <div class="rules">
    <el-dialog v-dialogDrag title="冷却器设备运行信息" :visible.sync="dialogTableVisible">
      <el-tabs type="border-card">
        <el-tab-pane label="运行参数">
          <div class="titlecon">
            <div class="contain">
              <span>运行状态</span><span class="convalue">开启</span>
            </div>
            <div class="contain">
              <span>控制模式</span><span class="convalue">自动</span>
            </div>
            <div class="contain">
              <span>压力反馈</span><span class="convalue">5bar</span>
            </div>
            <div class="contain">
              <span>是否正常</span><span class="convalue">正常</span>
            </div>
          </div>
          <el-table :data="gridData">
            <el-table-column property="time" label="时间" width="200" />
            <el-table-column property="code" label="操作人员" />
            <el-table-column property="operate" label="操作记录" />
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            style="margin-top: 10px;margin-left: -10px;"
            :total="200"
          />
        </el-tab-pane>
        <el-tab-pane label="运维管理" class="tab2">
          <div class="rightdetail"><span>详情</span>></div>
          <div class="title">运维数据</div>
          <div class="titlecon">
            <div class="contain">
              <span>正常运行(h)</span><div class="convalue">845</div>
            </div>
            <div class="contain">
              <span>故障次数(次)</span><div class="convalue">845</div>
            </div>
            <div class="contain">
              <span>故障处理(次)</span><div class="convalue">845</div>
            </div>
            <div class="contain">
              <span>保养次数(次)</span><div class="convalue">845</div>
            </div>
            <div class="contain">
              <span>维修次数(次)</span><div class="convalue">845</div>
            </div>
          </div>
          <div class="rightdetail"><span>详情</span>></div>
          <div class="title">近期报警</div>
          <el-table :data="gridData">
            <el-table-column property="code" label="报警序号" width="100" />
            <el-table-column property="time" label="报警时间" width="200" />
            <el-table-column property="operate" label="报警内容" />
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            style="margin-top: 10px;margin-left: -10px;"
            :total="200"
          />
        </el-tab-pane>
        <el-tab-pane label="设备百科" class="tab3">
          <div class="titlecon">
            <div class="contain">
              <span>设备名称</span><div class="convalue">1号空压机</div>
            </div>
            <div class="contain">
              <span>设备型号</span><div class="convalue">ZH1000</div>
            </div>
            <div class="contain">
              <span>设备参数</span><div class="convalue">140m³/min 740kw/10kv</div>
            </div>
            <div class="contain">
              <span>设备品牌</span><div class="convalue">寿力</div>
            </div>
            <div class="contain">
              <span>安装位置</span><div class="convalue">空压站1楼</div>
            </div>
            <div class="contain">
              <span>安装时间</span><div class="convalue">2020/02/04</div>
            </div>
          </div>
          <div class="rightdetail"><span>查看说明书</span>></div>
        </el-tab-pane>
      </el-tabs>
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
