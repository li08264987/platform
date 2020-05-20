<template>
  <div class="rules">
    <el-dialog v-dialogDrag title="附件列表" :visible.sync="dialogTableVisible">
      <el-button type="primary" icon="el-icon-search" style="float:right;" @click="getSearch">搜索</el-button>
      <el-input v-model="name" placeholder="请输入内容" style="float:right;" />
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="CODE"
          label="编号"
        />
        <el-table-column
          prop="F_NAME"
          label="文件名称"
        />
        <el-table-column
          prop="TIME"
          label="添加时间"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="120"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click.native.prevent="dowload(scope.$index, tableData)"
            >
              下载
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :total="count"
        @current-change="getFuJianList"
      /></el-dialog>
  </div>
</template>
<script>
import monitorapi from '@/api/monitor/monitor'
export default {
  name: 'RunInfo',
  props: {
    code: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      dialogTableVisible: false,
      tableData: [],
      page: 1,
      limit: 10,
      count: 0,
      name: ''
    }
  },
  watch: {
    code: function(newVal, oldVal) {
      this.code = newVal
      this.getFuJianList(this.page)
    }
  },
  mounted() {
  },
  methods: {
    dowload(index, data) {
      var form = document.createElement('form') // 创建一个 form
      document.body.appendChild(form)// 添加到 body 中
      var input1 = document.createElement('input') // 创建一个输入
      input1.type = 'text'
      input1.name = 'name'
      input1.value = data[index].F_NAME
      var input2 = document.createElement('input') // 创建一个输入
      input2.type = 'text'
      input2.name = 'path'
      input2.value = data[index].F_PATH
      form.appendChild(input1)
      form.appendChild(input2)
      form.method = 'POST' // form 的提交方式
      form.action = process.env.VUE_APP_BASE_API_JAVA + '/monitor/download'// form 提交路径
      form.submit() // 对该 form 执行提交
      form.remove()
    },
    getSearch() {
      this.getFuJianList(this.page)
    },
    getFuJianList(val) {
      const self = this
      monitorapi.getFuJianList({
        'page': val,
        'limit': self.limit,
        'code': this.code,
        'name': this.name
      }).then(res => {
        if (res.state === 1) {
          this.tableData = res.data
          this.count = res.count
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss">
.el-dialog__header{
  text-align: left;
}
</style>
