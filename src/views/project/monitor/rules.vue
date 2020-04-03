<template>
  <div class="rules">
    <el-dialog title="报警规则" :visible.sync="dialogTableVisible">
      <div style="height:36px;line-height: 36px;">
        <span style="font-weight:bold;font-size:16px;">已有报警规则</span>
        <el-button type="primary" style="float:right;" @click="addNewRules">新建规则</el-button>
      </div>
      <el-table :data="gridData">
        <el-table-column property="code" label="序号" />
        <el-table-column property="name" label="报警名称" />
        <el-table-column property="level" label="级别" />
        <el-table-column property="value" label="设定值" />
        <el-table-column property="type" label="类型" />
        <el-table-column property="time" label="添加时间" width="200" />
        <el-table-column property="operate" label="操作选项">
          <template slot-scope="scope">
            <el-button type="text" size="small" style="text-decoration:underline;" :row-data="scope.row">编辑</el-button>
            <el-button type="text" size="small" style="text-decoration:underline;color:#E68284">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        style="margin-top: 10px;margin-left: -10px;"
        :total="200"
      />
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
export default {
  name: 'Rules',
  data() {
    return {
      dialogTableVisible: false,
      addRules: false,
      formLabelWidth: '100px',
      radio: '',
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
  methods: {
    addNewRules() {
      this.addRules = true
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
</style>
