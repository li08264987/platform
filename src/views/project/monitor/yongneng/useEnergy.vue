<template>
  <div class="jiaoShuiShopMain">
    <div class="tools">
      <el-date-picker
        v-model="dateinput"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
      <el-input v-model="typeinput" placeholder="请输入内容" prefix-icon="el-icon-search" />
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button>运行回放</el-button>
    </div>
    <div id="intools">
      <el-button icon="el-icon-arrow-left" style="float:left;margin-left:20px;">上一页</el-button>
      <el-button style="float:right;margin-right:20px;">下一页<i class="el-icon-arrow-right el-icon--right" /></el-button>
    </div>
    <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in Floors" :key="index" :label="item.label" :name="item.name">
        <div style="height: 95%;margin-top: 3%;">
          <svg viewBox="-60 -20 1854 920" version="1.1" xmlns="http://www.w3.org/2000/svg" v-html="html" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import svg from '@/api/monitor/yiceng'
export default {
  name: 'UserEnergy',
  data() {
    return {
      html: svg,
      activeName: 'first',
      Floors: [{
        name: 'first',
        label: '厂区一层'
      }, {
        name: 'sixth',
        label: '厂区屋面'
      }]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    showVedio() {
      this.showNeibu = false
      this.showvedio = true
    },
    showNeiBu() {
      this.showNeibu = true
      this.showvedio = false
    }
  }
}
</script>
<style lang="scss">
  .jiaoShuiShopMain{
    height:99%;
    margin-left:50px;
      .tabs{
      height: 99%;
      .el-tabs__header{
        width: 160px;
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
  }
</style>
<style scoped lang="scss">
  .tools{
    position: absolute;
    right: 9px;
    margin-top: 5px;
  }
  #intools:after{
     display:block;
     content:'';
     clear:both;
     height:0;
     overflow:hidden;
 }
 #intools{
   position:absolute;
   text-align: center;
   height: 40px;
   line-height: 40px;
   width: 96%;
   top: 50px;
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
          width: 80%;
          height:100%;
          border:0px;
          span{
            display: block;
          }
        }
      }
    }
}

</style>
