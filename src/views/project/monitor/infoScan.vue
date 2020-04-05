<template>
<<<<<<< HEAD
  <div class="rules">
    <el-dialog title="1#螺杆空压机设备信息" :visible.sync="dialogTableVisible">
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
=======
  <div class="infoScan">
    <rules ref="showRules" />
    <el-dialog title="信息速览" :visible.sync="dialogTableVisible" @opened="initChart">
      <div style="height:36px;line-height: 36px;">
        <el-select v-model="typeValue" style="width:150px;margin-right:10px;">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button v-show="typeValue=='alarm'" type="primary" icon="el-icon-s-tools" @click="showAlarmRules">报警设置</el-button>
        <el-button style="float:right;">导出</el-button>
        <el-button type="primary" style="float:right;">搜索</el-button>
        <el-date-picker v-model="dateValue" type="daterange" range-separator="至" style="float:right;" start-placeholder="开始日期" end-placeholder="结束日期" />
      </div>
      <div v-show="typeValue=='his'" id="chartdiv" style="height:500px;width:100%;" />
      <div v-show="typeValue=='alarm'">
        <div style="padding:15px 0px;background:#F4F5F8;margin-top:20px;">
          <span>事件类型</span>
          <el-select v-model="value" style="width:150px;margin-right:10px;" placeholder="请选择事件类型">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <span>事件级别</span>
          <el-select v-model="value" style="width:150px;margin-right:10px;" placeholder="请选择事件级别">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <span>处理状态</span>
          <el-select v-model="value" style="width:150px;margin-right:10px;" placeholder="请选择处理状态">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <span>关键字</span>
          <el-input v-model="input" style="width:150px;margin-right:10px;" placeholder="请输入关键字搜索" />
        </div>
        <div style="height:36px;line-height: 36px;">
          <span style="font-weight:bold;">报警次数(14)</span>
          <div style="float:right;">
            <span style="padding: 0px 8px;background: #28AA91;margin-right: 10px;" />
            <span>已处理</span>
            <span>10</span>
            <span style="padding: 0px 8px;background: #FF7D41;margin-right: 10px;" />
            <span>未处理</span>
            <span>5</span>
          </div>
        </div>
        <div style="display:flex">
          <div style="background: #28AA91;height:16px;flex:2;" />
          <div style="background: #FF7D41;height:16px;flex:1;" />
        </div>
        <el-table :data="gridData">
          <el-table-column property="time" label="添加时间" width="200" />
          <el-table-column property="name" label="变量名称" width="200" />
          <el-table-column property="value" label="报警值" />
          <el-table-column property="value" label="报警限值" />
          <el-table-column property="type" label="报警类型" />
          <el-table-column property="level" label="报警级别" />
          <el-table-column property="value" label="状态" />
          <el-table-column property="operate" label="帮助" width="60">
            <template>
              <el-button type="text" size="small" style="text-decoration:underline;">查看</el-button>
            </template>
          </el-table-column>
          <el-table-column property="operate" label="操作" width="60">
            <template>
              <el-button type="text" size="small" style="text-decoration:underline;">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" style="margin-top: 10px;margin-left: -10px;" :total="200" />
      </div>
    </el-dialog>
    <div class="secdialog">
      <el-dialog title="添加报警规则" :visible.sync="addRules">
        <el-form :model="form">
          <el-form-item label="项目名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="设定值" :label-width="formLabelWidth">
            <el-input v-model="form.value" autocomplete="off" />
          </el-form-item>
          <el-form-item label="单位" :label-width="formLabelWidth">
            <el-input v-model="form.unit" autocomplete="off" />
          </el-form-item>
          <el-form-item label="是否计算" :label-width="formLabelWidth">
            <el-radio-group v-model="radio">
              <el-radio :label="0">平均值</el-radio>
              <el-radio :label="1">差值</el-radio>
              <el-radio :label="2">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="点位编码" :label-width="formLabelWidth">
            <el-input v-model="form.code" autocomplete="off" />
          </el-form-item>
          <el-form-item label="点位编码2" :label-width="formLabelWidth">
            <el-input v-model="form.code2" autocomplete="off" />
          </el-form-item>
          <el-form-item label="判定时长" :label-width="formLabelWidth">
            <el-input v-model="form.time" autocomplete="off" />
            <span>Min</span>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import rules from './rules'
export default {
  name: 'InfoScan',
  components: {
    rules
  },
  data() {
    return {
      chart: null,
      dateValue: '',
      addRules: false,
      dialogTableVisible: false,
      formLabelWidth: '100px',
      radio: '',
      input: '',
      value: '',
      options: [{
        value: 'his',
        label: '历史曲线'
      },
      {
        value: 'alarm',
        label: '报警管理'
      }],
      typeValue: 'his',
      form: {
        name: '',
        value: '',
        code: '',
        code2: '',
        time: '',
        unit: ''
      },
      gridData: [{
        code: '01',
        name: '供水温度报警',
        level: '一级',
        value: '12℃',
        type: '上限',
        time: '2019-10-22 00:12:33'
      }, {
        code: '01',
        name: '供水温度报警',
        level: '一级',
        value: '12℃',
        type: '上限',
        time: '2019-10-22 00:12:33'
      }, {
        code: '01',
        name: '供水温度报警',
        level: '一级',
        value: '12℃',
        type: '上限',
        time: '2019-10-22 00:12:33'
      }, {
        code: '01',
        name: '供水温度报警',
        level: '一级',
        value: '12℃',
        type: '上限',
        time: '2019-10-22 00:12:33'
      }, {
        code: '01',
        name: '供水温度报警',
        level: '一级',
        value: '12℃',
        type: '上限',
        time: '2019-10-22 00:12:33'
      }, {
        code: '01',
        name: '供水温度报警',
        level: '一级',
        value: '12℃',
        type: '上限',
        time: '2019-10-22 00:12:33'
      }, {
        code: '01',
        name: '供水温度报警',
        level: '一级',
        value: '12℃',
        type: '上限',
        time: '2019-10-22 00:12:33'
      }, {
        code: '01',
        name: '供水温度报警',
        level: '一级',
        value: '12℃',
        type: '上限',
        time: '2019-10-22 00:12:33'
      }, {
        code: '01',
        name: '供水温度报警',
        level: '一级',
        value: '12℃',
        type: '上限',
        time: '2019-10-22 00:12:33'
      }, {
        code: '01',
        name: '供水温度报警',
        level: '一级',
        value: '12℃',
        type: '上限',
        time: '2019-10-22 00:12:33'
      }]
    }
  },
  mounted() {
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    showAlarmRules() {
      this.$refs.showRules.dialogTableVisible = true
    },
    initChart() {
      this.chart = echarts.init(document.getElementById('chartdiv'))
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        legend: {
          top: 20,
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['供水温度', '回水温度'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        grid: {
          top: 100,
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
        }],
        yAxis: [{
          type: 'value',
          name: '(℃)',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: '供水温度',
          type: 'line',
          smooth: false,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12
            }
          },
          data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
        }, {
          name: '回水温度',
          type: 'line',
          smooth: false,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 136, 212, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(0, 136, 212, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(0,136,212)',
              borderColor: 'rgba(0,136,212,0.2)',
              borderWidth: 12
            }
          },
          data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
        }]
      })
>>>>>>> 6a521f4c984f2d6ab3424f6707c155cb01e0601d
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
<<<<<<< HEAD
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
=======
>>>>>>> 6a521f4c984f2d6ab3424f6707c155cb01e0601d
</style>
