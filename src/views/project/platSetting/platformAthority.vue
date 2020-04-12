<template>
  <div id="authorityManage">
    <!-- 顶部搜索栏 -->
    <div class="searchWord">
      <el-input v-model="filters.name" style="display: inline-block;width: 212px" placeholder="请输入角色名搜索" suffix-icon="el-icon-search" />
    </div>

    <!-- 表格 -->
    <div class="table-container">
      <el-table
        v-loading="loading"
        style="width:100%;font-size: 14px"
        :data="pageResult.content"
        :highlight-current-row="true"
        :border="true"
        :stripe="true"
        :show-overflow-tooltip="true"
        :max-height="800"
        :height="750"
        :size="size"
        align="left"
        :header-cell-style="{background:'#F1F4FD'}"
      >
        <el-table-column
          prop="roleCode"
          label="角色编号"
          min-width="50"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="roleName"
          label="角色名称"
          min-width="50"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="authority"
          label="权限"
          header-align="center"
          align="center"
        >
          <template slot-scope="scope">
            <div class="tag-container">
              <el-tag v-for="item in scope.row.authority" :key="item.value" size="medium" class="table-tag">{{ item.name }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="extend"
          label="扩展"
          min-width="50"
          header-align="center"
          align="center"
        />
        <el-table-column
          label="操作"
          fixed="right"
          header-align="center"
          align="center"
        >
          <template slot-scope="scope">
            <platSettingButton
              label="修改权限"
              :size="size"
              @click="alterAuthority(scope.$index, scope.row)"
            />
          </template>
        </el-table-column>
      </el-table>

      <!--分页栏-->
      <div class="toolbar">
        <el-pagination
          layout="total, prev, pager, next, jumper"
          :current-page="pageRequest.pageNum"
          :page-size="pageRequest.pageSize"
          :total="pageResult.totalSize"
          @current-change="refreshPageRequest"
        />
      </div>
    </div>

  </div>
</template>

<script>
import platSettingButton from '@/views/project/platSetting/core/platSettingButton'
import { getAuthorityList } from '@/api/platSetting/userManage'
export default {
  components: {
    platSettingButton
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
      operation: false, // true:新增, false:编辑
      dialogVisible: false, // 新增编辑界面是否显示
      dialogEdit: '',
      editLoading: false,
      tableData: [{
        roleCode: '0',
        roleName: '集团计划处',
        authority: [{
          value: '0',
          name: '上传文件'
        }, {
          value: '1',
          name: '下载文件'
        }, {
          value: '2',
          name: '下载文件'
        }, {
          value: '3',
          name: '下载文件'
        }, {
          value: '4',
          name: '下载文件'
        }, {
          value: '5',
          name: '下载文件'
        }, {
          value: '6',
          name: '下载文件'
        }],
        extend: 'thtf'
      }, {
        roleCode: '1',
        roleName: 'God',
        authority: [{
          value: '0',
          name: '上传文件'
        }, {
          value: '1',
          name: '下载文件'
        }, {
          value: '2',
          name: '下载文件'
        }, {
          value: '3',
          name: '下载文件'
        }, {
          value: '4',
          name: '下载文件'
        }],
        extend: 'thtf'
      }, {
        roleCode: '2',
        roleName: '员工',
        authority: [{
          value: '0',
          name: '上传文件'
        }, {
          value: '1',
          name: '下载文件'
        }, {
          value: '2',
          name: '下载文件'
        }, {
          value: '3',
          name: '下载文件'
        }, {
          value: '4',
          name: '下载文件'
        }],
        extend: 'thtf'
      }, {
        roleCode: '3',
        roleName: '测试',
        authority: [{
          value: '0',
          name: '上传文件'
        }, {
          value: '1',
          name: '下载文件'
        }, {
          value: '2',
          name: '下载文件'
        }, {
          value: '3',
          name: '下载文件'
        }, {
          value: '4',
          name: '下载文件'
        }],
        extend: 'thtf'
      }]
    }
  },
  computed: {

  },
  mounted() {
    this.refreshPageRequest(1)
  },
  methods: {
    alterAuthority: function(index, row) {
      // this.$emit('handleEdit', { index: index, row: row })
    },
    // 换页刷新
    refreshPageRequest: function(pageNum) {
      this.pageRequest.pageNum = pageNum
      this.findPage()
    },
    findPage: function(data) {
      if (data !== null) {
        this.pageRequest = data.pageRequest
      }
      this.pageRequest['filterUserName'] = this.filters.name
      getAuthorityList(this.pageRequest).then(res => {
        this.pageResult.content = res.authorityList
        this.pageResult.totalSize = res.authorityListNumber
      }).then(data != null ? data.callback : '')
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
    .userDialog{
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
        background-color: #F9FAFB;
        padding: 20px 20px 0 20px;
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
