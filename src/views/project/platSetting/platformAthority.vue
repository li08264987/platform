<template>
  <div id="authorityManage">
    <!-- 顶部搜索栏 -->
    <div class="searchWord">
      <el-input v-model="filters.name" style="display: inline-block;width: 212px" placeholder="请输入角色名搜索" suffix-icon="el-icon-search" @input="handleFilter" />
    </div>

    <!-- 表格 -->
    <div class="table-container">
      <authorityTable
        ref="child"
        :height="750"
        :border="border"
        :data.sync="pageResult"
        @findPage="findPage"
        @handleEdit="handleEdit"
      />
    </div>

    <div class="tree-dialog-container">
      <el-dialog v-dialogDrag title="修改权限" width="40%" :visible.sync="dialogVisible" class="tree-dialog" @close="closeDialog">
        <el-tree
          ref="tree"
          :check-strictly="checkStrictly"
          :data="routes"
          :props="defaultProps"
          :default-checked-keys="defaultCheckedKeys"
          :node-key="nodeKey"
          show-checkbox
          class="authority-tree"
          @check="handleCheck"
        />
      </el-dialog>
    </div>

  </div>
</template>

<script>
import authorityTable from '@/views/project/platSetting/authority/authorityTable'
import { getAuthorityList, updataAuthorityOfRole } from '@/api/platSetting/authorityManage'
export default {
  components: {
    authorityTable
  },
  data() {
    return {
      loading: false,
      size: 'small',
      filters: {
        name: ''
      },
      border: true,
      pageRequest: { pageNum: 1, pageSize: 10 },
      pageResult: {},
      authorityList: [],
      operation: false,
      dialogVisible: false,
      dialogEdit: '',
      editLoading: false,
      checkStrictly: false,
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      nodeKey: 'value',
      routes: [],
      defaultCheckedKeys: [],
      clickRecord: {}
    }
  },
  computed: {

  },
  mounted() {
  },
  methods: {
    findPage: function(data) {
      if (data !== null) {
        this.pageRequest = data.pageRequest
      }
      this.pageRequest['filterRoleName'] = this.filters.name
      getAuthorityList(this.pageRequest).then(res => {
        this.pageResult.content = res.roleList
        this.pageResult.totalSize = res.roleListCount
        this.authorityList = res.authorityList
      }).then(data != null ? data.callback : '')
    },
    handleEdit: function(params) {
      this.dialogVisible = true
      this.checkStrictly = true
      this.clickRecord = params
      this.$nextTick(() => {
        var routes = this.getRootDatas(params)
        this.routes = routes
        // var temp = this.generateArr(routes)
        // this.$refs.tree.setCheckedNodes(temp)
        this.defaultCheckedKeys = []
        this.generateArr(routes, this.defaultCheckedKeys)
        this.checkStrictly = false
      })
    },
    generateArr(routes, defaultCheckedKeys) {
      routes.forEach(route => {
        if (route.checked === true) {
          defaultCheckedKeys.push(route.value)
        }

        if (route.children) {
          this.generateArr(route.children, defaultCheckedKeys)
        }
      })
    },
    getRootDatas(params) {
      var formData = []
      var roleAuthList = params.row.authority
      var authors = JSON.parse(JSON.stringify(this.authorityList))
      if (typeof authors !== 'undefined') {
        if (roleAuthList.length > 0) {
          for (let i = 0; i < roleAuthList.length; i++) {
            formData[roleAuthList[i].value] = roleAuthList[i].name
          }
        }
      }
      var rootNodesData = []
      var noRootNodesData = []
      for (let i = 0; i < authors.length; i++) {
        if (authors[i].PARENT_ID === null || authors[i].PARENT_ID === authors[i].AUTH_ID || !this.authContains(authors[i].PARENT_ID, authors)) {
          let checked = false
          if (formData[authors[i].AUTH_ID] !== undefined) {
            checked = true
          }
          rootNodesData.push({
            name: authors[i].NAME,
            value: authors[i].AUTH_ID,
            checked: checked
          })
        } else {
          noRootNodesData.push(authors[i])
        }
      }

      while (noRootNodesData.length > 0) {
        var noRootNodesData1 = JSON.parse(JSON.stringify(noRootNodesData))
        for (let i = 0; i < rootNodesData.length; i++) {
          goToLast(rootNodesData[i])
        }
        // eslint-disable-next-line no-inner-declarations
        function goToLast(node) {
          if (node.children) {
            for (let tt = 0; tt < node.children.length; tt++) {
              goToLast(node.children[tt])
            }
          } else {
            var fff = true
            for (let ttt = 0; ttt < noRootNodesData.length; ttt++) {
              if (noRootNodesData[ttt].PARENT_ID === node.value) {
                node.isParent = true
                var checked = false
                if (formData[noRootNodesData[ttt].AUTH_ID] !== undefined) {
                  checked = true
                }
                if (node.children) {
                  node.children.push({
                    name: noRootNodesData[ttt].NAME,
                    value: noRootNodesData[ttt].AUTH_ID,
                    checked: checked
                  })
                } else {
                  node.children = [{
                    name: noRootNodesData[ttt].NAME,
                    value: noRootNodesData[ttt].AUTH_ID,
                    checked: checked
                  }]
                }
                fff = false
                for (var tttt = 0; tttt < noRootNodesData1.length; tttt++) {
                  if (noRootNodesData1[tttt].AUTH_ID === noRootNodesData[ttt].AUTH_ID) {
                    noRootNodesData1.splice(tttt, 1)
                    break
                  }
                }
              }
            }
            if (fff) {
              node.isParent = false
              node.children = []
            }
          }
        }
        noRootNodesData = noRootNodesData1
      }
      return rootNodesData
    },
    authContains(pid, authors) {
      var contains = false
      for (var k = 0; k < authors.length; k++) {
        if (authors[k].AUTH_ID === pid) {
          contains = true
        }
      }
      return contains
    },
    closeDialog(params) {
      this.$refs.child.refreshPageRequest(this.pageRequest.pageNum)
    },
    handleCheck(data, params) {
      var checkedKeys = params.checkedKeys
      var halfCheckedKeys = params.halfCheckedKeys
      var resultKeys = checkedKeys.concat(halfCheckedKeys)
      var rowParam = JSON.parse(JSON.stringify(this.clickRecord.row))
      rowParam.AUTHORITY = resultKeys.join()
      updataAuthorityOfRole(rowParam).then(res => {

      }).catch(err => {
        console.log(err)
      })
    },
    handleFilter() {
      this.$refs.child.refreshPageRequest(this.pageRequest.pageNum)
    }
  }
}
</script>

<style lang="scss">
  .table-header,
  .table-header th {
    background-color: #F1F4FD !important;
  }

  #authorityManage{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 84px);

    .searchWord{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      height: 6vh;
      padding: 8px 15px;
      box-shadow: 0 2px 2px #e4e4e4;
      .el-button{
          height: 36px;
          background-color: #fff;
          color: #005aff;
          text-decoration: underline;
          border: unset;
          font-size: 14px;
          cursor: pointer;
          margin-left: 15px;
      }
      .el-input__inner{
        background: #F9F9FB;
        border: 1px solid #E2E4EA;
        border-radius: 16px;
      }
    }
    .table-container{
      width: 100%;
      height: 100%;
      padding: 20px 29px;
      background: rgba(244,245,248,1);
      .el-table__fixed-right{
        tbody td:last-child .el-button{
          background: #6C87EA;
          border-radius: 4px;
          color: #fff;
          border: unset;
        }
      }
      .tag-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .table-tag{
          margin: 3px 0 3px 10px;
          background: rgba(88,108,180,0.10);
          border: 1px solid rgba(88,108,180,0.30);
          font-family: MicrosoftYaHeiUI;
          font-size: 14px;
          color: #586CB4;
          letter-spacing: 0;
          text-align: left;
          line-height: 28px;
        }
      }
    }
    .tree-dialog{
      .el-dialog__header{
        background-color: #005aff;
        height: 42px;
        padding: 10px 20px 20px 20px;
        .el-dialog__title{
          color: #fff;
          font-size: 14px;
        }
        .el-dialog__headerbtn{
          top: 15px;
          .el-dialog__close{
            color: #fff;
          }
        }
      }

      .el-dialog__body{
        background-color: #FFF;
        padding: 20px 20px 0 20px;
        overflow-y: auto;
        height: 555px;
        .el-tree{
          height: 100%;
        }
        .el-form{
          display: flex;
          flex-direction: column;
          .row{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .el-form-item__label{
              line-height: 18px;
              font-size: 12px;
            }
          }
          .row-3{
            justify-content: flex-start;
            .el-form-item:nth-child(2){
              margin-left: 32px;
            }
            .el-form-item__content{
              display: flex;
              flex-direction: row;
              .el-button{
                border: unset;
                padding: unset;
                font-size: 20px;
                margin-left: 15px;
                background-color: #F9FAFB;
              }
            }
          }
          .el-input{
            width: 220px;
            height: 38px;
            .el-input__inner{
              background-color: #fff;
              border: 1px solid #C5CAD5;
              border-radius: 2px;
              color: #111A34;
              font-size: 14px;
            }
          }
        }
      }
      .el-dialog__footer{
        background-color: #F9FAFB;
        padding-top: 0px;
        .el-button--primary{
          text-align: center;
          width: 100px;
          height: 32px;
          background-color: #005aff;
          color: #FFFFFF;
          line-height: 12px;
          font-size: 16px;
          letter-spacing: 1.6px;
          text-decoration: none;
          border-radius: 4px;
          border: unset;
        }
        .el-button--default{
          border: 1px solid #858A9C;
          width: 100px;
          height: 32px;
          line-height: 12px;
          text-decoration: none;
          border-radius: 4px;
          font-size: 16px;
          letter-spacing: 1.6px;
        }
      }
    }
  }

</style>
<style lang='scss' scoped>
</style>
