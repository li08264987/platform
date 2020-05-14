<template>
  <div class="alarm">
    <el-dialog v-dialogDrag title="数据录入" :visible.sync="dialogTableVisible">
      <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
        <el-tab-pane label="基础信息录入" name="first">
          <div style="display:flex;flex-wrap:wrap">
            <div class="items">
              <div>设备编号</div>
              <el-input v-model="basis.code" :disabled="true" />
            </div>
            <div class="items">
              <div>设备名称</div>
              <el-input v-model="basis.name" placeholder="请输入名称" />
            </div>
            <div class="items">
              <div>设备品牌</div>
              <el-input v-model="basis.brand" placeholder="请输入品牌" />
            </div>
            <div class="items">
              <div>设备型号</div>
              <el-input v-model="basis.type" placeholder="请输入型号" />
            </div>
            <div class="items">
              <div>参数描述</div>
              <el-input v-model="basis.describe" placeholder="请输入描述" />
            </div>
            <div class="items">
              <div>安装位置</div>
              <el-input v-model="basis.location" placeholder="请输入安装位置" />
            </div>
          </div>
          <div>
            <div class="title">设备详情</div>
            <el-input
              v-model="basis.detail"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入详情"
            />
          </div>
          <div>
            <div class="title">文件上传</div>
            <div style="display:flex;justify-content:space-around">
              <div style="width:49%;border:1px dashed #008040;min-height:200px">
                <el-upload
                  ref="uploadsms"
                  class="upload-demo"
                  :action="urlsms"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="smsfileList"
                  :auto-upload="false"
                  :multiple="true"
                  :on-change="changeFile"
                  :data="basis"
                  :on-success="smsSuccess"
                  :limit="10"
                  :before-upload="uploadFile"
                >
                  <el-button slot="trigger" size="small" type="primary">选取说明书</el-button>
                </el-upload>
              </div>
              <div style="width:49%;border:1px dashed #008040;min-height:200px">
                <el-upload
                  ref="uploadtz"
                  class="upload-demo"
                  :action="urltz"
                  :on-preview="handlePreview2"
                  :on-remove="handleRemove2"
                  :file-list="tzfileList"
                  :auto-upload="false"
                  :multiple="true"
                  :data="basis"
                  :on-change="changeFile2"
                  :on-success="tZSuccess"
                  :limit="10"
                  :before-upload="uploadFile2"
                >
                  <el-button slot="trigger" size="small" type="primary">选取图纸</el-button>
                </el-upload>
              </div>
            </div>
            <el-button type="primary" style="margin-top:20px;float:right" @click="subBasis()">提交</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="报警设置" name="second">
          <div style="display:flex;flex-wrap:wrap">
            <div class="items">
              <div>设备编号</div>
              <el-input v-model="alarm.code" :disabled="true" />
            </div>
            <div class="items">
              <div>报警名称</div>
              <el-input v-model="alarm.name" placeholder="请输入名称" />
            </div>
            <div class="items">
              <div>变量字段</div>
              <el-input v-model="alarm.param" placeholder="请输入变量字段" />
              <!-- <el-select  v-model="alarm.param" placeholder="请选择变量名">
                <el-option
                  v-for="item in params"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select> -->
            </div>
            <div class="items">
              <div>级别</div>
              <el-input v-model="alarm.level" placeholder="请输入级别" />
            </div>
            <div class="items">
              <div>报警上限</div>
              <el-input v-model="alarm.top" placeholder="请输入报警上线" />
            </div>
            <div class="items">
              <div>单位</div>
              <el-input v-model="alarm.unit" placeholder="请输入单位" />
            </div>
          </div>
          <el-button type="primary" style="margin-top:20px;float:right" @click="subAlarm()">提交</el-button>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
import api from '@/api/dataentry/dataentry'
export default {
  name: 'Rules',
  props: {
    code: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      firstSub: false,
      activeName: 'first',
      formLabelWidth: '100px',
      dialogTableVisible: false,
      smsfileList: [],
      count: 0,
      tzfileList: [],
      urlsms: process.env.VUE_APP_BASE_API_JAVA + 'dataentry/subbasissms',
      urltz: process.env.VUE_APP_BASE_API_JAVA + 'dataentry/subbasistz',
      files: [],
      basis: {
        code: '',
        name: '',
        type: '',
        brand: '',
        describe: '',
        location: '',
        detail: ''
      },
      alarm: {
        code: '',
        name: '',
        param: '',
        level: '',
        top: '',
        unit: ''
      },
      params: [{
        value: 'temp',
        label: '温度'
      }, {
        value: 'press',
        label: '压力'
      }, {
        value: 'flow',
        label: '流量'
      }]
    }
  },
  watch: {
    code: function(newVal, oldVal) {
      this.basis.code = newVal
      this.alarm.code = newVal
    }
  },
  methods: {
    addNewRules() {
      this.addRules = true
    },
    handleClick() {
    },
    subBasis() {
      this.$refs.uploadsms.submit()
    },
    smsSuccess() {
      if (!this.firstSub) {
        this.$refs.uploadtz.submit()
        this.firstSub = true
      }
    },
    tZSuccess() {
      this.count++
      if (this.count === this.tzfileList.length) {
        alert('上传成功!')
        this.count = 0
        this.basis.name = ''
        this.basis.type = ''
        this.basis.brand = ''
        this.basis.describe = ''
        this.basis.detail = ''
        this.basis.location = ''
        this.$refs.uploadsms.clearFiles()
        this.$refs.uploadtz.clearFiles()
      }
    },
    subAlarm() {
      api.subAlarm(this.alarm).then(res => {
        if (res.state === 1) {
          alert('提交成功!')
          this.alarmname = ''
          this.alarmparam = ''
          this.alarmlevel = ''
          this.alarmtop = ''
          this.alarmunit = ''
        } else {
          alert('提交失败!')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    handleRemove(file, fileList) {
      this.smsfileList = fileList
    },
    handlePreview(file) {
    },
    uploadFile(file) {
    },
    changeFile(file, fileList) {
      this.smsfileList = fileList
    },
    handleRemove2(file, fileList) {
      this.tzfileList = fileList
    },
    handlePreview2(file) {
    },
    uploadFile2(file) {
    },
    changeFile2(file, fileList) {
      this.tzfileList = fileList
    }
  }
}
</script>
<style lang="scss">
  .alarm{
    .el-dialog__header{
      background-color: #F9F9FB;
      text-align:left;
    }
    .el-table--medium th, .el-table--medium td{
      padding:5px 0px;
    }
    .el-dialog__body{
      padding-top: 0px;
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
  .items{
    width:33.3%;
    text-align:left;
    div{
      padding: 5px 0px;
    }
  }
  .title{
    padding: 5px 0px;
    text-align:left;
  }
</style>
<style scoped lang="scss">
</style>
