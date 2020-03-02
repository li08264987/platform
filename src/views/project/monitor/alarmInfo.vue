<template>
  <div class="alarm">
    <el-dialog title="报警速览" :visible.sync="dialogTableVisible">
      <div style="height:36px;line-height: 36px;">
        <el-button>报警管理</el-button>
        <el-button>报警设置</el-button>
        <el-button  style="float:right;">导出</el-button>
        <el-button type="primary" style="float:right;" >搜索</el-button>
        <el-date-picker
          v-model="dateValue"
          type="daterange"
          range-separator="至"
          style="float:right;"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div style="padding:15px 0px;background:#F4F5F8;margin-top:20px;">
        <span>事件类型</span>
        <el-select style="width:150px;margin-right:10px;" v-model="value" placeholder="请选择事件类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span>事件级别</span>
        <el-select style="width:150px;margin-right:10px;" v-model="value" placeholder="请选择事件级别">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span>处理状态</span>
        <el-select style="width:150px;margin-right:10px;" v-model="value" placeholder="请选择处理状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span>关键字</span>
        <el-input style="width:150px;margin-right:10px;" v-model="input" placeholder="请输入关键字搜索"></el-input>
      </div>
      <div style="height:36px;line-height: 36px;">
        <span style="font-weight:bold;">报警次数(14)</span>
        <div style="float:right;">
          <span style="padding: 0px 8px;background: #28AA91;margin-right: 10px;"></span>
          <span>已处理</span>
          <span>10</span>
          <span style="padding: 0px 8px;background: #FF7D41;margin-right: 10px;"></span>
          <span>未处理</span>
          <span>5</span>
        </div>
      </div>
      <div style="display:flex">
        <div style="background: #28AA91;height:16px;flex:2"></div>
        <div style="background: #FF7D41;height:16px;flex:1"></div>
      </div>
      <el-table :data="gridData">
        <el-table-column property="time" label="添加时间" width='200'></el-table-column>
        <el-table-column property="name" label="变量名称" width='200'></el-table-column>
        <el-table-column property="value" label="报警值" ></el-table-column>
        <el-table-column property="value" label="报警限值"></el-table-column>
        <el-table-column property="type" label="报警类型"></el-table-column>
        <el-table-column property="level" label="报警级别"></el-table-column>
        <el-table-column property="value" label="状态"></el-table-column>
        <el-table-column property="operate" label="帮助" width='60'>
          <template slot-scope="scope">
            <el-button type="text" size="small" style="text-decoration:underline;">查看</el-button>
          </template>
        </el-table-column>
        <el-table-column property="operate" label="操作" width='60'>
          <template slot-scope="scope">
            <el-button type="text" size="small" style="text-decoration:underline;">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        style="margin-top: 10px;margin-left: -10px;"
        :total="200">
      </el-pagination>
    </el-dialog>
    <div class="secdialog">
      <el-dialog title="添加报警规则" :visible.sync="addRules">
        <el-form :model="form">
          <el-form-item label="项目名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="设定值" :label-width="formLabelWidth">
            <el-input v-model="form.value" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="单位" :label-width="formLabelWidth">
            <el-input v-model="form.unit" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否计算" :label-width="formLabelWidth">
            <el-radio-group v-model="radio">
              <el-radio :label="0">平均值</el-radio>
              <el-radio :label="1">差值</el-radio>
              <el-radio :label="2">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="点位编码" :label-width="formLabelWidth">
            <el-input v-model="form.code" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="点位编码2" :label-width="formLabelWidth">
            <el-input v-model="form.code2" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="判定时长" :label-width="formLabelWidth">
            <el-input v-model="form.time" autocomplete="off"></el-input>
            <span>Min</span>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  export default {
    name:"Rules",
    data() {
      return {
        dateValue:'',
        dialogTableVisible:true,
        addRules:false,
        formLabelWidth:'100px',
        radio:'',
        input:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        form: {
          name: '',
          value: '',
          code: '',
          code2: '',
          time: '',
          unit: '',
        },
        gridData: [{
          code: '01',
          name: '供水温度报警',
          level: '一级',
          value: '12℃',
          type:'上限',
          time:'2019-10-22 00:12:33',
        },{
          code: '01',
          name: '供水温度报警',
          level: '一级',
          value: '12℃',
          type:'上限',
          time:'2019-10-22 00:12:33',
        },{
          code: '01',
          name: '供水温度报警',
          level: '一级',
          value: '12℃',
          type:'上限',
          time:'2019-10-22 00:12:33',
        },{
          code: '01',
          name: '供水温度报警',
          level: '一级',
          value: '12℃',
          type:'上限',
          time:'2019-10-22 00:12:33',
        },{
          code: '01',
          name: '供水温度报警',
          level: '一级',
          value: '12℃',
          type:'上限',
          time:'2019-10-22 00:12:33',
        },{
          code: '01',
          name: '供水温度报警',
          level: '一级',
          value: '12℃',
          type:'上限',
          time:'2019-10-22 00:12:33',
        },{
          code: '01',
          name: '供水温度报警',
          level: '一级',
          value: '12℃',
          type:'上限',
          time:'2019-10-22 00:12:33',
        },{
          code: '01',
          name: '供水温度报警',
          level: '一级',
          value: '12℃',
          type:'上限',
          time:'2019-10-22 00:12:33',
        },{
          code: '01',
          name: '供水温度报警',
          level: '一级',
          value: '12℃',
          type:'上限',
          time:'2019-10-22 00:12:33',
        },{
          code: '01',
          name: '供水温度报警',
          level: '一级',
          value: '12℃',
          type:'上限',
          time:'2019-10-22 00:12:33',
        }],
      };
    },
    methods: {
      addNewRules(){
        this.addRules=true;
      }
    }
  };
</script>
<style lang="scss">
  .alarm{
    .el-dialog__header{
      background-color: #F9F9FB;
    }
    .el-table--medium th, .el-table--medium td{
      padding:5px 0px;
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
</style>